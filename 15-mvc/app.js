const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.use('/views', express.static(__dirname + '/views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/uploads', express.static(__dirname + '/uploads'));
app.use('/static', express.static(__dirname + '/static'));

// (임시) DB로부터 받아온 댓글 목록
const comments = [
  {
    id: 1,
    userid: 'helloworld',
    date: '2022-10-31',
    comment: '안녕하세요^~^',
  },
  {
    id: 2,
    userid: 'happy',
    date: '2022-11-01',
    comment: '반가워유',
  },
  {
    id: 3,
    userid: 'lucky',
    date: '2022-11-02',
    comment: '오 신기하군',
  },
  {
    id: 4,
    userid: 'bestpart',
    date: '2022-11-02',
    comment: '첫 댓글입니당ㅎㅎ',
  },
];

app.get('/', function (req, res) {
  res.render('index');
});

app.get('/comments', function (req, res) {
  res.render('comments', { comments: comments });
});

app.get('/comment/:id', (req, res) => {
  console.log('req.params', req.params);
  const cmtId = Number(req.params.id);

  //   if (cmtId < 1 || cmtId > comments.length) {
  //     return res.render('404');
  //   }

  //   if (isNaN(cmtId)) {
  //     return res.render('404');
  //   }
  if (!comments[cmtId - 1]) {
    return res.render('404');
  }

  res.render('comment', { comment: comments[cmtId - 1] });
});

//param 여러개 사용 가능
app.get('/test/:id/:name', (req, res) => {
  console.log('req.params', req.params);
  res.send('test res success!');
});

//404 error 처리
// 반드시 맨 마지막 라우트로 선언
app.get('*', (req, res) => {
  res.render('404');
});

app.listen(PORT, function () {
  console.log(`http://localhost:${PORT}`);
});
