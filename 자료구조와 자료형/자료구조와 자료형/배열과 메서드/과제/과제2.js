/**
 * test) 이름 매핑하기
 * name의 값만 담은 새로운 배열을 만들자
 */

// let john = { name: "John", age: 25 };
// let pete = { name: "Pete", age: 30 };
// let mary = { name: "Mary", age: 28 };

// let users = [john, pete, mary];

// let names = users.map((item) => item.name);

// console.log(names); // John, Pete, Mary

/**
 * test) 객체 매핑하기
 * name 과 surname을 조합해서 fullName을 만들고
 * 이를 이용해 두개의 프로퍼티 id와 fullName을 가진 객체를 담은 새로운 배열을 반환해주는 코드를 작성해라
 */
let john = { name: "John", surname: "Smith", id: 1 };
let pete = { name: "Pete", surname: "Hunt", id: 2 };
let mary = { name: "Mary", surname: "Key", id: 3 };

let users = [john, pete, mary];

let usersMapped = users.map((user) => ({
  fullName: `${user.name} ${user.surname}`,
  id: user.id,
}));
// 중괄호 {를 만나면 자바스크립트는 이를 객체의 시작이라 인식하지 않고 함수 본문이 시작되는 것이라 인식합니다.
// 소괄호를 사용하면 이를 피할 수 있습니다.

/*
 usersMapped = [
   { fullName: "John Smith", id: 1 },
   { fullName: "Pete Hunt", id: 2 },
   { fullName: "Mary Key", id: 3 }
 ]
 */

console.log(usersMapped[0].id); // 1
console.log(usersMapped[0].fullName); // John Smith
