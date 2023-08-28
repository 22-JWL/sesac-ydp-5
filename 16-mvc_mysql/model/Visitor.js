// exports.getVisitors = () => {
//   return [
//     { id: 1, name: '철수', comment: '머리를 찼다' },
//     { id: 2, name: '영희', comment: '차가워 졌다' },
//   ];
// };

const mysql = require('mysql');

const conn = mysql.createConnection({
  host: 'localhost',
  user: 'user',
  password: '1234',
  database: 'sesac_16_mvc',
});

exports.getVisitors = (callback) => {
  conn.query(`SELECT * FROM visitor`, (err, rows) => {
    if (err) {
      throw err;
    }
    callback(rows);
  });
};
