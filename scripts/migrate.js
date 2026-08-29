require('dotenv').config({ path: require('path').resolve(process.cwd(), 'server/.env') });
const fs = require('fs');
const path = require('path');
const mysql = require('mysql2/promise');

const MIGRATIONS_DIR = path.resolve(process.cwd(), 'migrations');

async function run() {
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

  const files = fs.readdirSync(MIGRATIONS_DIR)
    .filter(f => f.endsWith('.sql'))
    .sort();

  for (const file of files) {
    const sql = fs.readFileSync(path.join(MIGRATIONS_DIR, file), 'utf8');
    console.log(`\n▶ Running ${file} …`);
    try {
      const statements = sql.split(/;\s*$/m).filter(s => s.trim());
      for (const stmt of statements) {
        await pool.query(stmt);
      }
      console.log(`✔ ${file} applied`);
    } catch (err) {
      console.error(`✖ ${file} failed:`, err.message);
      process.exitCode = 1;
      break;
    }
  }
  await pool.end();
  console.log('\nAll migrations finished.');
}

run();