//DB로부터 받아온 댓글 목록
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
//model 화살표
const Comment = require('../model/Comment');

//viwe 에 가있는 홧살표
exports.main = (req, res) => {
  res.render('index');
};
exports.comments = (req, res) => {
  res.render('comments', { comments: Comment.getCommentAll() });
};
exports.comment = (req, res) => {
  const cmtId = Number(req.params.id);
  const comments = Comment.getCommentAll();

  if (!comments[cmtId - 1]) {
    return res.render('404');
  }

  res.render('comment', { comment: comments[cmtId - 1] });
};
