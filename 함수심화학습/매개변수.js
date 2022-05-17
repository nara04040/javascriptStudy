/**
 * "..."은 나머지 매개변수나 스프레드 문법으로 사용 가능하다.
 *
 * "..."이 함수 매개변수 끝에 있으면 인수 목록의 나머지를 배열로 모아주는 "나머지 매개변수입니다."
 * "..."이 함수 호출시 사용되거나 기타 경우엔 배열을 목록으로 확장해주는 "스프레드 문법입니다."
 *
 */

// 함수에 넘겨주는 인수의 개수에는 제약이 없다.
// function sum(a, b) {
//   return a + b;
// }
// console.log(sum(1, 2, 3, 4, 5));

//이렇게 ...를 뒤에 붙히면 함수 선언부에 포함시킬수있다.
// ... 의 뜻은 "남아있는 매개변수들을 한데 모아 배열에 집어넣어라" 이다.
// function sumAll(...args) {
//   let sum = 0;
//   for (let arg of args) sum += arg;
//   return sum;
// }
// console.log(sumAll(1, 2, 4));

// 나머지 인수들은 titles에 할당된다.
// function showName(firstName, lastName, ...titles) {
//   console.log(firstName + " " + lastName); //Bora Lee
//   console.log(titles[0]); // titles안에 있는 것들 = Softwar~ , Researcher
//   console.log(titles[1]);
//   console.log(titles.length);
// }
// showName("Bora", "Lee", "Software Engineer", "Researcher");

// 나머지 매개변수는 항상 마지막에 있어야한다.
// function f (arg1, ...rest, arg2){}
// 이따구로 적으면 에러가 발생한다.
// function f(arg1, arg2, ...rest) 로 적자!

/***********************
 * arguments객체
 * 유사배열객체(array-like object)인 arguments를 사용하면 인덱스를 사용해 인수에 접근할 수 있다.
 * 화살표 함수는 arguments객체를 지원하지 않는다.
 ************************/
// function showName() {
//   console.log(arguments.length);
//   console.log(arguments[0]);
//   console.log(arguments[1]);
//   // arguments는 이터러블 객체이기에 for~~로 인수를펼칠수있다!
// }
// showName("Bora", "Lee");
// showName("Bora");

/***********************
 * 스프레드 문법
 * 내장 함수 Math.max는 인수로 받은 숫자 중 가장 큰 숫자를 반환한다.
 ************************/
// console.log(Math.max(3, 6, 1));

// NaN이 반환 되는 이유는 배열이 안닌 숫자 목록을 니수로 받기 때문이다!
// let arr = [3, 6, 1];
// console.log(Math.max(arr)); //NaN이 반환된다.

/* 이를 해결하기위해 스프레드 문법이 나타났다.
    나머지매개변수와 비슷하지만 하는 역할은 반대됩니다!
    함수를 호출할때 ...arr을 사용한다면 이터러블 객체 arr이 인수 목록으로 확장됩니당
*/
// let arr = [3, 5, 1];
// console.log(Math.max(...arr));

//아래처럼 이터러블 객체 여러개를 전달도 가능하다.
// let arr1 = [1, -2, 3, 4];
// let arr2 = [8, 3, -8, 1];
// console.log(Math.max(...arr1, ...arr2));
// console.log(Math.max(1, ...arr1, 2, ...arr2, 25)); // 일반 값과 혼합해도 가능

// 스프레드 문법은 배열을 합칠 때도 활용할 수 있다.
// let arr = [3, 5, 1];
// let arr2 = [8, 9, 15];
// let merged = [0, ...arr, 2, ...arr2];
// console.log(merged); // 0,arr,2,arr2 순으로 합친다.

// 스프레드 문법은 for..of와 같은 방식으로 내부에서 이터레이터(반복자)를 사용해 요소를 수집한다.
// 문자열에 for..of을 사용하면 문자열을 구성하는 문자가 반환된다.
// Array.from은 이터러블 객체인 문자열을 배열로 바꿔주기에 동일한 작업이 가능하다.

let str = "Hello";
console.log([...str]);
console.log(Array.from(str));
/*
Array.from(obj)와 [...obj는 미묘한 차이가 있다
*/
