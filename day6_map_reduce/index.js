<<<<<<< HEAD
console.log("day revised & map redcee 6");
//statement
//if(){}
// else{}
//switch case
const username = "achyut";
const password = "achyut";
if (username === password) {
  //if it use== it compare value only if it use===it compare value and data type also

  console.log(true);
} else {
  console.log(false);
}
//switch case
const day = 3;
switch (day) {
  case 1:
    console.log("sunday");
    breah;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  default:
    console.log("invalid date");
}

//es 6
//called as ternary operator
username === password ? console.log("loginned") : console.log("invalid");
//logical operator
//AND &&===>
if (username === "achyut" && password === "achyut") {
  console.log("loginned");
}
//OR || ===>
if (username === "achyut" || password === "achyut") {
  console.log("loginned");
}
//NOT ===>
if (!username === "achyut") {
  console.log("invalid");
}

//function
//es6
//Write a js function to add 2 numbers
//result 2,2=4;
const sum = (num1, num2) => {
  // num1,num2 is called as parameter
  return num1 + num2;
};
//function lai call garne ava
const result = sum(2, 2); //when we call the function 2,2 are called argument
console.log({ result });

//es5
function sums(num1, num2) {
  return num1 + num2;
}
const results = sums(2, 2);
console.log({ results });
//=============================================================================
//Bubble short Logic
//sort method with function comparision
const people = [
  { name: "achyut", age: 24 },
  { name: "bishal", age: 23 },
  { name: "ajit", age: 23 },
];
//sorts in assending order by age =>small to big

//loop inside aray
//compare 1st number age to second number age
//swap the object if 1st is smaller than 2dn

const logic = (a, b) => {
  return a.age - b.age;
};
//sort logic >0 swap,<0 no swap,=0 no swap
const sortresult = people.sort(logic);
console.log({ sortresult });
=======
console.log("day revised & map redcee 6");
//statement
//if(){}
// else{}
//switch case
const username = "achyut";
const password = "achyut";
if (username === password) {
  //if it use== it compare value only if it use===it compare value and data type also

  console.log(true);
} else {
  console.log(false);
}
//switch case
const day = 3;
switch (day) {
  case 1:
    console.log("sunday");
    breah;
  case 2:
    console.log("monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("wednesday");
    break;
  default:
    console.log("invalid date");
}

//es 6
//called as ternary operator
username === password ? console.log("loginned") : console.log("invalid");
//logical operator
//AND &&===>
if (username === "achyut" && password === "achyut") {
  console.log("loginned");
}
//OR || ===>
if (username === "achyut" || password === "achyut") {
  console.log("loginned");
}
//NOT ===>
if (!username === "achyut") {
  console.log("invalid");
}

//function
//es6
//Write a js function to add 2 numbers
//result 2,2=4;
const sum = (num1, num2) => {
  // num1,num2 is called as parameter
  return num1 + num2;
};
//function lai call garne ava
const result = sum(2, 2); //when we call the function 2,2 are called argument
console.log({ result });

//es5
function sums(num1, num2) {
  return num1 + num2;
}
const results = sums(2, 2);
console.log({ results });
//=============================================================================
//Bubble short Logic
//sort method with function comparision
const people = [
  { name: "achyut", age: 24 },
  { name: "bishal", age: 23 },
  { name: "ajit", age: 23 },
];
//sorts in assending order by age =>small to big

//loop inside aray
//compare 1st number age to second number age
//swap the object if 1st is smaller than 2dn

const logic = (a, b) => {
  return a.age - b.age;
};
//sort logic >0 swap,<0 no swap,=0 no swap
const sortresult = people.sort(logic);
console.log({ sortresult });
>>>>>>> 149379d74d186dd339bf213c6101d3e208efee32
