const a = true;
const b = "";
const c = "Hi";

const d = a && b && c; // ''
// console.log(d);

let check = 10;
const handle = () => {
  return [1, 2, 3].map((item) => item * 2);
};
let value = [];
// if (check > 9) {
//   value = handle();
// }
value = check > 9 && handle();
console.log(value);
