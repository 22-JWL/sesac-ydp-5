//generic
// 선언할 때 타입을 지정하기 어려운 케이스가 존재.
// = 데이터 타입을 외부에서 지정
// = 생성시점에 타입을 명시
//=> 재사용성 증가
// 타입을 변수처럼 사용한다
//<T>형태로 주로 사용

function numArrLen(arr: number[]): number {
  return arr.length;
}
function strArrLen(arr: string[]): number {
  return arr.length;
}

console.log(numArrLen([1, 2, 3]));
console.log(strArrLen(['1', '2', '3', '4']));

function arrLen<T>(arr: T[]): number {
  return arr.length;
}
console.log(arrLen<string>(['1', '2', '3', '4']));
console.log(arrLen<number>([1, 2, 3]));
console.log(arrLen<string | number>(['원', 2]));

/////////// T: type, U:usually
function printSome<T, U>(x: T, y: U): void {
  console.log(x, y);
}

printSome<string, string>('hi', 'hello');

//////////////
//interface와 generic
interface Phone<T> {
  company: string;
  createdAt: Date;
  option: T;
}

type iphoneOption = {
  color: string;
  storage: number;
};

const iphone15: Phone<iphoneOption> = {
  company: 'apple',
  createdAt: new Date('2023-10-05'),
  option: {
    color: 'black',
    storage: 128,
  },
};
console.log(iphone15);

type galaxyOption = {
  color: string;
  isBuz: boolean;
};

const galaxy23: Phone<galaxyOption> = {
  company: 'samsung',
  createdAt: new Date('2023-10-05'),
  option: {
    color: 'blue',
    isBuz: true,
  },
};
console.log(galaxy23);

function sum(...sum2: number[]): number {
  let sum = 0;
  for (let i = 0; i < sum2.length; i++) {
    sum += sum2[i];
  }
  return sum;
}

console.log(sum(1, 2, 3, 4, 10));
