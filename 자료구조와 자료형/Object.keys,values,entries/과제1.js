/**
 * 급여 정보가 저장되어있는 객체 salaries가 있습니다.

    Object.values 와 for..of 반복문을 사용해 모든 급여의 합을 반환하는 함수 
    sumSalaries(salaries)를 만들어보세요.
    salaries가 빈 객체라면, 0이 반환되어야 합니다.
 */

// sol1) for문을 돌면서 salaries에 있는 values 값들은 뽑아서 sum에 추가해준다.
// function sumSalaries(salaries) {
//   let sum = 0;
//   for (let salary of Object.values(salaries)) {
//     sum += salary;
//   }
//   return sum;
// }

// let salaries = {
//   John: 100,
//   Pete: 300,
//   Mary: 250,
// };

// console.log(sumSalaries(salaries)); // 650

//sol2) object.values 와 reduce를 이용해 합을 구하자
function sumSalaries(salaries) {
  // reduce는 급여정보가 저장되있는 배열을 순회
  // 총합을 만들고 결과를 반환!
  return Object.values(salaries).reduce((a, b) => a + b, 0);
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(sumSalaries(salaries));
