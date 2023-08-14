// async function f1() {
//   return 1;
// }

// async function f2() {
//   return Promise.resolve(1);
// }

// console.log('1 >> ', f1()); // f1 함수는 async 키워드가 붙어 있으므로 프로미스를 반환! => Promise { 1 }
// f1().then(function (result) {
//   console.log('2 >> ', result); // 1
// });

// console.log('3 >> ', f2()); //  Promise { <pending> }
// f2().then(function (result) {
//   console.log('4 >> ', result); // 1
// });

/////////////////////////////////////
// async - await
// async: 함수 앞에 붙이는 키워드
// - 함수만 보고도 비동기 함수임을 유추하고자 함
// - 프로미스를 반환

// await: 기다리다
// - 성공/실패로 프로미스 객체의 실행이 완료되기를 기다림
// - await 뒤에는 프로미스가 오게 됨
// - **async 키워드를 사용한 함수 안에서만 await 키워드를 사용 가능

// async/await 세트

// 1초 뒤에 과일 배열을 출력하는 코드
function fetchFruits() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      const fruits = ['사과', '레몬', '수박'];
      resolve(fruits);
      // reject(new Error('알 수 없는 에러 발생!! 아이템을 가져올 수 없음!!'));
    }, 1000);
  });
}
ㅇ;
//async-await 키워드 사용시
// 에러처리는 try- catch 구문
function pickDrink() {}

function login(name, cb) {
  setTimeout();
}
