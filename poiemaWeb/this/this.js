/**
 * 매개변수로 전달되는 인자값 이외에, arguments객체와 this를 암묵적으로 전달 받는다..
 */

// function square(number) {
//   console.log(arguments);
//   console.log(this);

//   return number * number;
// }
// square(2);

/**
 * 함수의 상위 스코프를 결정하는 방식인 렉시컬 스코프는 함수를 선언할때 결정된다.
 *
 * 함수를 호출하는 방식
 *  1. 함수호출
 *  2. 메소드 호출
 *  3. 생성자 함수 호출
 *  4. apply/call/bind 호출
 */

/**
 * 함수호출
 * 전역 객체는 모든 객체의 유일한 최상위 객체를 의미하며 일반적으로 browser-side window,
 * Server-side(Node.js) 에서는 global객체를 의미한다.
 */
