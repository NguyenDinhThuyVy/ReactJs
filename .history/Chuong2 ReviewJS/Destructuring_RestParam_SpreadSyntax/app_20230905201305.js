/**
 * Destructuring
 */
//  Destructuring với object
// const user = {
//   name: "zyzy",
//   age: 20,
//   sex: "female",
// };
// const { name, age, sex } = user;
// console.log(name); // Zyzy
// console.log(age); // 20
// console.log(sex); // female

// Destructuring với array
const list = [
  1,
  function (a, b) {
    return a + b;
  },
];
const [value, func] = list;
// func(1, 2); // 3
// console.log(value);
// console.log(func(1, 3));

const user = {
  name: "Zyzy",
  age: 20,
  ability: ["coding"],
};
// shallow copy(copy nông)
const cloneUser = { ...user };
