const express = require('express');
const session = require('express-session');
const app = express();
const PORT = 8001;

app.set('view engine', 'ejs');
app.set('views', './views');
app.use('/static', express.static(__dirname + '/static'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// TODO: express-session 미들웨어 등록
app.use(
  session({
    secret: 'MySessionSecretKey',
    resave: false,
    saveUninitialized: true,
    cookie: {
      httpOnly: true,
      maxAge: 60 * 1000, //1m
    },
  })
);

// 정답 id, pw
const userInfo = { id: 'banana', pw: '1234' };

// GET / 요청시; 세션의 user 키 값 확인 (req.session.user)
app.get('/', (req, res) => {
  if (req.session.user) {
    // 세션에 user 키 값이 있다면 (로그인 상태)
    res.render('index', { isLogin: true, user: req.session.user });
  } else {
    // 세션에 user 키 값이 없다면 (로그아웃 상태)
    res.render('index', { isLogin: false, user: null });
  }
});

// GET /login 요청시; login.ejs 랜더
app.get('/login', (req, res) => {});

// POST /login 요청시;
app.post('/login', (req, res) => {
  const { id, pw } = req.body; // 폼 데이터에서 아이디와 비밀번호 가져오기

  if (id === userInfo.id && pw === userInfo.pw) {
    // 아이디와 비밀번호가 일치하면 세션에 로그인 정보 저장
    req.session.user = id;
    res.redirect('/'); // 홈 페이지로 리디렉션
  } else {
    // 아이디와 비밀번호가 일치하지 않으면 로그인 실패 메시지 전송
    const script =
      '<script>alert("로그인 실패"); window.location.href="/";</script>';
    res.send(script);
  }
});

// GET /logout 요청시;
app.get('/logout', (req, res) => {
  req.session.destroy((err) => {
    if (err) {
      console.error('세션 삭제 중 오류 발생:', err);
    }
    res.redirect('/'); // 홈 페이지로 리디렉션
  });
});

app.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});

// req 객체
// req.session: 사용자별로 해당 객체 안에 세션 정보 유지됨

// 세션쿠키 설정
// req.session.키 = 값

// 세션쿠키 사용
// req.session.키

// 세션 삭제
// req.session.destroy(콜백)
