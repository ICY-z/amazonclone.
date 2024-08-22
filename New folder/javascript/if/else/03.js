if (false) {
  console.log("1212");
}

// == equal-to operator when data type is not checked
// != is not equal-to operator

let a = 2;
let b = 3;
let c = 4;

if ((2 > 3, 3 > 4)) console.log("clear statemnet ");
else console.log("No clear relationship ");

let Vowel = "a,e,i,o,u";
let age = "c,h";

if (age == Vowel) {
  console.log("this is a vowel ");
} else {
  console.log("this is not a vowel ");
}

let y = 3000;
if (y % 4 == 0) {
  console.log("this is a leap year");
} else console.log("this is not a leap year ");
if (y % 100 == 0 && y % 400 !== 0) {
  console.log("Century year but not a leap year ");
}
