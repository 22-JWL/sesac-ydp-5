const express = require('express');
const app = express();
const PORT = 8000;

app.set('view engine', 'ejs');
app.set('/views', 'views');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/', (req, res) => {
  //res.render(ejs_경로, 데이터)
  //ejs_경로: views/ 폴더 내부 ejs 파일의 주소
  //데이터: 뷰에 넣어줄 정보
  res.render('index', { title: 'POST으로 정보 받기' });
});

app.post('/postForm', (req, res) => {
  console.log(req.body);
  //   res.send('post 요청 성공!');
  res.render('result', { title: 'Post 요청', userInfo: req.body });
});

app.listen(PORT, () => {
  console.log(`${PORT} is opening!`);
});
