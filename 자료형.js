// https://ko.javascript.info/types

/**
 * 문자열이나 숫자형 같은 특정한 자료형에 속한다.
 * 자료타입이 존재하지만 변수에 저장되는 타입을 바꿀수 있는 언어를 동적타입이라고 부른다(dynamically typed)
 */

let message = "hello"; // let으로 massage를 선언
message = 12345; // message가 숫자형으로 재선언.
console.log(message);

let n = 123;
n = 123.456;

console.log(1 / 0);
console.log(Infinity);

/**
 * JS에서의 수학연산은 안전하다고 말한다.
 * 예로 0으로 나눈다거나 문자열을 숫자로 취급하는 연산이 js에서는 가능하다.
 * 말도안되는 연산도 에러를 뱉지않고 NaN으로 반환함. ㅋㅋ
 */

/**
 * BigInt
 * JS에서는 (2^53-1)(9007199254740991)보다 큰값은 '숫자형'으로 나타낼수 없다.
 * firefox, Chrome, Edge, Safari에서만 지원
 */

/**
 * 문자열(string)
 * JS에서는 글자형이라는 개념이 없다!!
 */

/**
 * 불린(Boolen)
 * true, false 두가지 밖에 없다.
 */
let isGreater = 4 > 1;
console.log(isGreater);

/**
 * undefined
 * null 처럼 자료형을 형성한다.
 * 값이 할당되지 않은 상태를 뜻한다.
 */
let age = 100;
age = undefined;
console.log(age);

/**
 * 객체와 심볼
 * Object(객체 는 특수한 자료형이다.
 * 객체는 다른 자료형과 다르게 많은 자료를 표시할수있다.
 * Symbol(심볼) 은 고유한 식별자를 만들때 사용된다.
 */

/**
 * typeof : 인수의 자료형을 반환한다.
 * 자료형에 따라 처리방식을 다르게하거나 변수의 자료형을 빠르게 알아내고자할때 유용하다.
 * 연산자 : typeof x
 * 함수 : typeof(x)
 */

typeof Math; // Math는 내장객체임으로 object가 출력된다.
typeof null; // null은 별도의 고유한 자료형을 가지는 특수값으로 하위 호환성을 위해 그냥 남겨둔 상황이다!
typeof alert; // typeof는 피연산자가 함수라고하면 'function'을 반환한다.
