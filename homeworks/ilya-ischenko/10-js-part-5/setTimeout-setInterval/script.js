// 1st part =====
let count = 0;
setInterval(() => {
  count += 1;
  console.log(`Elapsed time: ${count} sec`);
}, 1000);

// 2nd part =====
// JUST UNCOMMENT BELOW AND MAKE COMMENT ABOVE

// let count = 0;
// const timer = setInterval(() => {
//   count += 1;
//   console.log(`Elapsed time: ${count} sec`);
//   if (count >= 5) {
//     clearInterval(timer);
//   }
// }, 1000);
