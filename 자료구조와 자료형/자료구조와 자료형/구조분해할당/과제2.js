/**
 * 가장 급여가 많은 사람의 이름을 topSalary(salaries) 로 만들어 보자
 * 1. salaries가 비어있으면 함수는 null 반환해야합니다.
 * 2. 최대 급여를 받는 사람이 여러 명이라면 그 중 아무나 한 명 반환하면 된다.
 * 3. Object.entries와 구조분해를 사용해 키-값 쌍을 순회하는 방식으로 만들어보자
 */

fucntion (salaries) {
    let max = 0;
    let maxName = null;

    for(let [name, salary] of Object.entries(salaries)){
        if(max < salary) {
            max = salary,
            maxName = name
        }
    }
    return maxName
}

let salaries = {
  John: 100,
  Pete: 300,
  Mary: 250,
};
console.log(salaries)