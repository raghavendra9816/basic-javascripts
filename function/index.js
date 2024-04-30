console.log("Function practice");
/* 
function 
function vanako engine ho jasle input lincha ra tyo input bata meaningful result dincha
function is building blocks of the program
the function alloww the code to run multiple times without repeat (DRY= Dont repeate yourself);
function e palta banaune tara multiple time use garna milcaha


ES5 function old version 

function sayhai(name){name vamnako argument
    alert(`hello $(name)`)  backtick lai template literals vando racha ra dollor sign use garera variable pass garna milcha
}
sayhai("achyut") function call garako ra argument pass garako

ES6 =>latest veersion of function  also called arrow function
const sayhi=(name)=>{
    alert(`hello $(name)`);
}
sayhi("adhikari");





*/
function addition(num1, num2) {
  return num1 + num2;
}
//const result = addition(2, 9);
console.log(addition(2, 4));

//steps
// 1. function define garne
// 2.function ma value pass garne
// 3. fiunction call garne

//es5
function hi(user) {
  const hlo = `hi ${user}`;
  return hlo;
}
console.log(hi("achyut"));
//same code but in es6
const hii = (user) => {
  return `hii ${user}`;
};
console.log(hii("adhikari"));

//write js function to add two number using asking from the user
const add = (number1, number2) => {
  return number1 + number2;
};
// let first = Number(prompt("enter first number "));
// let second = Number(prompt("enter second number"));
// console.log(add(first, second));

//write a js function that takes username and password
// if username===achyut && password===achyut
//welcome
//else
//invalid password
const login = (user, pass) => {
  if (user === "achyut" && pass === "achyut") {
    console.log("welcome you are logined");
  } else console.log("invalid password");
  return user, pass;
};
login("achyut", "ankit");

//write a js function to find the factorial of 5 using recursive function

const facto = (num) => {
  let temp = 1;
  for (let i = 1; i <= num; i++) {
    temp = temp * i;
  }
  return temp;
};
