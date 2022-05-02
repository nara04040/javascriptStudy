/**
 * 구조 분해 할당을 사용해 아래 미션을 수행해 보세요.

    name 프로퍼티의 값을 변수 name에 할당하세요.
    years 프로퍼티의 값을 변수 age에 할당하세요.
    isAdmin 프로퍼티의 값을 변수 isAdmin에 할당하세요. 
    isAdmin이라는 프로퍼티가 없으면 false를 할당하세요.
    미션을 달성하면 아래 예시를 제대로 실행할 수 있게 됩니다.

 */
let user = {
  name: "John",
  years: 30,
};
// 
let { name, years: age, isAdmin = false } = user;

console.log(name); // John
console.log(age); // 30
console.log(isAdmin); // false
