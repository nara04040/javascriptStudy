// let set = new Set();

// let john = {name : "John"};
// let pete = {name : "Pete"};
// let mary = {name : "Mary"};

// 어떤 고객은 여러번 방문할 수 있다.
// set.add(john)
// set.add(pete)
// set.add(mary)
// set.add(pete)
// set.add(john)
// set.add(john)

// 셋에는 유일무이한 값만 저장한다.
// console.log(set.size)

// for (let user of set) {
//     console.log(user.name)
// }

let set = new Set (['apple', 'oranges', 'bananas']);

for (let value of set) console.log(value)

set.forEach((value, valueAgain, set) =>{
    console.log(value)
})