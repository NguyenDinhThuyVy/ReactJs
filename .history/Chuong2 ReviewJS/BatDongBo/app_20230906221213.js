// async callback thông thường
// setTimeout(() => {
//   console.log("hello");
// }, 1000);

// chuyển thành promise
// const p = () =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("hello");
//     }, 1000);
//   });

// const value = p()
//   .then((value) => {
//     console.log(value);
//     return 100;
//   })
//   .catch((error) => {
//     console.log(error);
//   })
//   .finally(() => {
//     console.log("Finish!");
//   });
// value.then((value) => console.log(value));
// console.log("value", value);
// console.log("Chạy trước tiên");

//
const p = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });
(async () => {
  try {
    const value = await p();
    console.log(value);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finish!");
  }
  console.log("Chạy cuối cùng");
})();
