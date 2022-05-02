/**
 * 블록레벨스코프를 지원하는 let은 var보다 직관적이다.
 *
 */

// var funcs = [];

// // 함수의 배열을 생성하는 for 루프의 i는 전역변수이다.
// for (var i = 0; i < 3; i++) {
//   funcs.push(function () {
//     console.log(i);
//   });
// }
// // 배열에서 함수를 꺼내서 호출하자
// for (var j = 0; j < 3; j++) {
//   funcs[j]();
// }
// 결과는 3이 세번 출력된다. 이유는 for 루프에 var i 가 전역변수이기때문이다.
// var 로 0,1,2를 출력할려면
var funcs = [];

// 함수의 배열을 생성하는 for 루프의 i는 전역 변수다.
for (var i = 0; i < 3; i++) {
  (function (index) {
    // index는 자유변수다.
    funcs.push(function () {
      console.log(index);
    });
  })(i);
}

// 배열에서 함수를 꺼내어 호출한다
for (var j = 0; j < 3; j++) {
  funcs[j]();
}
