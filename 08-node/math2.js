const add = (a, b) => a + b;
const sub = (a, b) => a - b;
const mul = (a, b) => a * b;
const div = (a, b) => {
  if (b !== 0) {
    return a / b;
  } else {
    return '나누어지는 수는 0이 아님!';
  }
};

const E = 2.718;
const PI = 3.141592;

//case1 객체로 감싸서 내보내기
module.exports = {
  add: add,
  sub: sub,
  mul,
  div,
  E: E,
  PI: PI,
};

// module.exports = {
//   add, //obj에서 key, value가 동일할 때 생략 가능~
//   E,
//   PI,
// };

//case2. 하나씩 내보내기
// module.exports.add = add;
// module.exports.PI= PI;
// module.exports.E =E;

// case2를 더 간단히!
// exports.add = add;
// exports.PI = PI;
// exports.E = E;

//request 이벤트 : 클라이언트 요청
