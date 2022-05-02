/**
 * Object.keys : 객체의 키만 담은 배열을 반환합니다.
 * Object.values() : 객체의 값만 담은 배열을 반환합니다.
 * Object.entries : [키, 값] 쌍을 담은 배열을 반환합니다.
 *
 */

let user = {
  name: "John",
  age: 30,
};

for (let values of Object.values(user)) {
  console.log(values);
}

// Object.keys, values, entries 는 심볼형 프로퍼티를 무시한다.

/**
 * 객체 변환
 * 객체엔 map, filter 같은 배열 전용 메서드를 사용할수 없어용
 * 그러나 Object.entries와 Object.fromEnries를 순차적으로 적용하면 배열 전용 메서드를 사용할수 있답니다.
 *  Object.entries(obj)를 사용해 객체의 키-값 쌍이 요소인 배열을 얻습니다.
 *  1.에서 만든 배열에 map 등의 배열 전용 메서드를 적용합니다.
 *  2.에서 반환된 배열에 Object.fromEntries(array)를 적용해 배열을 다시 객체로 되돌립니다.
 */

let prices = {
  banana: 1,
  orange: 2,
  meat: 4,
};
//
let doublePrices = Object.fromEntries(
  Object.entries(prices).map(([key, value]) => [key, value * 2])
);
console.log(doublePrices.meat);
