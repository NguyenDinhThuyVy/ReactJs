// Callback fucntion
const nums = [1, 2, 3, 4, 5];
const callback = (item, index) => {
  console.log(`STT ${index} la ${item}`);
};
nums.forEach(callback);

// Currying là function mà return về function
