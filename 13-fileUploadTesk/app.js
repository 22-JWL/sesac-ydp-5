const express = require('express');
const app = express();
const PORT = 8000;

// TODO: multer 관련 설정
// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
// 2. static/ 폴더 접근 가능하도록
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const uploadDetail = multer({
  storage: multer.diskStorage({
    destination(req, file, done) {
      console.log('destination: ', req.body);
      done(null, 'uploads/');
    },
    filename(req, file, done) {
      console.log('filename: ', req.body);
      const ext = path.extname(file.originalname);

      done(null, req.body.userid + Date.now() + ext);
    },
  }),
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});
// multer 세부 설정
// const uploadDetail = multer({
//   // storage: 저장할 공간에 대한 정보
//   // done(null, xx) 여기서 null은 error를 의미하는 매개변수
//   // 에러가 없으므로 "null"이라고 전달하여 콜백 함수를 호출!
//   storage: multer.diskStorage({
//     destination(req, file, done) {
//       // done: callback
//       done(null, 'uploads/'); // 파일을 업로드할 경로 설정
//     },
//     filename(req, file, done) {
//       const ext = path.extname(file.originalname); // 파일 "확장자"를 추출
//       done(null, path.basename(file.originalname, ext) + Date.now() + ext);
//     },
//   }),
//   // limits: 파일 제한 정보

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/static', express.static(__dirname + '/static'));
app.use('/uploads', express.static(__dirname + '/uploads'));

// TODO: 라우터 정의
// 1. GET /: index.ejs render
// 2. POST /result: result.ejs render

app.get('/', function (req, res) {
  res.render('index', { title: '파일 업로드 실습!!!' });
});

// 1. single(): 하나의 파일을 업로드
// upload.single('userfile'): 클라이언트의 요청이 들어오면
// multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함
// app.post('/upload', upload.single('userfile'), (req, res) => {

// 동적 폼 전송
app.post('/result', uploadDetail.single('profile'), (req, res) => {
  console.log(req.file);
  console.log(req.body);

  res.render('result', {
    userInfo: req.body,
    src: req.file.path,
  });
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
