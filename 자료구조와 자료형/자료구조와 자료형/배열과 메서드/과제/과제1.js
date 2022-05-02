// 1. 내림차순으로 정렬
let arr = [5, 2, 1, -10, 8];
arr.sort((a, b) => b - a);
console.log(arr);

// 2. 배열 복사본을 정렬하기

function copySorted(arr1) {
  return arr1.slice().sort();
}

let arr1 = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr1);

console.log(arr1);
console.log(sorted);

/*
 ts3 : 확장 가능한 계산기
    1. "숫자 연산자 숫자" 형태 로 바꿔주는 메서드를 calculater(str) 를 구현하자
    2. 계산기가 새로운 연산을 하게 메서드 addMethod(name, func) 를 추가하자.   
*/
function Calculator() {
  this.methods = {
    "-": (a, b) => a - b,
    "+": (a, b) => a + b,
  };
  this.calculate = function (str) {
    let split = str.split(" "),
      a = +split[0],
      op = split[1],
      b = +split[2];

    if (!this.methods[op] || isNaN(a) || isNaN(b)) {
      return NaN;
    }
    return this.methods[op](a, b);
  };
  this.addMethod = function (name, func) {
    this.methods[name] = func;
  };
}

let powerCalc = new Calculator();
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);

let result = powerCalc.calculate("2 ** 3");
alert(result); // 8
