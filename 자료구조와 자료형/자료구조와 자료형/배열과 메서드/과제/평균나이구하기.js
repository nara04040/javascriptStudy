/**
 * age를 나타내는 프로퍼티를 가진 객체가 여러개 담긴 배열이 있다.
 * 평균 나이를 반환해주는 함수 getAverageAge(users) 를 만ㄷ르자!
 * 공식은 (age1 + age2 + ... + ageN) / N
 */

function getAverageAge(users) {
  return users.reduce((prev, user) => prev + user.age, 0) / users.length;
}

let john = { name: "John", age: 25 };
let pete = { name: "Pete", age: 30 };
let mary = { name: "Mary", age: 29 };

let arr = [john, pete, mary];

console.log(getAverageAge(arr)); // (25 + 30 + 29) / 3 = 28
