/**
 * 화살표 함수(arrowFunction)
 * 단순하고 간결한 문법으로 함수를 만들 수 있는 방법
 *  let func = (arg1, arg2, ... argN) => expreesion
 */

// t1
let sum = (a, b) => a + b;
console.log(sum(1, 2));

// t2
let double = (n) => n * 2;
console.log(double(8));

// t3
let sayHi = () => console.log("안녕하세요?");

sayHi();

// t4

let age = console.log("나이를 알려주세요.", 18);
let welcome =
  age < 19 ? () => console.log("성인이네?") : () => console.log("미성년자네?");

welcome();
