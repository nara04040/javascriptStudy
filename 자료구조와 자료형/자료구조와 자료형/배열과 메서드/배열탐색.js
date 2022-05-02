/**
 * for.Each() : 주어진 함수를 배열 요소 각각에 대해 실행할 수 있게 해준다.
 * arr.forEach(function(item, index, array) {})
 */

/**
 * indexOf, lastIndexOf, includes
 *
 */

/**
 * map : 배열 요소 전체를 대ㅇ으로 함수를 호츨, 결ㅏ를 배열로 반ㅏㄴ
 */

let length = ["Bilbo", "Gandalf", "Nazgul"].map((item) => item.length);
console.log(length);

/**
 * 정렬 함수는 어떤 숫자든 반환 가능하다.
 *
 */
let arr = [1, 2, 15];
arr.sort(function (a, b) {
  return a - b;
});
console.log(arr);

/**
 * localeCompare : 유니코드를 기준으로 글자를 비교한다.
 */