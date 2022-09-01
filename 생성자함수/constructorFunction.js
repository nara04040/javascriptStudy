// new A() === new B() 가 성립 가능한 함수 A B를 만드는게 가능할까?

// let res = {}
// function A() { 
//     return res;
// }
// function B() { 
//     return res;
// }

// console.log( new A == new B() ); // true

// ====================================================================
/**
 * 계산기
 * read() => console.log함수를 사용자로부터 두개를 받고, 이를 객체 프로퍼티에 저장
 * sum() => 프로퍼티에 저장된 값 두 개를 더한후 반환
 * mul() => 프로퍼티에 저장된 값 두개를 곱한후 반환
 *
 * 계획
 *  1. 일단 read함수, sum함수, mul함수를 구현
 *  2. 이걸 사용할만한 조건과 계산기 폼을 작성
 */

// function Calculator() {
//     this.read = function () {
//         this.a = +prompt('a?' , 5);
//         this.b = +prompt('b?' , 7);
//     };

//     this.sum = function () {
//         return this.a + this.b
//     };

//     this.mul = function() {
//         return this.a * this.b
//     };
// }

// let calculator = new Calculator();
// calculator.read();

// console.log( "Sum = " + calculator.sum())
// console.log( "Mul = " + calculator.mul())


// ==================================================================
//  그냥 하드코딩

    const sum = function (a,b) {
    return a + b;
}

    const mul = function (a,b) {
    return a * b;
}

console.log("Sum = " + sum(5,55));
console.log("Mul = " + mul(6,10));

// 생성자 함수 활용
function Calculator() {
    this.sum = function (a,b) {
    return a + b;
}

    this.mul = function (a,b) {
    return a * b;
}

}

let calculator = new Calculator;

console.log("Sum = " + calculator.sum(5,55))


// test!



