// test.js
const pool = require('./db');

(async () => {
  try {
    const res = await pool.query('SELECT NOW()');
    console.log('✅ Conexión exitosa:', res.rows[0]);
    process.exit(0);
  } catch (err) {
    console.error('❌ Error al conectar a la base de datos:', err);
    process.exit(1);
  }
})();
