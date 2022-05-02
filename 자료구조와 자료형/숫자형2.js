/**
 * isNaN , isFinite
 * Infinity : 그 어떤 숫자보다 크거나 작은값
 * NaN : 에러를 나타내는 값
 */

// isNaN(value) : 인수를 숫자로 변환시킨다음 NaN인지 테스트한다.
// 직접 NaN과 비교는 불가능, NaN은 자기자신조차 비교할시 false를 반환하기때문이다.
console.log(isNaN(NaN));
console.log(NaN === NaN); // false반환
console.log(isNaN("str"));

// 비교결과가 정확해야하는경우 Object.js를 사용하자
console.log(Object.is(NaN, NaN));
// 0과 -0이 다르게 취급해야한다.
console.log(Object.is(0, -0)); // false반환!

/**
 * parseInt, parseFloat
 */
