//https://ko.javascript.info/type-conversions

/**
 * 형변환 : 함수와 연산자에 전달되는 값은 대부분 적절한 자료형으로 자동변환된다. 이걸 "형변환" 이라 부른다.
 */

/**
 * 문자형으로 변환 : alert에서는 문자형으로 받기에 alert(value)는 문자형이여한다.
 */

/**
 * 숫자형으로 변환 : 수학과 관련된 함수는 자동으로 변환이 일어난다.
 * 숫자 이외의 글자가 들어가 있는 문자열을 숫자형으로 변환할려고한다면 NaN이 나온다.
 */

let age1 = Number("문자열 123");
console.log(age1);

/**
 * 불린형으로 변환 : Boolean(value) 를 호출하면 명시적으로 불리언으로 형 변환을 수행할 수 있다.
 * 숫자 0, 빈 문자열, null, undefined, NaN과 같이 직관적으로도 “비어있다고” 느껴지는 값들은 false가 됩니다.
 * 이외의 값은 true로 반환
 */
if ((boolean === 0, null, undefined, NaN)) {
  console.log(false);
} else {
  console.log(true);
} //ㅋㅋㅋㅋ
console.log(Boolean(1));
console.log(Boolean(0));
console.log(Boolean(""));
