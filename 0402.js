// getter, setter

const numbers = {
  a: 1,
  b: 2,
  get sum() {
    console.log("sum함수가 실행됩니다.");
    return this.a + this.b;
  },
};

console.log(numbers.sum);
numbers.b = 5;
console.log(numbers.sum);

// array

const objects = [{ name: "커피" }, { name: "음료수" }];

console.log(objects);
console.log(objects[0]);

objects.push({
  name: "카페라떼",
});
console.log(objects[2]);

// 반복문
// for
for (let i = 0; i < 10; i++) {
  console.log(i);
}

//forEach
const hero = ["아이언맨", "캡틴 아메리카", "토르", "닥터 스트레인지"];

hero.forEach((hero) => {
  console.log(hero);
});
