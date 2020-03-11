const Pool = require('pg').Pool;
const conn;

const getUsers = (req, res) => {
  conn.query('SELECT * FROM users ORDER BY id ASC', (err, results) => {
    if (err) throw err;
    res.status(200).json(results.rows);
  })
}
