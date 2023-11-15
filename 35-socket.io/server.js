const http = require('http'); // http 모듈 불러오기
const express = require('express'); //express 모듈 불러오기
const socketIO = require('socket.io'); //socket.io 모듈 불러오기

const app = express();
const server = http.createServer(app);
const io = socketIO(server); //socket.io를 서버에 연결
const PORT = 8080;

const nickArray = {}; //{socket.id :nick1, socket.id:nick2, ...}

const nickObjs = {};

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

  //   [실습 3]채팅창 입장 안내 문구
  //   io.emit('notice', `${socket.id}님이 입장하셨습니다.`);

  //   [실습 3-2]

  //emit()from server
  //- socket.emit(event_name, data) : 해당클라이언트에게만 이벤트, 데이터를 전송
  //-io.emit(event_name, data): 서버에 접속된 모든 클라이언트 전송
  socket.on('setNick', (nick) => {
    console.log(`닉네임 설정 완료 ::${nick} 님 입장`);

    //프론트에서 입력한 nick이 nickObjs 객체에 존재하는지 검사
    //이미 존재; error 이벤트 + '이미 존재하는 닉네임 입니다.'
    //새 닉네임; notice 이벤트 + ${nick} 님이 입장하셨습니다.
    if (Object.values(nickObjs).indexOf(nick) > -1) {
      //닉네임 이미 존재
      socket.emit('error', '이미 존재하는 닉네임입니다.');
    } else {
      //새로운 닉네임
      nickObjs[socket.id] = nick;
      console.log('접속 유자 목록::', nickObjs);
      io.emit('notice', `${nick}님이 입장하셨습니다.`); //전체 공지
      socket.emit('entrySuccess', nick); //해당 소켓 데이터 전송
    }
  });
});

server.listen(PORT, () => {
  console.log(`http://localhost:${PORT}`);
});
