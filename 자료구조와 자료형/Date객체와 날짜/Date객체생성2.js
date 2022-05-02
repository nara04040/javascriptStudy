/**
 * 자동고침
 * Date객체엔 자동고침이라는 기능이 있다. = 범위를 벗어나는 값을 설정하려고하면 자동으로 수정된다.
 * 자동고침은 일정시간이 지난 후의 날짜를 구하는 데도 종종 사용된다 (ts1)
 */

// let date = new Date(2013, 0, 32);
// console.log(date); // 32일 이라는 것은 없기에 1.31일이 반환된다.

// let date2 = new Date(2016, 1, 28);
// date2.setDate(date.getDate() + 2);

// console.log(date2); // 2016.01.28에서 +2일을 더한 날짜를 반환한다.

//ts1
let date3 = new Date();
date.setSeconds(date3.getSeconds() + 70);
console.log(date3);

/**
 * Date객체를 숫자로 변경해 시간차 측정하기
 * 날짜에 마이너스 연산자를 적용해서 밀리초 기준 시차를 구할 수 있습니다!
 */

// 나만의 스톱워치 만들기

let start = new Date(); //측정시작!
for (let i = 0; i < 100000; i++) {
  let doSomthing = i * i * i;
}
let end = new Date(); // 측정 종료

console.log(`반복문을 모두 도는데 걸린 시간은 ${end - start}밀리초 입니다.`);

// let today = new Date();
// let year = today.getFullYear();
// let month = today.getMonth();
// let nowDate = today.getDate();
// let day = today.getDay();
// let hours = today.getHours();
// let minutes = today.getMinutes();
// let seconds = today.getSeconds();

// console.log(year);
// console.log(month);
// console.log(nowDate);
// console.log(day);
// console.log(hours);
// console.log(minutes);
// console.log(seconds);
