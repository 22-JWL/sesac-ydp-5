// 구조 분해 할당
// 1. 배열 구조 분해 할당
// - 배열 구조 분해 할당시 "순서" 중요
const arr1 = [1, 2, 3, 4, 5];
const arr2 = ['a', 'b', 'c'];

const [one, two, three, four, five] = arr1;
console.log(one, two, three, four, five);
const [x, y, z, alpha] = arr2;
console.log(x, y, z, alpha);

let num1 = 1;
let num2 = 3;
console.log('swap 전 >', num1, num2);
[num2, num1] = [num1, num2]; // [num2, num1] = [1, 3]
console.log('swap 후 >', num1, num2);

const lists = ['apple', 'grape'];
[f1, f2, f3 = 'orange'] = lists;
console.log(f1, f2, f3);

// 2. 객체 구조 분해 할당
// - 변수를 선언하는 순서는 중요하지 않음
// - 키 값과 변수명이 일치해야 함
const obj = {
  title: '엘리멘탈',
  content: '재밌어요',
  num: 5,
};
// 객체 구조 분해 쓰지 않았을 때
console.log(obj.title, obj.content, obj.num);
console.log(obj['title'], obj['content'], obj['num']);

// 객체 구조 분해 쓰고 싶다면
// key 가 존재하지 않을 때를 대비하여 = 연산자를 이용하면 default 값을 할당
const { num, title, content, star = 1000 } = obj;
console.log(title, content, num, star);

const { n1, t1, c1 } = obj;
console.log(n1, t1, c1); // undefined

// 콜론(:)을 이용하면 새 변수명으로 바꿔서 저장할 수 있다!!
const { title: t2, num: n2, content: c2 } = obj;
console.log(t2, c2, n2);

///////////////
function getInfo(lecture) {
  // TODO: 구조 분해 할당을 사용하여 값 추출
  const { name, part, leader } = lecture;

  // TODO: 출력 문장 생성
  const output = `${name} 강의는 ${part} 개발을 공부합니다. 수업의 리더는 ${leader} 입니다.`;

  return output;
}

const lectureInfo = {
  name: 'SESAC x CODINGOn',
  part: 'WEB',
  leader: 'Sean',
};

const result = getInfo(lectureInfo);
console.log(result); // SESAC x CODINGOn 강의는 WEB 개발을 공부합니다. 수업의 리더는 Sean 입니다.

/////
//spread 연산자
//반복 가능한 객체에 대해서 단일 요소로 압축을 해제하는 역할(== 객체의 값을 펼친다!!!)
//spread in array
console.clear();
const a = [1, 2, 3];
const b = [4, 5];
const spread = [...a, ...b];
console.log(spread);

const c = [...'HELLO'];
const d = 'HELLO'.split('');
console.log(c);
console.log(d);

const chip = {
  base: 'chip',
  company: 'lotte',
};

const potatoChip = {
  ...chip,
  flavor: 'potato',
};

const sweetPotatoChip = {
  ...chip,
  flavor: 'sweet potato',
};
console.log(chip);
console.log(potatoChip);
console.log(sweetPotatoChip);
////////////////

const word1 = 'abc';
const word2 = 'xys';

const subWord = word1 + word2;
console.log(subWord.split(''));

///////////////////////
//rest 파라미터
const values = [10, 20, 30, 40, 50, 60];

function get(a, b, ...rest) {
  console.log('a >>', a); //10
  console.log('b >>', b); ///20
  console.log('rest >>', rest); // [30,40,50,60]
}

get(...values);

// 2. 객체에서 rest
const icecream = {
  company: 'lotte',
  flavor: 'choco',
  price: 1000,
};

const { flavor, ...rest } = icecream;
console.log(flavor); //choco
console.log(rest); //{company: 'lotte', price: 1000}

//3. 배열에서 rest
const number = [1, 2, 3, 4, 5, 6, 7, 8];
const [one1, two1, ...rest2] = number;
console.log(one1); //1
console.log(two1); //2
console.log(rest2); //[3,4,5,6,7,8]

console.clear();
////////////////
//클래스
// : 객체 생성 템플릿 => 객체를 만들기 위해 사용!

// 집이라는 현실 세계의 객체를 만들어 보자!

class House {
  // 생성자 함수
  // : 클래스를 이용해 객체를 생성할 때 마다 속성을 초기화
  constructor(year, name, window) {
    this.year = year;
    this.name = name;
    this.window = window;
  }

  // 메서드 1: 집의 나의를 출력
  getAge() {
    console.log(`${this.name}는 건축한지 ${2023 - this.year}년 되었어요! `);
  }

  // 메서드 2: 집의 창문 개수 출력
  getWindow() {
    console.log(`${this.name}의 창문은 ${this.window}개 입니다!`);
  }
}

const house1 = new House(1990, '롯데캐슬', 1);
console.log('house1 >>', house1);
console.log(typeof house1);
console.log(house1.year);
house1.getAge();
house1.getWindow();

const house2 = new House(2007, '자이', 10);
house2.getAge();
house2.getWindow();

class Shape {
  constructor(width, height) {
    this.width = width;
    this.height = height;
  }

  getArea() {
    console.log(`${this.width * this.height}`);
  }
}

let rec1 = new Shape(3, 4);
console.log(rec1.getArea());

// 클래스 상속
// 부모 클래스: House
// 자식 클래스 Apartment
class Apartment extends House {
  constructor(year, name, window, floor, windowMaker) {
    // 부모 객체에서 상속 받아옴 = 상속한 부모 클래스의 생성자를 호출
    super(year, name, window);
    this.floor = floor;
    this.windowMaker = windowMaker;
  }

  getAptInfo() {
    return `${this.year}에 지어진 ${this.name} 아파트의 총 층수는 ${this.floor} 이며, 창문의 개수는 ${this.window}`;
  }

  // 오버라이딩(overriding)
  // 부모 클래스에 정의되어 있는 메서드 이름을 동일하게 쓰되, 내용은 다를 때
  getWindow() {
    return `${this.name} 아파트의 ${this.window}개의 창문은 ${this.windowMaker} 회사에서 생산되었습니다.`;
  }
}

const apt1 = new Apartment(2022, '래미안', 3, 20, 'kcc');
console.log(apt1.getAptInfo());
console.log(apt1.getWindow());
