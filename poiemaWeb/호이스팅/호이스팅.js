/**
 * 호이스팅(Hoisting)
 * var, function선언문등 해당 스코프의 선두로 옮긴 것처럼 동작하는 특성을 말한다.
 * var와 달리 let 으로 선언된 변수는 참조에러(ReferenceError)가 발생한다.
 * 이는 let 키워드로 선언된 변수는 스코프의 시작에서 변수의 선언까지 일시적사각지대(Temporal Dead Zone)에 빠진다.
 *
 */

/**
 * 변수의 선언 3단계
 * 1. 선언단계 (Declaration phase)
 *  - 변수를 실행컨텍스트의 변수객체(Variable Object)에 등록된다. 스코프가 참조하는 대상이 된다.
 *
 * 2. 초기화 단계 (Initialization phase)
 *  - 변수객체(Variable Object)에 등록된 변수를 위한 공간을 메모리에 확보한다. 이 단계에서 변수는 undefined로 초기화된다.
 *
 * 3. 할당단계 (Assignment phase)
 *  - undefined로 초기화된 변수에 실제 값을 할당한다.
 *
 * ----------------------------------------------
 * var로 선언된 변수는 선언 단계와 초기화단계가 한번에 이뤄진다.
 * 즉, 스코프에 변수를 등록하고 메모리에 변수를 위한 공간을 확보후 undefined로 초기화한다.
 * 따라서 변수 선언문 이전에 변수에 접근하여도 스코프에 변수가 존재하기에 에러가 발생하지 않는다.
 * 다만 undefined를 반환한다.
 */

// 스코프의 선두에서 선언 단계와 초기화단계가 실행된다.
// 변수 선언문 이전에 변수를 참조할수 있다.
// console.log(foo);
// var foo;
// console.log(foo);
// foo = 1;
// console.log(foo);

// 참조에러(ReferenceError)가 발생한다.
// let으로 선언된 변수는 블록레벨스코프를 가지므로 코드블록내에서 선언된 foo는 지역변수이다.
// foo도 해당스코프에 호이스팅되고 코드 블록의 선두부터 초기화가 이뤄지는 지점까지 TDZ에 빠진다.
// let foo = 1;
// {
//   console.log(foo);
//   let foo = 2;
// }
