/**
 * 모던 자바스크립트는 숫자를 나타내는 자료형이 두가지가 존재한다.
 *  1. 64비트 형식의 숫자
 *  2. 임의의 길이를 가진 정수인 BigInt
 */

// 숫자 옆에 'e'를 붙이면 0의 개수를 줄일수있습니다.
let billion = 1e9;
console.log(billion);

/**
 * 'e'는 e 왼쪽의 수에 e 오른쪽 있는 수만큼 10의 거듭제곱을 곱하는 효과가 있다.
 * 1e3 = 1 * 1000
 * 1.23e6 = 1.23 * 1000000
 * 1e-6 = 0.000001
 * 1.23e-6 = 0.00000123
 */

/**
 * 16진수
 *  - 0xff = 255 (대소문자를 가리지 않습니다.)
 * 2진수
 *  - 0b11111111 = 255 의 2진수
 * 8진수
 *  -0o377 = 255의 8진수
 * js는 이 3가지 진법을 지원하고 이 외의 진법은 parseInt를 사용해야한다.
 *
 */

/**
 * toString(base)
 * num.toString(base) 는 base진법으로 num을 표현후, 이것을 문자형으로 변환한뒤 반환한다.
 * base는 2~36까지 쓸수 있다, 기본값은 10이다.
 * 1234..toString(36)은 오타가 아니라 숫자를 대상으로 toString을 호출한다면 ..를쓴다.
 */

let num = 255;
console.log(num.toString(16));
console.log(num.toString(2));

/**
 * 어림수(rounding) 구하기
 * 내장 함수
 *  1. Math.floor : 내림
 *  2. Math.ceil : 올림
 *  3. Math.round : 반올림
 *  4. Math.trunc : 소수를 무시
 */
let num2 = 1.23456;
console.log(Math.floor(num2 * 100) / 100);

let num3 = 12.34;
console.log(num3.toFixed(1));

/**
 * 부정확한 계산
 * 숫자가 너무 커지면 64비트 공간이 넘쳐서 Infinity로 처리된다.
 *
 */

console.log(0.1 + 0.2 == 0.3); // 왜 이렇게 나올까?
// 간단히 말하면 2진법을 사용해 0.1이나, 0.2를 정확하게 저장하는 방법이 없어서그런다.
// 해결책 : toFixed(n) 을 이용해 어림수로 만들어서 계산한다.
let sum = 0.1 + 0.2;
console.log(sum.toFixed(2)); // toFixed는 항상 문자열을 반환한다. 고로 단항 덧셈연산자 : '+'를 추가해주자
console.log(+sum.toFixed(2));
