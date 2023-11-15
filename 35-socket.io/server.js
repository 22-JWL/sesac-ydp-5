const http = require('http'); // http 모듈 불러오기
const express = require('express'); //express 모듈 불러오기
const socketIO = require('socket.io'); //socket.io 모듈 불러오기

const app = express();
const server = http.createServer(app);
const io = socketIO(server); //socket.io를 ㅅ서버에 연결
const PORT = 8080;

app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('chat');
});

//io.on() : socket 관련한 통신 작업을 처리
io.on('connection', (socket) => {
  //콜백함수의 진자로 소켓 객체를 제공
  //connection 이벤트는 클라이언트가 접속했을 때 발생
  console.log('서버 연결 완료 ::', socket.id);
  //소켓 고유 아이디 (브라우저 탭 단위)

  // [실습 1]
  //   socket.on('hello', (data) => {
  //     console.log(`${data.who} : ${data.msg}`);
  //     socket.emit('helloKr', { who: 'hello', msg: '안녕!!' });
  //   });

  //   [실습 3]
  io.emit('notice', `${socket.id}님이 입장하셨습니다.`);
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
