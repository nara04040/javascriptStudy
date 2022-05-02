/**
 * nap - pan
 * ear - are - era
 * cheaters - hectares - teachers
 * 함수 aclean(arr) 를 작성해라
 */

// 글자단위로 쪼갠 후 , 알파벳 순으로 정렬하면 애너그램을 찾을 수 있다.

// function aclean(arr) {
//   let map = new Map();

//   for (let word of arr) {
//     let sorted = word.toLowerCase().split("").sort().join();
//     // toLowerCae로 소문자로 바꾼다음, split('')로 'p', 'a', 'n'을 만들고 .sort()로 알파벳순으로 바꾼다음 join()으로 다시 합친다
//     map.set(sorted, word);
//     // 정리한 단어를 Map에 저장한다.
//   }
//   return Array.from(map.values());
// }

function aclean(arr) {
  let obj = {};

  for (let i = 0; i < arr.length; i++) {
    let sorted = arr[i].toLowerCase().split("").sort().join();
    obj[sorted] = arr[i];
  }
  return Object.values(obj);
}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];

console.log(aclean(arr)); // "nap,teachers,ear"나 "PAN,cheaters,era"이 출력되어야 합니다.
