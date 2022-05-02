/**
 * 원시형(primitive type) : 하나의 데이터만 담을수 있는 것
 * 객체형 : 원시형과 달리 다양한 데이터를 담을 수 있는 것.
 * 객체는 {}를 사용하고 안에는 '키(key) : 값(value)'로 구성되있다.
 */

let user = new Object(); // '객체 생성자' 문법
let user1 = {}; // '객체 리터럴' 문법
// 중괄호를 이용해 객체를 선언하는것을 객체 리터럴(object literal)이라고 부른다. 선언할때는 주로 이방식을 채용한다.

/**
 * 리터럴과 프로퍼티
 * 콜론(:)을 기준으로 왼쪽엔 키, 오른쪽엔 값이 위치합니다.
 */

let user2 = {
  name: "nara",
  age: 26,
};

console.log(user2.name);
console.log(user2.age);
// 프로퍼티안에서는 모든 자료형이 올 수 있습니다!
user2.isAdmin = true;
console.log(user2.isAdmin);
// delete로 프로퍼티를 삭제할수도 있어용!
delete user2.isAdmin;
console.log(user2.isAdmin);

// 프로퍼티 끝에는 쉼표로도 끝날수도 있답니다!

// !! 중요 !!
// const로 선언된 객체는 수정이 될 수 있어요! 이게 무슨말이냐구요??
const A = {
  name: "jin",
};
A.name = "hanara";
// 자 보다시피 const로 선언하고 A의 내용을 바꾸었습니다. 결과는?
console.log(A);
// holy shi.. hanara가 튀어나오네요? 이처럼 const는 A의 값을 고정하지만 그안의 내용까지 고정하지는 않는다는걸 명심합니다!
// const는 A = 'hannara' 라고 바꾸었다면 오류가 발생합니다


/**
 * 대괄호 표기법.
 *  여러단어를 조합해서 프로퍼티 키를 만든 경우에는 점 표기법을 사용하여 프로퍼티 값을 읽을 수 없어요
 *  변수 식별자에는 공백이 없어야하고, 숫자로 시작하지 않아야하며,  $와_를 제외한 특수문자가 없어야합니다.
 *  
 */