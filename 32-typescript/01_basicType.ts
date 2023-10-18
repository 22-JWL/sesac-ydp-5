//typescript basic type

let a: number = 1;
a = 2;

console.log(a);

let b: string = 'str';
let c: boolean = true;
let d: undefined;
let e: null = null;

//타입 추론 (암묵적으로)
let aa = 1;
let bb = 'hi';
let cc = false;
let dd;
let ee = null;

console.log(a);
console.log(b);
console.log(c);
console.log(d);
console.log(e);
console.log(aa);
console.log(bb);
console.log(cc);
console.log(dd);
console.log(ee);

let numArr: number[] = [1, 2, 3, 4, 5];
console.log(numArr);
let strArr: Array<string> = ['apple', 'banana', 'melon'];
let str1Arr: string[] = ['ap', 'ban', 'mel'];

console.log(numArr);
console.log(strArr);
console.log(str1Arr);

//배열 원소가 여러 타입일 경우
let tempArr = [1, true, 'string'];
console.log(tempArr);

let temp1Arr: (number | boolean | string)[] = [1, true, 'string'];
console.log(temp1Arr);

let temp2Arr: Array<number[] | boolean | string> = [[1, 2, 3], true, 'string'];
console.log(temp2Arr);

let temp3Arr: any[] = [1, true, 'string'];
console.log(temp3Arr);
