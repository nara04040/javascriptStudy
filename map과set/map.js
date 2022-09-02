// let map = new Map();

// map.set('1', 'str1');
// map.set(1, 'num1');
// map.set(true, 'bool1');

// console.log(map.get(1));
// console.log(map.get(true))


// 맵은 키로 객체를 허용한다
// let john = {name : "john"};

// let visitesCountMap = new Map();

// visitesCountMap.set(john, 123);

// console.log(visitesCountMap.get(john))

// =========================================================

// 객체는 키값을 문자열로 바꿔서 받아온다.
// let john = {name : "john"};

// let visitesCountObj = {};

// visitesCountObj[john] = 123;

// console.log(visitesCountObj["[object Object]"])


// =========================================================

// let recipeMap = new Map([
//     ['cucumber', 500],
//     ['tomatoes', 350],
//     ['onion', 50]
// ]);

// 키(key)를 대상으로 순회한다.
// for (let vegetable of recipeMap.keys()){
//     console.log(vegetable)
// }

// 값(value)을 대상으로 순회한다
// for (let amount of recipeMap.values()) {
//     console.log(amount)
// }

// [키, 값] 쌍을 대상으로 순회한다.
// for (let entry of recipeMap) {
//     console.log(entry)
// }

// forEach 지원
// recipeMap.forEach( (value, key, map) => {
//     console.log(`${key} : ${value}`);
// })

// =========================================================

let prices = Object.fromEntries([
    ['banana', 1],
    ['orange', 2],
    ['meat', 4]
]);

// noew prices = {banana:1, orange:2, meat:4}
console.log(prices.orange)