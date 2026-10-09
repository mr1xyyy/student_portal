// Ishlatish: node db/sql.js "SQL so'rov"
const { pool } = require('./pool');

pool.query(process.argv[2])
  .then((r) => { console.table(r.rows); console.log(r.command, r.rowCount); })
  .catch((e) => console.error('Xato:', e.message))
  .finally(() => pool.end());