/**
 * join :
 * split :
 * Array.isArray() : 배열인지 아닌지 판단
 */

let arr = ["안녕", "나는", "철수야"];
let result = arr.join();
console.log(result);

const user = "Hello, My name is Mike";
const result2 = user.split("");
console.log(result2);

let user2 = {
  name: "mike",
  age: 30,
};

let userList = ["nara", "han", "yu"];
console.log(typeof user2);
console.log(typeof userList); // 둘다 객체로 나옴
console.log(Array.isArray(user2));
console.log(Array.isArray(userList)); // 이렇게하면 배열인지 아닌지 판단이 가능하다.
