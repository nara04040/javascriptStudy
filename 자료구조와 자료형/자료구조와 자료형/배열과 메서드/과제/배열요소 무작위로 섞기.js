/**
 * 배열 요소 무작위로 섞기
 * 배열의 요소를 무작위로 섞어주는 함수 shuffle(array) 를 작성하자.
 *
 */

function shuffle(array) {
  array.sort(() => Math.random() - 0.5);
}

let arr = [1, 2, 3];

shuffle(arr);
// arr = [3, 2, 1]

shuffle(arr);
// arr = [2, 1, 3]

shuffle(arr);
// arr = [3, 1, 2]
// ...
??