const Visitor = require('../model/Visitor');

exports.main = (req, res) => {
  res.render('index');
};

exports.getVisitors = (req, res) => {
  // [before]
  //   console.log(Visitor.getVisitors());
  //   res.render('visitor', { data: Visitor.getVisitors() });

  // [after]
  Visitor.getVisitors((result) => {
    console.log('controller >>', result);
    res.render('visitor', { data: result });
  });
};

exports.postVisitor = async (req, res) => {
  ///[before]
  // console.log(req.body);
  // // 예상{name:XPathExpression, comment:yy}

  // Visitor.postVisitor(req.body, (insertId) => {
  //   console.log('controller >> ', insertId);
  const { name, comment } = req.body;
  const result = await Visitor.create({
    name,
    comment,
  });
  //console.log(result);//create 메서드가 실행된 결과 (==insert한 데이터 값)
  res.send(result);
  // });
};

exports.deleteVisitor = (req, res) => {
//   console.log(req.body);
//   const { id } = req.body;

//   Visitor.deleteVisitor(id, (result) => {
//     //con
//     res.send(result);
//   });
const {id} = req.body;
await Visitor.destroy({
  where: {id:id},
});
res.send(true);
};

exports.getVisitor = (req, res) => {
  //[before]
  // // console.log(req.query);
  // console.log(req.params);
  // res.send('임시 응답!');
  //[after]
  const {id} = req.params;
  const result = await Visitor.findOne({
    where: { id:id},
  });
  console.log(result);
  res.send(result);
};
