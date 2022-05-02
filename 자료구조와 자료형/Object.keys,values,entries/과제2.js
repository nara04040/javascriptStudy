/**
 * 객체 프로퍼티 개수를 반환하는 함수 count(obj)를 만들어보세요.
 * 가능한 짧게 코드를 작성하자
 * ! 심볼형 프로퍼티는 무시, '일반'프로퍼티 개수만 세어주세요
 */

function count(obj) {
  return Object.keys(obj).length;
}

let user = {
  name: "John",
  age: 30,
};

console.log(count(user)); // 2
