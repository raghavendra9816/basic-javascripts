console.log("hello Achyut");

// vriable

// ctrl+/ for single line coment
//for multi line coment /* */
//keyword:var, let const
// var is used for global variable defined
// let is used if want to reuse variable
// const is uded if we want value constsnt

const person = "Achyut";
const person1 = "Arjun";

let number = 3.14;
number = 5;

// print garna ko lagi
console.log(number);
// yesari curly bracket ma rakho vana kun key ko value ho vanne tha huncha
console.log({ person });
console.log({ person1 });

// interaction
alert("Hello achyut");
const question1 = prompt("what is your name");
const question2 = confirm("are you 25 years or above");
console.log({ question1, question2 });
//update the above question1 and question2 to print name and age through alert
alert(question1 + "your name and you are" + question2 + "above 25 years old");

//  first taskwrite multiplication table for 3 digit
const number1 = prompt("enter number 1 value");
const number2 = prompt("enter number 2 value");
const number3 = prompt("enter number 3 value");
const number4 = number1 * number2 * number3;
alert(number4);
