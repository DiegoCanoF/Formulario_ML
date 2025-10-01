// db.js
const { Pool } = require('pg');

const pool = new Pool({
  user: 'formularioml_user', 
  host: 'dpg-d3e41l2li9vc739b0r0g-a.oregon-postgres.render.com',
  database: 'formularioml',
  password: 'trWkIXJj7wdAznxjY2h1npCkVhGyIYTR',
  port: 5432,
  ssl: { rejectUnauthorized: false }
});

module.exports = pool;