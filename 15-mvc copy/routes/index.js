//모듈!!
const express = require('express');
const controller = require('../controller/Cmain');
const router = express.Router();

// // (임시) DB로부터 받아온 댓글 목록
// const comments = [
//   {
//     id: 1,
//     userid: 'helloworld',
//     date: '2022-10-31',
//     comment: '안녕하세요^~^',
//   },
//   {
//     id: 2,
//     userid: 'happy',
//     date: '2022-11-01',
//     comment: '반가워유',
//   },
//   {
//     id: 3,
//     userid: 'lucky',
//     date: '2022-11-02',
//     comment: '오 신기하군',
//   },
//   {
//     id: 4,
//     userid: 'bestpart',
//     date: '2022-11-02',
//     comment: '첫 댓글입니당ㅎㅎ',
//   },
// ];
// // GET localhost:PORT/player/

// router.get('/', function (req, res) {
//   res.render('index');
// });

// // GET localhost:PORT/player/comments

// router.get('/comments', function (req, res) {
//   res.render('comments', { comments: comments });
// });

// // GET localhost:PORT/player/comment/:id
// router.get('/comment/:id', (req, res) => {
//   console.log('req.params', req.params);
//   const cmtId = Number(req.params.id);

//   //   if (cmtId < 1 || cmtId > comments.length) {
//   //     return res.render('404');
//   //   }

//   //   if (isNaN(cmtId)) {
//   //     return res.render('404');
//   //   }
//   if (!comments[cmtId - 1]) {
//     return res.render('404');
//   }

//   res.render('comment', { comment: comments[cmtId - 1] });
// });

router.get('/', controller.main);
router.get('/comments', controller.comments);
router.get('/comment/:id', controller.comment);

//module.exports 구문을 통해 router를 내보내야
//다름모듈(파일)에서 router 객체를 사용 가능
module.exports = router;
