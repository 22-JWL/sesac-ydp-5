const express = require('express');
const cookieParser = require('cookie-parser');
const app = express();
const PORT = 8000;
const path = require('path'); //path를 import한다

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); //폴더, 폴더경로 지정

// 미들웨어 등록
// app.use(cookieParser()); // 일반 쿠키
const COOKIE_SECRET_KEY = 'This is my secret key'; // 쿠키에 대한 비밀키
app.use(cookieParser(COOKIE_SECRET_KEY)); // 암호화 쿠키
const myCookieConf = {
  // httpOnly: 웹 서버를 통해서만 크키 접근 가능 (프론트에서 document.cookie로 접근을 차단)
  // maxAge: 쿠키 수명 (단위 ms)
  // expires: 만료 날짜를 GMT시간설정
  // path: 해당 디렉토리와 하위 디렉토리에서만 경로가 활성화되고 웹 브라우저는 해당하는 쿠키만 웹 서버에 전송
  // 즉, 쿠키가 전송될 url특정 가능(기본값: /)
  // domain: 쿠키가 전송될 도메인을 특정 가능(기본값: 현재도메인)
  // secure: 웹브라우저와 웹서버가 https로 통신하는 경우만 쿠키를 서버에 전송
  // signed: 쿠키의 암호화 결정(req.signedCookies객체에 들어있음)
  httpOnly: true,
  maxAge: 20 * 1000, // 20s
  signed: true, // 암호화 쿠키
};

app.get('/', (req, res) => {
  res.render('cookie');
  console.log('req.cookies.popup >> ', req.cookies.popup);
  res.render('index', { popup: req.cookies.popup });
  //req.cookies.popup >>  undefined
});

app.get('/setCookie', (req, res) => {
  // res.cookie(쿠키 이름, 쿠키 값, 쿠키 옵션)

  res.cookie('myCookie', 'myValue', myCookieConf);
  res.send('Cookie 설정 완료!');
});

app.get('/getCookie', (req, res) => {
  // res.send(req.cookies); // 일반 쿠키
  res.send(req.signedCookies); // 암호화 쿠키
});

app.get('/clearCookie', (req, res) => {
  res.clearCookie('myCookie', 'myValue', myCookieConf);
  res.send('Cookie 삭제 완료!');
});

app.get('/index', (req, res) => {
  res.cookie('popup', 'hide', myCookieConf);
  console.log('req.cookies.popup >> ', req.cookies.popup);
  res.render('index', { popup: req.cookies.popup });
  res.render('index');
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

//'쿠키이름', '쿠키값', '옵션객체' 등록하는게 아니라 res2번 사용해도 괜찮다.

//미들웨어(요청과 응답의 중간 역할) 등록
