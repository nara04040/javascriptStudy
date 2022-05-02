function unique(arr) {
  return Array.from(new Set(arr));
}
// return 해줘 new Set으로 정의된 arr를 , Array.from 정의
// Array.from() : 반복 가능한 객체를 얕게 복사해 새로운 array객체를 만듭니다!
let values = [
  "Hare",
  "Krishna",
  "Hare",
  "Krishna",
  "Krishna",
  "Krishna",
  "Hare",
  "Hare",
  ":-O",
];

console.log(unique(values)); // 얼럿창엔 `Hare, Krishna, :-O`만 출력되어야 합니다.
