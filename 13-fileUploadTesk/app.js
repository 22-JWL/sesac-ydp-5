const express = require('express');
const app = express();
const PORT = 8000;

// TODO: multer 관련 설정

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: static 미들웨어 설정
// 1. uploads/ 폴더 접근 가능하도록
// 2. static/ 폴더 접근 가능하도록
const multer = require('multer');
const path = require('path'); // 경로에 관한 내장 모듈
const upload = multer({
  dest: 'uploads/', // dest: 클라이언트가 업로드한 파일을 저장할 서버측 경로
});
// multer 세부 설정
const uploadDetail = multer({
  // storage: 저장할 공간에 대한 정보
  // done(null, xx) 여기서 null은 error를 의미하는 매개변수
  // 에러가 없으므로 "null"이라고 전달하여 콜백 함수를 호출!
  storage: multer.diskStorage({
    destination(req, file, done) {
      // done: callback
      done(null, 'uploads/'); // 파일을 업로드할 경로 설정
    },
    filename(req, file, done) {
      const ext = path.extname(file.originalname); // 파일 "확장자"를 추출
      done(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  // limits: 파일 제한 정보
  limits: { fileSize: 5 * 1024 * 1024 }, // 5MB
});

// TODO: 라우터 정의
// 1. GET /: index.ejs render
// 2. POST /result: result.ejs render

app.get('/', (req, res) => {
  res.render('index');
});

// 1. single(): 하나의 파일을 업로드
// upload.single('userfile'): 클라이언트의 요청이 들어오면
// multer 설정(upload 변수)에 따라 파일을 업로드 한 후, req.file 객체 생성
// single() 인자는 input 태그의 name 속성과 일치시켜야 함
// app.post('/upload', upload.single('userfile'), (req, res) => {
app.post('/result', uploadDetail.single('userfile'), (req, res) => {
  // req.file: 파일 업로드 정보
  // req.body: 파일 외의 정보들
  console.log(req.file); // { 파일_정보 }
  console.log(req.body);
  res.send('파일 업로드 완료!');
});

// 동적 폼 전송
app.post('/dynamicFile', uploadDetail.single('dynamicUserfile'), (req, res) => {
  console.log(req.file);
  res.send(req.file);
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
