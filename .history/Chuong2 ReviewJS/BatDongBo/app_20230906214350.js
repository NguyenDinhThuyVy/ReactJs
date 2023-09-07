// async callback thông thường
setTimeout(() => {
  console.log("hello");
}, 1000);

// chuyển thành promise
const p = () =>
  new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("hello");
    }, 1000);
  });

const value = p()
  .then((value) => {
    console.log(value);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("Finish!");
  });

// console.log("Chạy trước tiên");
