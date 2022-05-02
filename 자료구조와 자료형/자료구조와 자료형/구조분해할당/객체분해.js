/**
 * 1. 객체 분해하기
 *
 */

// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { title, width, height } = options;
// console.log(title);
// console.log(width);
// console.log(height);

//         이렇게 작성해도 똑같은 결과가 나온답니당~
// let { height, width, title } = { title: "Menu", width: 100, height: 200 };
// console.log(title);
// console.log(width);
// console.log(height);

//         분해하려는 객체의 프로퍼티와 변수의 연결을 원하는 대로 조정할 수도 있습니다.
// let options = {
//   title: "Menu",
//   width: 100,
//   height: 200,
// };

// let { width: w, height: h, title } = options;
// console.log(title);
// console.log(w);
// console.log(h);

//          프로퍼티가 없는 경우를 대비해서  = 을 사용해서 기본값을 설정할수도있어요
let options = {
  title: "Menu",
};

let { width = 100, height = 200, title } = options;
// 이렇게 클론과 할당 연산자를 동시에 사용할수도있답니다
// let { width: w = 100, height: h = 200, title } = options; 

console.log(title); // Menu
console.log(width); // 100
console.log(height); // 200
