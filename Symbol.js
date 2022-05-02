// other dev code
const user = {
  name: "mike",
  age: 30,
};

// my code
// user.showName = function () {};
const showName = Symbol("show name");
user[showName] = function () {
  console.log(this.name);
};

user[showName]();

// watch the user messege
for (let key in user) {
  console.log(`His ${key} is ${user[key]}. `);
}
