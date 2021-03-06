/**
 * js는 원시값을 객체처럼 다룰 수 있게 해준다.
 * 원시값 vs 객체
 *  원시값
 *      - 원시형값이다.
 *      - 종류 : 문자(string), 숫자(number), bigint, 불린(boolean), 심볼(symbol), null, undefined
 *  객체
 *      -프로퍼티에 다양한 종류의 값을 저장할 수 있습니다.
 *      - {name : "John", age : 30}와 같이 대괄호 {}를 사용해 만들 수 있습니다. 자바스크립트에는 여러 종류의 객체가 있는데, 함수도 객체의 일종입니다.


 */

// 객체는 함수를 프로퍼티로 저장할 수 있다.
let john = {
  name: "john",
  sayHi: function () {
    console.log("반가워😉");
  },
};
/**
 * js는 다양한 내장 객체를 제공한다. 고유한 프로퍼티와 메서드를 가진다.
 * 그러나 이런 기능들은 시스템 자원이 많이 소모된다.
 * 고로 이런 상황을 타개하기위해
 * 1. 원시값은 그대로 남겨두어 단일 값 형태를 유지한다.
 * 2. 문자열, 숫자, 불린ㅡ 심볼의 메서드와 프로퍼티에 접근할 수 있도록 언어 차원에서 허용한다.
 * 3. 이를 가능케하기위해 특수한 객체인 '원시 래퍼 객체'를 만들어 준다.
 */

let str = "Hello";
console.log(str.toUpperCase());
/**
 * 1. str은 원시값이다. 프로퍼티(toUpperCase)만나는순간 특별한 객체로 변환
 * 2. 메서드가 실행되고 새로운 문자열이 반환된다.
 * 3. 이 특별한 객체는 파괴하고, 원시값인 str만 남는다.
 */

console.log(typeof 0);
console.log(typeof new Number(0));

// 아래코드를 실행하면 str(문자열)에 test(프로퍼티)를 추가할수 있을까요?
// 또한 가능하다면 무엇이 출력이 될까?
let str1 = "Hello";
str1.test = 5;
console.log(str1.test);

/**
 * 정리
 * 1. 객체는 원시값보다 무겁고 내부 구조를 유지하기 위해 추가 자원을 사용한다.
   2. 원시타입에서 객체처럼 메소드를 가지기에는 기존의 가벼운 특징이 사라지게 된다.
   3. 원시타입에서 메소드 프로퍼티에 접근할 때 원시 래퍼 객체(object wrapper)가 생성되어 처리하는 식으로 해결하였다.
   4. 래퍼객체를 직접 만들어서 사용하는 것은 추천하지 않는다.
    - 래퍼객체는 원시값을 나타내지만, 객체의 특성을 가지고 있게 된다.
    - typeof로 체크할 때 객체로 판단한다.
    - 조건문에서 결국 객체이기 떄문에 원시값과 다르게 조건이 무조건 참이 되어버린다.
    - 원시타입에서 메소드를 사용하게하기 위해서 있는 것인데, 하위 호환성을 위해 직접 생성을 할 수 있도록 하게 냅둔거지 너가 쓰라는 뜻은 아니다.
   5. null과 undefined는 메소드가 없다.
 */
