// const ps = process.env;
// console.log(ps);

//Express 및 express-session 미들웨어 임포트
const express = require('express');
//Express 애플리케이션을 생성하고 포트 8000을 지정하여 웹 서버를 설정
const app = express();

const dotenv = require('dotenv');
dotenv.config();

//루트 경로(/)에 접근했을 때
app.get('/', (req, res) => {
  console.log(process.env.NAME);
  console.log(process.env.NODE);
  res.send('Hello, world!');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
