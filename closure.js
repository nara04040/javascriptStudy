/**
 * js는 어휘적 환경(Lexical Environment)을 가진다
 */

// let one; // one은 undefined이다.
// one = 1; // one은 현재 1을 할당받았다.

// // 함수는 선언하는 시점부터 사용된다. addOne을 함수로 쓸때부터 addOne은 함수이다.
// function addOne(num) {
//     // console.log(addOne) 
//     console.log(one + num)
// }

// addOne(5); // 함수를 실행했을때 새로운 렉시컬 환경이 사용되면서 num이라는 매개변수에 5가 들어가진다.

// 렉시컬환경은 전역, 내부가 있으며
// 외부 렉시컬환경은 one:1, addOne : function이며,
// 내부 렉시컬환경은 num : 5이다.

// 위코드를 작성하는 시점에서 Lexical환경에 one, addOne이 써진다. 



// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// const add3 = makeAdder(3);
// // function makeAdder(3) {return function(y) return x+y;}
// console.log(add3(2));

// 1번 자 위코드를 최초로 전역 렉시컬 환경에 있는것은 makeAdder : function과 add3:초기화 x(현재 사용할수없다.) 이 있다.
// 2번 다음 순번으로 const add3 = makeAdder(3);가 실행이 되고 이때 makeAdder가 실행이 될것이다.
// 이때 makeAdder가 실행되면서 makeAdder 렉시컬 환경이 생성될것이다. 생성됬을때 makeAdder 렉시컬 환경안에 x값은 3이다.
// 함수에 렉시컬 환경에는 넘겨받은 매개변수와 지역변수들이 저장이 됩니다.
// 3번 makeAdder(x) 가 실행되었으니 add3:초기화안됨 이 function으로 변할것이다.
// 4번 이제 마지막줄인 console.log(add3(2));가 실행이 될것이다. add3()을 실행한다면 return function(y){return x+y;}가 실행이 될것이다.
// 이와 동시에 렉시컬 환경이 만들어진다. 익명함수 렉시컬환경이 생성될것이며 이 안의 값은 y : 2가 만들어질것이다. 

// 이제 x+y를 동작해보자
// x,y를 찾는다. 익명함수 렉시컬 환경에서 y값을 찾았다! (따단!) 하지만 x값이 없다...
// x값을 찾으려 makeAdder 렉시컬환경으로 넘어간다. 오, x값을 찾았다! (따단!) 그럼이제 x,y값을 다 찾았다.
// 그다음 전역 렉시컬 환경으로 넘어가서 함수를 실행시키고 , 변수 add3으로 담고, console.log()에 add3(2)를 실행값이 나온다.


// // 정리 3
// function makeAdder(x) {
//     return function (y) {
//         return x + y;
//     }
// }

// const add3 = makeAdder(3);
// console.log(add3(2)); //5

// const add10 = makeAdder(10);
// console.log(add10(5)); // 15
// console.log(add3(1)); // 4

// return function (y)는 y를 가지고있고 상위함수 makeAdder의 x에 접근이 가능하다,
// console.log(add3(2))의 add3함수가 생성되어도 상위 함수인 makeAdder()의 x에 접근이 가능하다. 
// 이것이 바로 Closure이다.
// 함수와 렉시컬 환경의 조합.
// 함수가 생성될 당시의 외부의 변수를 기억하고있고,
// 생성된 이후에도 계속해서 접근이 가능하다는것.

// makeAdder(10)이 호출이되어도, add3의 함수는 변함이 있는가? 없다.

// 정리 4
// function makeCounter() {
//     let num = 0;

//     return function () {
//         return num;
//     };
// }

// let counter = makeCounter();

// console.log(counter());
// console.log(counter());
// console.log(counter());

// console.log(counter())에 나온 값들을 수정할수 있을까?     
// 답은 불가능하다.
// 오직 카운터만 증가시키기만 하는것이다. 
// 즉 외부에서는 참조가 불가능 하지만 내부에서는 참조가 가능한 이것을 클로져라고합니다.



// ===============================================================================================================

// function outerFn() {
//     var x = 10;
//     var innerFn = function () {
//         console.log(x)
//     }
//     innerFn();
// }

// outerFn()

// outerFn안에서 내부함수 innerFn이 선언되고 호출되었다. 내부함수 innerfn은 자신을 포함하는 외부함수 outerFn의 변수 x에 접근할수있다.







// ==============================================================================================================================
// 스코프란?
/**
 * 
 */

// function add(x, y) {
//     console.log(x, y);
//     return x + y;
// }

// add(3, 6);
// console.log(x, y);

// 위함수를 읽어보자
// function 안에있는 console.log() 만 실행이되고 3,6 이 나올것이고,
// 밖에 있는 console.log(x,y)는 에러를 띄울것이다.

// 즉 스코프는 변수이름 , 함수이름, 클래스 이름과 같은 식별자가 본인이 선언된 위치에 따라 다른 코드에서 자신이 참조될수 있을지 없을지 결정되는 것 이다.

// 코드 전체는 전역과 지역으로 구분이 된다.
// 선언 시점으로 부터, 즉 전역에 선언이 되었다면 전역스코프가, 지역에서 선언 되었다면 지역스코프를 가지게 된다.

// 함수는 전역에서 정의가 될수도 있고, 함수 내부에서도 정의가 될수 있다.
// 이때 함수 내부에서 정의된 함수를 중첩함수라고 하고 이 중첩함수를 포함하는 함수를 외부함수라고한다.
// 아래코드를 봐보자.
// var x = '전역x';

// function outer() {
//     var y = 'outer함수의 지역 y';
//     console.log(x);
//     console.log(y);


//     function inner() {
//         var x = 'inner함수의 지역 x'

//         console.log(x)
//         console.log(y)
//     }

//     inner();
// }

// outer()
// console.log(x);
// console.log(y);

//코드 분석을 해보자, 외부함수 outer함수가 있고, 내부함수 inner함수가있다.
// outer함수 내부에서 선언된 지역변수 y가 있고, inner함수 내부에서 선언된 지역변수 x가 있다.

// 전역x
// outer함수의 지역 y
// inner함수의 지역x
// outer함수의 지역 y
// 전역x
// 레퍼런스 에러

// 이를 스코프로 나뉘어 보자
// 1. inner 지역스코프
// x : inner함수의 지역 x

// 2. outer 지역 스코프
// y : outer함수의 지역 y
// inner function

// 3. 전역 스코프
// x : 전역 x
// outer : function
// 이처럼 계층적으로 연결되어있는 것을 보고 스코프체인 이라고 말하며
// 자바스크립트 엔진은 이 스코프체인을 통해서 참조를 한다.
// 예를들어서 inner함수 즉 스코프안에 x는 있지만 y가 없기에 한단계 위의 스코프인 outer스코프로가서 y를 참조해온다. 

// 이 스코프는 블록레벨 스코프, 함수레벨 스코프로 나뉘는데
// let , const와 같이 블록을 기준으로 스코프를 나누는 블록레벨 스코프
// 무조건 함수로 나뉘는 함수레벨 스코프가 있다.

// 자바스크립트의 함수는 정의되는 시점에 상위스코프에 대한 내용을 저장한다는것을 알아두자.


// 만약 함수를 호출을 한다면, -> 실행 컨텍스트를 생성하고 -> 스택을 쌓는다 -> 렉시컬 환경을 생성 -> 실행이 완료되었다면 스택에서 없앤다.

// 렉시컬 환경 : ?/


// const x = 1;

// function outer() {
//     const x = 10;
//     const inner = function () {
//         console.log(x)
//     }
//     return inner;
// }


// const ella = outer();
// console.log(ella())



// outer라는 함수, 함수 내부의 지역변수 x , 변수 inner에 담긴 함수. 

// 예상을 해보자.. 
// 함수를 실행시킨 값을 ella라라는 값에 넣어줬으니 ella를 실행시키면 outter함수가 실행될것이고
// 그대로 inner의 값을 return하므로 콘솔에는 10을 나오겠지?

// 왜그럴까?

// 클로저
// 생명주기를 다한 외부함수는 없어지지만, 내부함수가 외부함수의 값을 참조할수있다면?
// 이때 inner를 클로져라고 부른다.

// 위코드를 차근차근 보자, 
// outer함수가 실행이 끝났다. 그래서 실행 컨텍스트 스택에서 outer함수의 컨텍스트가 없어질것이다.
// 하지만 내부함수에서 참조가 되고있기때문에 컨텍스트가 사라졌다고해서 참조까지는 건들이지 않는다는 것.

// 즉 클로져는
// 1. 상위 스코프의 식별자를 참조하고있고!
// 2. 본인의 외부함수보다 더 오래 살아있다면!
// 이것을 클로져라고 부를수있다.