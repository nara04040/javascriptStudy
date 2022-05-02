/**
 * 나이를 기준으로 객체 정렬하기
 * age가 있는 객체가 담긴 배열이 있다. 배열을 age기준으로 정렬해주는 함수 sortByAge(users)를 만들자!
 */

function sortByAge(arr) {
  arr.sort((a, b) => a.age - b.age);
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 28 };

let arr = [pete, john, mary];

sortByAge(arr);

// now: [john, mary, pete]
console.log(arr[0].name); // John
console.log(arr[1].name); // Mary
console.log(arr[2].name); // Pete
