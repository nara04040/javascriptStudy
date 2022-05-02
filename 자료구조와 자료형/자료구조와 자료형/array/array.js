/**
 * push() : 뒤에삽입
 * pop() : 뒤에삭제
 * unshift() : 앞에 삽입
 * shift() : 앞에삭제
 *----------------------
 * arr.splice(n,m) :특정 요소 지움 , n = 시작 , m = 개수
 * arr.splice(n,m,x) : 특정 요소 지우고 추가
 * arr.splice() : 삭제된 요소 반환
 * ----------------------------
 * arr.slice(n,m) : n부터 m까지 반환
 * arr.concat(arr2,arr3) : 합쳐서 새배열 반환
 */
let arr = [0, 1, 2, 3, 4, 5];
arr.splice(1, 2); //1~2번째에 있는것은 지워라
console.log(arr);
arr.splice(1, 0, 100, 200);
console.log(arr);

let result = arr.splice(1, 2);
console.log(result);

let arr2 = [1, 2, 3, 4, 5];
arr2.slice(1, 4);
console.log(arr2);

let arr = [1, 2];
arr.concat([3, 4]);
arr = [3, 4];
console.log(arr);
