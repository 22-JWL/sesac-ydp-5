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
  res.render('index', { title: '동적 폼 실습' });
});

app.get('/axios', (req, res) => {
  console.log(req.query);
  res.send(req.query);
});
app.post('/axios', (req, res) => {
  console.log(req.body);
  res.send(req.body);
});
app.listen(PORT, () => {
  console.log(`${PORT} is opening????!`);
});
