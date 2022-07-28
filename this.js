/**
 * this는 객체를 가르키는 키워드!
 * this = 객체
 * this는 호출을 한 놈
 * 
 * 호출한 놈이 없으면 기본값으로 window객체
 * 
 */

// let person = {
//     fullName: 'nara',
//     age: 25,
//     printThis: function () {
//         console.log(this);
//         console.log(this === person);
//     }
// }

// person.printThis();
// // person이 printThis() 호출되어서 this는 person을 가르킨다.

// let printThis1 = person.printThis;
// printThis1();
// // window가 나옴

// // 즉 javascript가 browser즉 윈도우 즉 페이지를 제어하기위해서 브라우저에 내장되있는 전역객체이다

// function printThis() {
//     console.log(this); // default this => window 
// }

// printThis();

// let person1 = {
//     name: '홍길동',
//     whoIsThis: printThis,
// }

// let person2 = {
//     name: '김길동',
//     whoIsThis: printThis,
// }

// let person3 = {
//     name: '한길동',
//     whoIsThis: printThis,
// }

// person1.whoIsThis(); 
// person2.whoIsThis(); 
// person3.whoIsThis(); 

// MDN : "대부분의 경우" this는 함수를 호출한 방법에 의해서 결정된다.
// 그럼 예외는 뭐가있냐?
//  1. 전역스코프에서 this는 window객체이다.
//  2. 화살표함수에서의 this는 다르다.
//  3. Strict Mode this는 다르다.


// let btn = document.querySelector('button');
// btn.addEventListener('click', function () {
//     console.log(this)
//     console.log(this === btn)

// })

// 1. callback함수가 메서드 안에서 재호출되었거나
// 2. 내부에서 btn을 this로 자동적으로 설정

// 마음대로 객체로 바꾸고싶다 그럼?
// bind(es5)  - this를 설정할수있는 메서드


// function printThis() {
//     console.log(this); // default this => window 
// }
// printThis()

// let person1 = {
//     name: '홍길동',
// }

// let printThis1 = printThis.bind(person1);
// printThis1()

/**
 * 위를 보다시피 this를 호출한 놈이 없다. 그러므로 printThis의 함수를 실행시키더라도 this의 주체는 window로 설정된다.
 * 하지만 변수에 담아둔다면, 즉 브라우저에서 제공하는 내장객체를 사용해준다면,! 호출한놈이 따로 지정을 해준다면!
 * this는 printThis함수 안의 name인 객체의 값인 '홍길동'을 반환한다.
 * 이해관계 번호정리
    1. 함수를 지정해줬지만 호출한 사람이 없기에 console.log(this)의 주체는 window로 설정된다.
    2. 고로 function printThis함수를 bind(es5문법)을 let person1으로 변수로 삼아준것을 바인딩시키고
        다른변수인 printThis1을 선언해주고, printThis1을 실행시켜준다면,
        printThis1 은 person1을 바인딩된 printThis인 함수를 호출 printThis()함수 안에 있는 console.log(this)가 불러지는데
        이때 this는 자신을 호출한사람인 person1을 찾고 name: "홍길동"을 보여준다.
 */

// =====================================
// 자 그럼 바인딩을 2번해볼까?

// function printThis() {
//     console.log(this); // default this => window 
// }
// // printThis()

// let person1 = {
//     name: '홍길동',
// }
// let person2 = {
//     name: '김길동',
// }

// let printThis1 = printThis.bind(person1);
// let printThis2 = printThis1.bind(person2);

// printThis2() // 홍길동 ??
// // 그렇다 바인딩은 한번만 가능하다 ㅋ 힝 속았징?

// =======================================================
// setTimeOut()
// 브라우저의 내장객체중에서 Time()함수가 있다.

// let person = {
//     name: 'nara',
//     age: 26,
//     hello: function () {
//         setTimeout(function () {
//             console.log(this);
//             console.log(this.name);
//             console.log(this.age);
//         }, 1000);
//     }
// }
// person.hello();

// name과 age가 나올줄알았는데 undefined가 나오네?
// ? 왜?
// 이유는 2가지다
// 1 내부에서 그렇게 설정을 해서
// 2 아님 호출한놈이 없어서 자동으로 window로 잡혀서
// 그럼 해결방안?
// ==============================================================

// .bind를 써줘서 객체로 잡아서 써먹어보자
// setTimeout 괄호 뒤쪽을 기준으로 function을 괄호로 잡아준다음
// (this)로 잡아준다.... ? 헷갈리지?
// 다시, hello: function(){ console.log(this)}를 해보쟈
// this는 person이 되고 person의 특성들을 다 말해준다.

// let person = {
//     name: 'nara',
//     age: 26,
//     hello: function () {
//         console.log(this)
//         // setTimeout((function () {
//         //     console.log(this)
//         //     console.log(this.name)
//         //     console.log(this.age)
//         // }).bind(this), 1000);
//     }
// }
// person.hello();

// ================================================================
// 다시 쉽게 말해서
// let person = {
//     name: 'nara',
//     age: 26,
//     hello: function () {
//         function printHello() {
//             console.log(this);
//             console.log(this.name);
//             console.log(this.age);
//         }
//         setTimeout(printHello.bind(person), 1000)
//     }
// }
// person.hello();
// 자 hello 의 값은 function이다. 부른다면 printHello가 실행될꺼고 그럼 console.log(this)...들이 실행이 될것이다.
//  그리고 setTime함수를 실행시켰고 parameter값은 printHello이다. 예상해본다면 뭐가나올까?
//  window가 정답이다. 왜냐? setTime함수는 window의 내장객체이기 때문이다! 
//  즉 호출한놈이 내장함수라면 bind시켜주자
// 그렇다면 우리가 원하는 person값이 출력이 될것이다.

// 다시! 정리
// this는 뭐하는 놈이냐 this는 호출한 놈입니다.
// 왜 쓰느냐? 객체를 포함한 놈이 자기자신의 값을 다시 가져다 쓰고싶을때 사용합니다.
//  그럼 뭐가 문제냐? 호출한놈이 그때그때마다 달라서 그렇습니다!
//   그게 뭐가있냐? , 내장객체(setTime함수),나 아무도 호출한놈이 없을때 디폴트값인 window로 잡히기 때문입니다!

// 해결책은 무엇이냐? , .bind()를 써줘서 새로운 변수에 바인딩시켜줍니다!
//  그럼 바인딩에 바인딩에 바인딩에 바인딩, 해도되냐? 안됩니다! bind는 한번만 실행 가능합니다!

// ===========================================================================================
// 화살표함수(Arrow Function)일때 this?
// 화살표함수는 ES6의 문법 즉, 따끈따끈한 놈이다.
// 본론만 말해보겠다. 화살표함수는 자신을 포함하고있는 외부Scope에서 this를 계승받는다.

// let person = {
//     name: 'nara',
//     age: 26,
//     hello: function () {
//         setTimeout(
//             () => {
//                 console.log(this);
//                 console.log(this.name);
//                 console.log(this.age);
//             }, 1000)
//     }
// }
// person.hello();
// 위코드처럼 hello값에 function안에 setTime함수를 익명함수로 뒀다. 실행하면 this는 window를 가르킨다.
// 하지만 화살표함수로 바꾼다면?? 어?
// 이유는 자신을 포함하는 , 즉 화살표함수를 포함하는 스코프는 hello: function(){}이다. ok?
// 이해할수없다면 hello:function(){console.log(this)}를 해보자 person객체를 가르킨다.
// 즉 화살표함수를 사용한다는것은 자신을 감싸는 스코프 , 즉 person.hell()를 했을때 hello:function(){이 안에 함수를 호출(this)}
// 이 안의 호출할때 이 함수가 화살표함수라면 자신을 감싸는 스코프인 hello:function()안의 this를 승계받기에 
//              console.log(this);console.log(this.name);console.log(this.age);가 나온다!


// 화살표함수가 나오기 전에는

// let person = {
//     name: 'nara',
//     age: 26,
//     hello: function () {
//         let that = this
//         setTimeout(function () {
//             console.log(this);
//             console.log(that.name);
//             console.log(that.age);
//         })
//     }
// }
// person.hello();

// 이렇게 hello함수안에 익명함수로 적고 that이라는 변수에 this를 담아서, 즉 다른 변수를 선언해줘서 그안에 this를 담고
// 이 that을 이용해서 this를 사용했다, 하지만 setTimeout함수안에 this는 여전히 window를 가르키는 문제가 있다.
// setTimeout에 this를 사용하기전에 person을 가르키는 this를 that에 담아줘서 이 that을 사용했다.
// 하지만 화살표함수가 등장함으로써 이는 대체되었다.



// ===================================================================================
// strict mode에서의 this
// 엄격모드(strct Mode)에서는 호출한 놈이 없을경우 기본값을 window로 하지않고 undefined로 한다.

// 'use strict'

// function printThis() {
//     console.log(this); // default this => window 
// }
// printThis();

// 자 이걸보면 this는 누가 호출하냐? window! 정답이다.
// 근데 이것을 strict모드 엄격모드로 지정한다면?
// undefinde를 내뱉는다.





// ===================================================================================
// 화살표함수를 사용하면 안되는경우!

// 1. 객체 메서드를 선언할때 사용하면 안된다.
// let person = {
//     name: 'nara',
//     printThis: () => {
//         console.log(this);
//     }
// }
// person.printThis()
//위 코드를 보면 화살표함수는 this할 객체를 계승받는다. 근데 이때 계승되는것은 누구냐? window객체이다.
// let person = {
//     name: 'nara',
//     printThis: function () {
//         console.log(this);
//     }
// }
// person.printThis()
// 이렇게 function(){}으로 해준다면 된다

// 2. addEventListener함수의 콜백함수에서 사용하면 this가 상위 컨텍스트를 가르킨다.
// let btn = document.querySelector('button');
// btn.addEventListener('click', () => {
//     console.log(this === window);
//     this.innerHTML = "Clicked button"
// })






// ===========================================================================================================================================================
// js에서 this?
//  메서드가 자신이 속한 객체의 프로퍼티를 참조하려면?

// 함수명은 함수 내부에서만 참조할때 즉 함수 내부에서 호출할때만 사용하는것.
// 외부에서 호출할때는 함수명으로 함수를 참조할수없으므로 함수명으로 함수를 호출할수없다.