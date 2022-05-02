/**
 * 메서드 내부에서 this 키워드를 사용하면 객체에 접근 가능.
 *
 *
 */

let user = {
  name: "john",
  age: 30,

  sayHi() {
    console.log(this.name);
  },
};
user.sayHi();

// 자유로운 this
// 모든 함수에서는 this를 사용할 수 있다.
let user1 = { name: "john" };
let admin = { name: "Admin" };
function saysayHi() {
  console.log(this.name);
}
user1.f = sayHi;
admin.f = sayHi;
