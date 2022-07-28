// //  What is 함슈?
// //  어떤 작업을 수행하기 위해 필요한 문들의 집합을 정의한 코드 블록이다


// // 기명함수 , 익명함수

// let foo = function multiply(a,b){
//     return a * b; 
// };

// let bar = function(a,b) {
//     return a * b;
// }

// console.log(foo(1,100));
// console.log(bar(1,299));

// // 함수는 변수에 할당이 가능하다 = 변수에 담을수 있다, 왜? 일급객체이기때문에
// // 이변수는 함수명이 아니고 할당된 함수를 가르킨다.
// //  즉 foo 를 부른다고할때 foo를 가져오는게 아니라 function multiply(){}를 컨택시켜준다는 의미
// // ***************함수 호출시 함수명이 아니라 변수명을 사용해서 호출해줘야한다.*************
// // 왜냐고? 그냥 외워라 나도 모른다 머리아프니까 걍 외워라


// let userName = 'John';

// function showMessage() {
//     userName = 'Bob';

//     let message = 'Hello, ' + userName;
//     console.log(message);
// }
// console.log(userName); //함수 호출 전이므로 'john'이 나옴
// showMessage(); // 함수 호출
// console.log(userName); // 함수 호출 후이므로 'bob'이 나옴

function changeVal (primitive, obj) {
    primitive += 100;
    obj.name = 'Kim';
    obj.gender = 'female';
}

var num = 100;
var obj = {
    name: 'Lee',
    gender: 'male'
};

console.log(num)
console.log(obj);
changeVal(num, obj);
console.log(num);
console.log(obj)
