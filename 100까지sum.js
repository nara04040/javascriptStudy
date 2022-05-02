// 1+2+3+4+5+6.. + 100 를 만들어라

// 반복문
function sumTo(n) {
  let sum = 0;
  for (let i = 1; i <= n; i++) {
    sum += i;
  }
  return sum;
}
console.log(sumTo(100));

// 재귀
function sumTo2(n) {
  if (n == 1) return 1;
  return n + sumTo2(n - 1);
}
console.log(sumTo2(100));

// 등차수열 n * (n+1) / 2

function sumTo3(n) {
  return (n * (n + 1)) / 2;
}
console.log(sumTo3(100));

// 팩토리얼 계산
// factorial n이 자연수일때! 1~n까지의 모든 자연수의 곱을 의미한다. n! = n * (n - 1) * (n - 2) * ... * 1
// ex) 1! = 1, 2! = 2 * 1 = 2 ...
// 재귀를 사용해서 factorial(n)을 만들어 보아라.

function factorial(n) {
  return n != 1 ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));

function factorial(n) {
  return n ? n * factorial(n - 1) : 1;
}
console.log(factorial(5));
