require('dotenv').config({ path: require('path').resolve(process.cwd(), 'server/.env') });
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');
const cloudinary = require('cloudinary').v2;

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 5,
  queueLimit: 0
});

// Build a map of all local asset files
const ASSETS_DIR = path.join(process.cwd(), 'public', 'assets');
const assetFiles = new Map();
function scanAssets(dir) {
  if (!fs.existsSync(dir)) return;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      scanAssets(full);
    } else {
      const rel = path.relative(path.join(process.cwd(), 'public'), full);
      assetFiles.set(entry.name.toLowerCase(), rel);
      // Also store with subfolder prefix
      const relFromAssets = path.relative(ASSETS_DIR, full);
      assetFiles.set(relFromAssets.toLowerCase(), rel);
    }
  }
}
scanAssets(ASSETS_DIR);
console.log(`📦 Found ${assetFiles.size} local asset files`);

async function uploadToCloudinary(localPath, folder = 'portfolio') {
  const publicId = folder + '/' + path.basename(localPath, path.extname(localPath));
  try {
    const result = await cloudinary.uploader.upload(localPath, {
      public_id: publicId,
      overwrite: true,
      resource_type: 'auto',
    });
    console.log(`✅ Uploaded ${localPath} → ${result.secure_url}`);
    return result.secure_url;
  } catch (err) {
    console.error(`❌ Failed to upload ${localPath}:`, err.message);
    return null;
  }
}

function findLocalImages(obj) {
  const urls = [];
  if (typeof obj === 'string') {
    // Check if this string matches a known asset file
    const lower = obj.toLowerCase();
    if (assetFiles.has(lower)) {
      urls.push({ path: obj, fullPath: path.join(process.cwd(), 'public', assetFiles.get(lower)) });
    } else if (obj.startsWith('/assets/')) {
      // absolute path from public
      const full = path.join(process.cwd(), 'public', obj);
      if (fs.existsSync(full)) {
        urls.push({ path: obj, fullPath });
      }
    }
    return urls;
  }
  if (Array.isArray(obj)) {
    obj.forEach(item => urls.push(...findLocalImages(item)));
  } else if (obj && typeof obj === 'object') {
    Object.values(obj).forEach(val => urls.push(...findLocalImages(val)));
  }
  return urls;
}

async function main() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    waitForConnections: true,
    connectionLimit: 5,
    queueLimit: 0
  });

  const uploadCache = new Map();

  try {
    const [rows] = await pool.query('SELECT section, content FROM portfolio_content');
    for (const row of rows) {
      let content = typeof row.content === 'string' ? JSON.parse(row.content) : row.content;
      const localImages = findLocalImages(content);
      if (localImages.length === 0) continue;

      console.log(`\n🔍 Section "${row.section}" has ${localImages.length} local image(s)`);
      let updated = false;

      for (const img of localImages) {
        if (!fs.existsSync(img.fullPath)) {
          console.warn(`⚠️  File not found: ${img.fullPath}`);
          continue;
        }

        let cloudUrl = uploadCache.get(img.path);
        if (!cloudUrl) {
          console.log(`⬆️  Uploading ${img.path} ...`);
          cloudUrl = await uploadToCloudinary(img.fullPath);
          if (cloudUrl) uploadCache.set(img.path, cloudUrl);
        }

        if (cloudUrl) {
          const replaceInObj = (obj) => {
            if (typeof obj === 'string') {
              return obj === img.path ? cloudUrl : obj;
            }
            if (Array.isArray(obj)) {
              return obj.map(replaceInObj);
            }
            if (obj && typeof obj === 'object') {
              const newObj = {};
              for (const [k, v] of Object.entries(obj)) {
                newObj[k] = replaceInObj(v);
              }
              return newObj;
            }
            return obj;
          };
          content = replaceInObj(content);
          updated = true;
          console.log(`   🔁 Replaced ${img.path} → ${cloudUrl}`);
        }
      }

      if (updated) {
        await pool.query(
          'UPDATE portfolio_content SET content = ? WHERE section = ?',
          [JSON.stringify(content), row.section]
        );
        console.log(`✅ Updated section "${row.section}"`);
      }
    }
    console.log('\n🎉 All images uploaded and database updated!');
  } catch (err) {
    console.error('❌ Error:', err);
  } finally {
    await pool.end();
  }
}

main();