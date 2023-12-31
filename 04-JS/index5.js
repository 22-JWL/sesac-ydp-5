// 함수
// : 특정 작업을 수행하기 위해 독립적으로 설계된 코드 집합

// 용어 정리
// - 함수 정의(선언): 함수를 "생성"
// - 함수 호출: 함수를 "사용"

// 1. 명시적 함수 선언
function helloWorld() {
  // return 키워드 생략 가능
  console.log('Hello, World!');
}
helloWorld(); // 함수 호출

function helloWorld2() {
  return 'Hello, World! 2';
}
// return (반환값)
// : 함수 내부(body, block) 코드의 "최종 결과값"
// 최종 결과값을 저장하고 보관하기위한 키워드
// return 키워드를 만나면 함수 실행 중단 (return 다음에 코드 더 작성 의미 x)
console.log(helloWorld2());

// 2. 함수 표현식 (Function Expression)
// 함수를 변수에 저장하는 형태
const helloWorld3 = function () {
  // return 생략 가능
  console.log('Hello, World! 3');
};

const helloWorld4 = function () {
  return 'Hello, World! 4';
};

helloWorld3();
console.log(helloWorld4());
helloWorld3();
helloWorld3();
helloWorld3();
helloWorld3();
// => 함수는 "여러 번" 호출 가능!!!!!

//////////////////////////////////////////////////////////
// 매개변수가 있는 함수는?!
function hello1(text) {
  return text;
}
console.log(hello1('안녕!!!'));
const apple = '사과는 맛있군';
console.log(hello1(apple));
const myNumber = 8;
console.log(hello1(myNumber));

function hello2(text, name) {
  //   return text + ' ' + name;
  return `${text} ${name}`;
}
console.log(hello2('안녕!!', 'John!!'));
console.log(hello2('잘가~~', 'John!!'));

function hello3(text, name) {
  console.log(`${text} ${name}`);
}
hello3('반갑당', '얘들아');

// 3. 화살표 함수 (arrow function)
// 함수 선언 문법이 간결함!
// body({}) 내에서 return 구문만 있을 때 생략이 가능
// 코드가 길어진다면 return 명시해야 함
const myFunc1 = (x) => x;
/*
  function myFunc1(x) {
      return x;
  }
  */
const mySum = (a, b) => a + b;
/*
  function mySum(a, b) {
      return a + b;
  }
  */
console.log(mySum(5, 2));

const myMulti = (a, b) => {
  let result = a * b;
  return result;
};
console.log(myMulti(3, 4));

//호이스팅(hoisting) **중요!!!!!!!!!
//:"끌어올리다" 사전적의미
//함수에서는 "함수 선언문"이 호이스팅 대상이 됨
// : 코드가 실행되기 전에 변수/함수 선언을 최상단으로 끌어올리는 현상
// 참고) 변수에서는 "var" 호이스팅의 대상(let, const 호이스팅 대상 x)
myHello();
function myHello() {
  console.log('hello~~~');
}

// myHello2();
// const myHello2() = function () {
//   console.log('hello~~~2');
// }

function multiply(x, y) {
  return x * y;
}
console.log(multiply(10, 20));

function square1(sq) {
  console.log(sq ** 2);
}
square1(4);
square1(11);
square1(5);

const square2 = (num) => {
  console.log(num ** 2);
};
square2(4);
square2(11);
square2(5);
