let day = 3;
let dayName;

switch (day > 2) {
  case 1:
    dayName = "Monday";
    break;
  case 2:
    dayName = "Tuesday";
    break;
  case 3:
    dayName = "Wednesday";
    // console.log("Here is a code");
    break;
  case 4:
    dayName = "Thursday";
    break;
  case 5:
    dayName = "Friday";
    break;
  case 6:
    dayName = "Saturday";
    break;
  case 7:
    dayName = "Sunday";
    break;
  default:
    dayName = "Invalid day";
}

console.log(dayName);

let marksAge = false;

if (marksAge) {
  console.log("marksAge is less than 10");
} else if (marksAge < 20) {
  console.log("marksAge is less than 20 but greater or equal to 10");
} else {
  console.log("marksAge is 20 or greater");
}
