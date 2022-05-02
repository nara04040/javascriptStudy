/**
 * for..of를 사용할 수 있는 객체를 이터러블 이라고 부른다.
 * 이터러블엔 Symbol.iterator가 구현되어있어야 한다.
 *  - obj[Symbol.iterator] 의 결과는 이터레이터라고 부른다. 이어지는 반복과정을 처리한다.
 *  - 이터레이터엔 객체 {done: Boolean, value: any} 를 반환하는 메서드 next{} 가 반드시 구현되어야한다.
 *  - 문자열이나 배열 같은 내장 이터러블에도 Symbol.iterator가 구현된다.
 * 인덱스와 length 프로퍼티가 있는 객체는 유사배열이라 불린다. 내장 메서드가 없어요!
 
 */

// --------------------------------------------------------
// range 를 반복가능한 객체로 만들어주는 코드는 다음과 같다
let range = {
  from: 1,
  to: 5,
};

// 1. for..of 최초 호출 시, Symbol.iterator가 호출됩니다.
range[Symbol.iterator] = function () {
  // Symbol.iterator는 이터레이터 객체를 반환합니다.
  // 2. 이후 for..of는 반환된 이터레이터 객체만을 대상으로 동작하는데, 이때 다음 값도 정해집니다.
  return {
    current: this.from,
    last: this.to,

    // 3. for..of 반복문에 의해 반복마다 next()가 호출됩니다.
    next() {
      // 4. next()는 값을 객체 {done:.., value :...}형태로 반환해야 합니다.
      if (this.current <= this.last) {
        return { done: false, value: this.current++ };
      } else {
        return { done: true };
      }
    },
  };
};

// 이제 의도한 대로 동작합니다!
for (let num of range) {
  console.log(num); // 1, then 2, 3, 4, 5
}
