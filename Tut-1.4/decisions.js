// courses and grades
// 70-100 => A "First class"
// 40 - 69 => B "Second Class"
// 0 - 39 => F "Failed"

let grades = 5;

let result = grades >= 40 && grades <= 69 ? "Second class" : "Failed";
console.log(result);

// if (grades >= 70) {
//   console.log("First class");
// } else if (grades >= 40 && grades <= 69) {
//   console.log("Second class");
// } else {
//   console.log("Failed");
// }

// let condition = 3 < 5;
// console.log(condition);
// if (condition) console.log("this is true");
// console.log("this is the default block");
