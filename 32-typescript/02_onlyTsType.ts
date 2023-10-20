//only typescript type

//Tuple 그 배열의 길이를 늘리지 않겠다는 말이므로 push로 배열 추가할거면 그냥 arr써라
let drink: [string, string] = ['사이다', '롯데'];
drink[0] = 'cider';
drink[1] = 'lotte';

console.log(drink);

//readonly: 요소 타입 순서와 길이 고정
let drink2: readonly [string, number] = ['사이다', 2200];
// drink2.push('얏호'); //Error

let olimpic_newgame: readonly [object, boolean] = [
  {
    name: '쇼트트랙',
    type: '혼성 계주',
  },
  true,
];

type productInfo = [number, string, number];
let product1: productInfo = [1, 'Fender Stratocaster', 1200];
let product2: productInfo = [2, 'Les paul', 1800];
let product3: productInfo = [3, 'none', 0];

enum Cake {
  Choco,
  Vanilla,
  matcha,
}
enum Cafe {
  americano,
  latte = '카페라떼',
}

console.log(Cake);
console.log(Cafe);

//////////////////
//명시적으로

let val;
val: true;
val: 'hi';
val: 10000;
val = { name: 'sesac' };

///암묵적으로
let val2;
val2 = false;
val2 = 'bye';
//////////////////////////
//type & interface

interface Student {
  name: string;
  isPassed: boolean;
}

const student1: Student = {
  name: 'jwl',
  isPassed: true,
};

const student2: Object = {
  name: 'ethan',
  isPassed: false,
  addr: 'seoul',
};
console.log([student1, student2]);

//interface 상속
//점수체계 A+, A, B+, B, C, C+, F

// type Score = 'A+' | 'A' | 'B+' | 'B' | 'C' | 'C+' | 'F';

// enum도 되나요? 되지만 브레이크 포인트 같은곳에 쓰면 더 좋다
enum Score {
  Aplus = 'A+',
  A = 'A',
  Bplus = 'B+',
  B = 'A',
  Cplus = 'C+',
  C = 'C',
  F = 'F',
}
// type vs. enum
type Bp1 = 500 | 700 | 1000;
enum Bp2 {
  SM = 500,
  MD = 700,
  LG = 1000,
}

const width1: Bp1 = 500;
const width2: Bp2 = Bp2.SM;

interface Band extends Student {
  position: string;
  height: number;
  //?가 붙은거는 있어도 되고 없어도 되는 키라는 의미
  readonly backNumber?: number;
  [grade: number]: Score;
}

const ethan: Band = {
  name: 'Azac',
  isPassed: true,
  position: 'Drum,Composer',
  height: 180,
  backNumber: 24,
  // 1: 'A+', // 학년: 점수표시
  1: Score.Aplus,
};
ethan.name = 'Alpaca';
// ethan.backNumber = 10;  error : backNumber readonly
ethan['height'] = 200;
console.log(ethan);

//교차타입: 두가지 이상의 타입을 합치는 것

interface Toy {
  name: string;
  start(): void;
}

interface Car {
  name: string;
  color: string;
  price: number;
}
type ToyCar = Toy & Car;
const toyCar: ToyCar = {
  name: 'tayo',
  start() {
    console.log('출발!!!');
  },
  color: 'blue',
  price: 5000,
};

type Gender = 'F' | 'M';
type Person = {
  name: string;
  age?: number;
  like?: string[];
  gender: string;
};

let daniel: Person = {
  name: 'daniel',
  gender: 'F',
  age: 20,
  like: ['minji', 'hani'],
};
