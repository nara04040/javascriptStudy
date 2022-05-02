/**
 * 심볼은 유일한 식별자를 만들때 사용합니다.
 * 심볼은 유일성을 보장해줍니다.
 */

const a = Symbol(); //new를 붙이지 않습니다
const b = Symbol();

console.log(a);
console.log(b);

console.log(a === b); // 보다시피 false가 반환되는것을 볼 수 있다.

const id = Symbol("id");
const id2 = Symbol("id");
console.log(id);
console.log(id2); // id 와 id2를 찍어보면 같은 값이 나오지만.
console.log(id === id2); // 동등연산자로 확인해보면 false가 반환된다. 이를 보다시피 심볼은 유일성을 보장한다.

const id3 = Symbol("id");
const user = {
  name: "nare",
  age: 30,
  [id]: "myid",
};
console.log(user); //user를 확인했을때 다 잘나오고
console.log(user[id]); // 따로 뽑아서 검사해보았을때도 잘 나온다.
console.log(Object.keys(user)); // 하지만 object.keys로 확인하면 나오지 않는다.

/**
 * symbol.for() : 전역심볼
 * '하나'의 심볼만 보장받을 수 있다.
 *  없으면 만들고, 있으면 가져오면 된다.
 *  Symbol함수는 매번 다른 Symbol값을 생성하지만, Symbol.for 메서드는 하나를 생성하고 키를 통해 같은 Symbol을 공유한다.
 *
 */

const idid = Symbol.for("id");
const idid2 = Symbol.for("id");
console.log(idid === idid2); // 보다시피 전역심볼을 사용한 변수는 true를 반환한다.


/**
 * 숨겨진 Symbol key를 보는법
 * Object.getOwnPropertySymbols(~~) 을 시용한다면 숨겨진 symbol이 나온다
 * Reflect.ownKeys(~~) , 객체의 모든 심볼키를 보여준다.
 */