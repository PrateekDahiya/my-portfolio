require('dotenv').config({ path: require('path').resolve(process.cwd(), 'server/.env') });
const mysql = require('mysql2/promise');

async function check() {
  const pool = mysql.createPool({
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
  });
  const [rows] = await pool.query('SELECT section, content FROM portfolio_content');
  for (const row of rows) {
    const content = typeof row.content === 'string' ? JSON.parse(row.content) : row.content;
    console.log(`Section: ${row.section}`);
    console.log(JSON.stringify(content, null, 2).substring(0, 500));
    console.log('---');
  }
  await pool.end();
}
check();