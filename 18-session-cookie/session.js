const express = require('express');
const session = require('express-session');

const app = express();
const PORT = 8080;

app.set('view engine', 'ejs');
app.use(
  session({
    secret: 'MySessionSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, //1m

      // 세션 옵션 객체
      // secret: 안전하게 쿠키를 전송하기 위한 쿠키 서명 값
      // resave: 세션에 수정사항이 생기지 않더라도 매 요청(req)마다 세션을 다시 저장할 것인지
      // saveUninitialized: 세션에 저장할 내역이 없더라도 처음부터 세션을 생성할 지 설정
      // httpOnly: http 프로토콜에서도 세션 사용 가능
      // maxAge: 쿠키 수명 (단위 ms)
    },
  })
);

app.get('/', (req, res) => {
  res.render('session', { title: '안녕하세요?' });
});

app.get('/set', (req, res) => {
  req.session.name = '홍길동'; //{name: '홍길동'}
  res.send('세션 설정 완료!');
});

app.get('/name', (req, res) => {
  console.log(req.session);

  //현재 세션 아이디( req.sessionID)
  // : express - session 미들웨어어 의해 암호화된 쿠키 내용
  //(개발자도구 application 탬에서 s%3A 뒷 부분)
  res.send({ id: req.sessionID, name: req.session.name });
});

app.get('/destroy', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.log(err);
      return;
    }
    //res.redirect(주소): 주소로 이동(리다이렉트)
    res.redirect('/name'); //세션확인
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// 세션 정리
// 1. 세션 설정
// req.session.키 = 값

// 2. 세션 사용
// req.session.키

// 3. 세션 삭제
// req.session.destroy(콜백)
