/**
 * JSON이 뭘까아용?
 * JavaScript Object Notation = JSON
 * json은 자바스크립트에서 사용할 목적으로 만들어진 포맷이다. 하지만 자스가 아닌 언어에서도 json을 사용할수있어 데이터 교환 목적으로 사용한다.
 *
 * JSON.stringify = 객체를 json으로 바꿔준다.
 *      장점 : 중첩객체도 알아서 문자열로 바꿔준다.
 *      주의점 : 순환참조가 있으면 원하는 대로 객체를 문자열로 바꾸는게 불가능하다!!💡순환참조가 뭐양?
 * JSON.parse = JSON을 객체로 바꿔줍니다.
 *  -적용가능한 자료형은 (ex1)
 * 객체, 배열, 원시형(문자,숫자,불린, null
 *  - json.stringify 호출이 무시되는 프로퍼티 (ex2)
 *  함수프로퍼티, 심볼형 프로퍼티, 값이 undefined인 프로퍼티
 */

// let student = {
//   name: "John",
//   age: 30,
//   isAdmin: false,
//   courses: ["html", "css", "js"],
//   wife: null,
// };

// let json = JSON.stringify(student);

// console.log(typeof json); // 문자열 반환
// console.log(json);

//ex1
// console.log(JSON.stringify(1));
// console.log(JSON.stringify("test"));
// console.log(JSON.stringify(true));
// console.log(JSON.stringify([1, 2, 3]));

//ex2 : 무시하는 유형
// let user = {
//   sayHi() {
//     //무시
//     console.log("hello");
//   },
//   [Symbol("id")]: 123, // 무시
//   something: undefined,
// };

// console.log(JSON.stringify(user));

// json.stringify 가 중첩객체도 알아서 문자열로 바꿔준다고??
// let meetup = {
//   title: "Conference",
//   room: {
//     number: 23,
//     participants: ["john", "ann"],
//   },
// };
// console.log(JSON.stringify(meetup));

// 순환참조가 있으면 원하는 대로 객체를 문자열로 바꿀수가 없엉!
/* 순환참조란? : Circular Dependancy
    A -> B -> C -> 라고하면 
    A는B 를 상속한다 고로 A와 B모듈 둘다 의존성을 가진다고 한다.
    이때 A -> B -> C -> A 라고 꼬리를 무는 형태의 원이 생긴다. 이것을 순환참조라고말한다!
*/

// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   participants: ["john", "ann"],
// };
// meetup.place = room;
// room.occupieBy = meetup;
// JSON.stringify(meetup); //TypeError: Converting circular structure to JSON가 나온다!

/********************************
 * replacer로 원하는 프로퍼티만 직렬화하기!
 *  let json = JSON.stringify(value[, replacer, space])
 *  value : 인코딩하려는값
 *  replacer : JSON으로 인코딩하길 원하는 프로퍼티가 담긴 배열, 또는 매핑 함수이다! function(key, value)
 *  space : 서식 변경 목적으로 사용할 공백 문자 수!
 * 일반적으로 JSON.stringify에 인수를 하나만 넘겨서 사용한다.
 * 그러나 but! 순환 참조를 다뤄야 하는 경우같이 전환 프로세스를 정교하게 조정하려면 두번째 인수를 사용해아합니다!
 *
 ********************************/
// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   participants: [{ name: "John" }, { name: "Alice" }],
//   place: room, // meetup은 room을 참조합니다.
// };

// room.occupiedBy = meetup;
// console.log(
//   JSON.stringify(meetup, function replacer(key, value) {
//     console.log(`${key} ${value}`);
//     return key == "occupiedBy" ? undefined : value;
//   })
// );
//배열에 넣어준 프로퍼티가 출력되었지만 배열에 name을 넣지않아 participants가 텅 비었다! =>  alert( JSON.stringify(meetup, ['title', 'participants']) );
// room.occupiedBy만 빼고 모든 프로퍼티를 배열에 넣자! =>   JSON.stringify(meetup, ["title", "participants", "place", "name", "number"])
// 배열이 너무 기니까 replace에 함수를 전달해보자

/*******************************************
 * space로 가독성 높이기
 * JSON.stringify(value, replacer, space) 에서 space는 가독성을 높이기위해 공백 문자 수를 나타낸다.
 *
 ******************************************/
// let user = {
//   name: "John",
//   age: 25,
//   roles: {
//     isAdmin: false,
//     isEditor: true,
//   },
// };
// console.log(JSON.stringify(user, null, 2));

/*******************************************
 * 커스텀 "toJSON"
 * toJSON을 구현하면 객체를 JSON으로 바꿀 수 있다.
 ******************************************/
// let room = {
//   number: 23,
// };
// let meetup = {
//   title: "Conference",
//   date: new Date(Date.UTC(2017, 0, 1)),
//   room,
// };
// console.log(JSON.stringify(meetup));
// Date객체의 내장 메서드인 toJSON이 호출되면서 date 의 값이 문자열로 변환된 걸 확인할 수 있다.

//이번엔 room에서도 toJSON을 추가해보자!
let room = {
  number: 23,
  toJSON() {
    return this.number;
  },
};
let meetup = {
  title: "Conference",
  room,
};
console.log(JSON.stringify(room));
console.log(JSON.stringify(meetup));

/**********************
 * JSON.parse : JSON으로 인코딩된 객체를 다시 객체로 디코딩할수있다.
 * let value = JSON.parse(str, [reviver]);
 * str : JSON형식의 문자열
 * reviver : 모든 (key, value) 쌍을 대상으로 호출되는 function(key,value) 형태의 함수로 값을 변경할 수 있다.
 *
 * 중첩객체나 중첩배열이 있다고해도 JSON포맷을 지켜야한다.
 * JSON은 주석을 지원하지 않는다.
 *
 *********************/
let numbers = "[0,1,2,3,4]";
numbers = JSON.parse(numbers);
console.log(numbers[1]);
