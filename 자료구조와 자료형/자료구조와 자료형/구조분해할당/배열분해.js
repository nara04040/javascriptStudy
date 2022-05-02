/**
 * 배열 분해하기
 *
 */

// 1.
let arr = ["Bora", "Lee"];

// let [firstName, surname] = arr;
// let [firstName, surname] = "Bora,Lee".split(","); , 이렇게 split을 사용해도 괜찮다
// console.log(firstName);
// console.log(surname);

/* 2. "분해(destructuring)"은 "파괴(destructive)"를 의미하지 않습니다. 코드의 양이 줄어든다는 점만 다르다. */

// let firstName = arr[0];
// let surname = arr[1];

/* 3. 쉼표를 사용하여 요소를 무시하기*/

// let [firstName, , title] = [
//   "Julius",
//   "Caesar",
//   "Consul",
//   "of the Roman Republic",
// ];

// console.log(title); // Consul

/**
 * 4. 할당 연산자 우측에 모든 이터러블이 올 수 있다!
 * 배열뿐만 아니라 모든 이터러블(iterable, 반복가능한 객체) 에 구조 분해 할당을 적용할 수 있습니다!
 */
// let [a, b, c] = "abc";
// let [one, two, three] = new Set([1, 2, 3]);

/**
 * 5. 할당 연산자 좌측엔 뭐든지 올 수 있다.
 */
// let user = {};
// [user.name, user.surname] = "Bora Lee".split(" ");
// console.log(user.name);

/**
 * 6. .entries() 로 반복하기
 *   -- .entries() 가 뭘까아아아아용? = 모든 프로퍼티와 값을 배열 타입으로 변환시켜 출력해준다!!!
 *  물론 map을 사용해도 괜찮다
 */
//  let user = {
//     name: "John",
//     age: 30
//   };

//   // 객체의 키와 값 순회하기
//   for (let [key, value] of Object.entries(user)) {
//     console.log(`${key}:${value}`); // name:John, age:30이 차례대로 출력
//   }

let user = new Map();
user.set("name", "John");
user.set("age", "30");

for (let [key, value] of user) {
  console.log(`${key} : ${value}`);
}

/**
 * 7. 변수 교환 트릭
 *  두 변수에 저장된 값을 교환할때 구조 분해 할당을 사용할 수 있다!
 */

let guest = "Jane";
let admin = "Pete";

[guest, admin] = [admin, guest];
console.log(`${guest} ${admin}`);

/**
 * 8. ...으로 나머지 요소 가져오기!!
 * ... 을 붙인 매개변수 하나를 추가하면 '나머지'를 가져올수있답니다!
 */
let [name1, name2, ...rest] = [
  "Julius",
  "Caesar",
  "Consul",
  "of the Roman Republic",
];

console.log(name1);
console.log(name2);
console.log(rest[0]);
console.log(rest[1]);
console.log(rest.length);

/**
 * 9. 기본값
 * 할당하고자하는 변수의 개수가 분해하고자하는 배열의 길이보다 크더라도 에러가 발생하지 않습니당!
 * 왜냐하면 undefined로 취급되서에용 ㅎㅎ
 */

let [firstName, surname] = [];
console.log(firstName);
console.log(surname);

// "=" 을 이용하면 할당값이 없을때 기본으로 할당해 줄 값인 기본값을 설정할수 있답니다?
let [name = "Guest", surname1 = "Anonymous"] = ["Julius"];
console.log(name); // 배열안의 값인 "Julius"가 튀어나온다!
console.log(surname1); // 기본값인 "Anonymous"가 나온다!


