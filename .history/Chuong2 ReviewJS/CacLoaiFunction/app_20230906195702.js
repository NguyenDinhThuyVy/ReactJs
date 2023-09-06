// Callback fucntion
const nums = [1, 2, 3, 4, 5];
const callback = (item, index) => {
  console.log(`STT ${index} la ${item}`);
};
nums.forEach(callback);

// Currying là function mà return về function
function findNumber(num) {
  return function (func) {
    const result = [];
    for (let i = 0; i < num; i++) {
      if (func(i)) {
        result.push(i);
      }
    }
    return result;
  };
}
const value = findNumber(10)((number) => number % 2 === 1);
console.log(value);
findNumber(20)((number) => number % 2 === 0);
findNumber(30)((number) => number % 3 === 2);

// Sử dụng arrow Function
const findNumber = (num) => (func) => {
  const result = [];
  for (let i = 0; i < num; i++) {
    if (func(i)) {
      result.push(i);
    }
  }
  return result;
};
findNumber(10)((number) => number % 2 === 1);
findNumber(20)((number) => number % 2 === 0);
findNumber(30)((number) => number % 3 === 2);
