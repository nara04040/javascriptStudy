/**
 * arr.sort() : 배열 재정렬, 배열 자체가 변경이 된다. 인수로 정렬 로직을 담은 함수를 받는다
 *
 */

let arr = [1, 2, 5, 6, 4, 3];
let arr2 = [25, 8, 6, 13];
// console.log(arr.sort());
// console.log(arr2.sort()); // 13, 25... 이런 식으로 나오는 이유는 문자열로 취급하기때문이다, 25로 보는것이아니라 2와5가 합쳐진 문자열로 인식하기때문이다

arr2.sort((a, b) => {
  return a - b;
});
console.log(arr2);

/**
 * arr.reduce() : 인수로 함수를 받음
 * (누적 계산값, 현재값 ) => {return 계산값};
 *
 */

let arr3 = [1, 2, 3, 4, 5];

// let result = 0;
// arr3.forEach((num) => {
//   result += num;
// });
// console.log(result);

// const result = arr3.reduce((prev, cur) => {
//   return prev + cur;
// }, 100);
// console.log(result);

let userList = [
  { name: "Mike", age: 30 },
  { name: "Tom", age: 10 },
  { name: "Jane", age: 27 },
  { name: "Sue", age: 26 },
  { name: "Harry", age: 42 },
  { name: "Steve", age: 60 },
];

let result = userList.reduce((prev, cur) => {
  if (cur.name.length === 3) {
    prev.push(cur.name);
  }
}, []);
console.log(result);
