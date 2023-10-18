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
