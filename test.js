// // 프로퍼티 축약형
// // let {age:age, city:city} = {age:1, city:'대구'}
// let {
//     age,
//     city
// } = {
//     age: 1,
//     city: '대구'
// }
// console.log(age);
// console.log(city);

// // 기본값 할당
// let {
//     lang,
//     job = "학생"
// } = {
//     lang: '한국어'
// };
// console.log(lang);
// console.log(job);

// // 속성이름 변경해서 값 할당 받기
// let obj = {
//     price: 1000,
//     count: 50
// };
// let {
//     price: 가격,
//     count: 갯수
// } = obj;
// console.log(가격);
// console.log(갯수);

// // 중첩된 객체를 디스트럭처링 해보기
// let data = {
//     title: '할일',
//     list: [{
//         work: '청소하기',
//         study: '코딩공부'
//     }],
//     date: '2022.07.26'
// };

// let {
//     title: 제목,
//     list: [{
//         work: 할일,
//         study: 공부
//     }],
//     date
// } = data;
// console.log(제목);
// console.log(할일);
// console.log(공부);
// console.log(date);



// let person = {
//     age: 20,
//     job: 'student'
// }
// let {
//     ...who
// } = person;
// console.log(who);
// console.log(person);

// person.age = 25;
// person.job = 'nara'
// console.log(who);
// console.log(person);
// console.log(who === person);

// ...who는 깊은복사가 되는것

// var a = 1;
// let b = 2

// function add(a, b) {
//     console.log(a, b);
//     return a + b
// }

// add(2, 5);
// console.log(a)
// console.log(b)


// let a = 1; // 코드의 가장 바깥쪽 저장 (global 변수)
// // console.log(g)// 실행안됨
// { // { }를 코드의 블럭이라고 한다
//     let b = 2; // 코드블럭에 저장한 변수
//     let c = 3 // 코드블럭에 저장한 변수

//     function fn() { // 코드블럭
//         let d = 4; // 함수영역에 저장한 변수 (local)
//         let e = 5; // 함수영역에 저장한 변수 (local)
//         console.log(e)

//         function fnInner() {
//             let f = 6; // 중첩함수영역에 저장한 변수 (local)
//             let g = 7; // 중첩함수영역에 저장한 변수 (local)
//             debugger;
//             console.log(a) // 스코프를 상위로 찾아가면서 결과를 출력
//         }
//         return fnInner
//     }
// }

// let result = fn()
// result()

// function add() { // global

// }

// var a = 1;

// function fn() {
//     var a = '홍길동';
//     go() // 함수가 어디서 만들어졋는가가 중요
//         // 어디서 작성이 되었는가? 렉시컬환경
//         // 함수 실행 시점이 중요한것은 아님
// }

// function go() {
//     console.log(a)
// }

// fn()

// function fn() {
//     const age = 25;

//     function showAge() {
//         const age = 20;
//         console.log(age);
//     }

//     return showAge;
// }

// const go = fn()
// go()

// 유저가 증가한다.

// 사용자 증가 함수
// const userUpdate = function () {
//     // 유저가 증가한다.
//     // 참조할 변수가 Scope 가 함수의 local 에 있다.
//     let count = 0;
//     return function () {
//         // 상위 scope 에 참조를 진행하였다.
//         return ++count;
//     }
// };

// // Global 스코프에서 클로저를 참조할 변수가 필요하다.

// let go = userUpdate();

// console.log(go());
// console.log(go());
// console.log(go());
// console.log(go());