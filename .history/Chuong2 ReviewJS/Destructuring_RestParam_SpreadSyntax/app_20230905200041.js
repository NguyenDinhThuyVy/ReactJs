/**
 * Destructuring
 */
//  Destructuring với object
const user = {
  name: "zyzy",
  age: 20,
  sex: "female",
};
const { name, age, sex } = user;
console.log(name); // Zyzy
console.log(age); // 20
console.log(sex); // female

// Destructuring với array
const list = [
  1,
  function (a, b) {
    return a + b;
  },
];
const [value, func] = list;
// func(1, 2); // 3
