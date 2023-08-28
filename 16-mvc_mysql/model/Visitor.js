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

exports.postVisitor = (data, callback) => {
  //매개변수
  //data : 프론트엔드에서 유저가 입력한 값(req.body)
  //callback : query 실행 후 호출할 함수

  conn.query(
    `insert into visitor values(null, "${data.name}", "${data.comment}")`,
    (err, rows) => {
      if (err) {
        throw err;
      }
      console.log('model >>', rows);
      callback(rows.insertId);
    }
  );
};
exports.deleteVisitor = (id, callback) => {
  console.log('model >>', id);

  conn.query(`delete`);
};
