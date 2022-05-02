/**
 * arr.forEach(fn) : 배열 반복
 *  fn.forEach((item,index, arr) => {   })
 */

let users = ["Mike", "Tom", "Jane"];
users.forEach((name, index) => {
  console.log(`${index + 1}. ${name}`);
});

/**
 * arr.indexOf() : 인수의 위치를 밝혀줌
 * arr.lastIndexOf : 끝에서부터 알려줌
 * arr.indludes() : 포함하는지 확인
 */

let num = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(num.indexOf(2));

let arr = [1, 2, 3];
console.log(arr.includes(2));

/**
 * arr.find(fn) / arr.findIndex(fn) : 배열안에서 필요한 값 찾기
 * arr.find(fn) : 필요한 값 반환
 * arr.findIndex(fn) : 필요한 값이 있는 위치 반환
 * 첫번째 true값만  반환
 */

// let arr2 = [1, 2, 3, 4, 5];
// const result = arr2.find((item) => {
//   return item % 2 === 0;
// });
// console.log(result);

let userList = [
  { name: "Mike", age: 30 },
  { name: "Jane", age: 25 },
  { name: "Tom", age: 10 },
];

const result = userList.findIndex((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});
console.log(result);

/**
 * arr.filter(fn) : 만족하는 모든 요소를 배열로 반환
 *
 *
 */

const result2 = userList.filter((user) => {
  if (user.age < 19) {
    return true;
  }
  return false;
});
console.log(result2);

/**
 * arr.reverse(fn) : 역순으로 재정렬
 * arr.map(fn) : 함수를 받아 특정 기능을 시행후 새로운 배열을 반환
 */

let newUserList = userList.map((user, index) => {
  // Object.assign() : 열거 가능한 자체 속성을 복사해 대상 객체에 붙여넣습니다. 후 대상 객체를 반환합니다.
  return Object.assign({}, user, {
    id: index + 1,
    isAdult: user.age > 19,
  });
});
console.log(newUserList);
console.log(userList);
