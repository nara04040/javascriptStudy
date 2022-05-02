/**
 * splice : 배열의 요소를 하나만 지우고싶을때 사용
 *
 * arr.push(...items) : 맨 끝에 요소 추가
 * arr.pop() : 맨 끝 요소 제거
 * arr.shift() : 맨 앞 요소 제거
 * arr.unshift() 맨 앞 요소 추가
 */

let arr = ["i", "go", "home"];

// delete arr[1];
arr.splice(1, 1, "let's", "dance");

console.log(arr);
console.log(arr.length);

let arr2 = ["I", "study", "JavaScript", "right", "now"];

let removed = arr2.splice(0, 2); // 0번째부터 2번째 전까지의 요소를 지움 , removed는 이 2개의 요소를 담고있음.

console.log(removed);

let arr3 = ["I", "study", "JavaScript"];

arr3.splice(2, 0, "complex", "language");
console.log(arr3);

/**
 * slice
 */

let arr4 = ["t", "e", "s", "t"];
console.log(arr4.slice(1, 3));
console.log(arr4.slice(-1)); // 끝에서 부터

/**
 * arr.concat() : 기본 배열의 요소를 사용해 새로운 배열을 만들거나 기존 배열에 요소를 추가하고자 할 때 사용할 수 있다.
 * concat메서드는 제공받은 배열의 요소를 복사해 활용한다.
 */

let arr5 = [1, 2];
console.log(arr5.concat([3, 4], [5, 6], 7, 8));

let arrayLike = {
  0: "something",
  length: 1,
};

console.log(arr5.concat(arrayLike));
