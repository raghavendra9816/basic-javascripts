console.log("day5");

//Array=>collection of any thing of complex data type
//CRUD
//creat
//type 1
const firstArr = [];
//type 2
const secondArr = new Array();
console.log({ firstArr, secondArr });
const thirdArr = ["achyut", { name: "ankit" }, "honda", [1, 2]];
console.log({ thirdArr });

//creating random array
const anyArr = [
  "achyut",
  { age: 23 },
  "nepal engineering collage",
  { phone: 9816869591 },
  { friends: "bishal" },
  [1, 2, 3],
  function age() {
    return "this is array class";
  },
  "true",
];
console.log({ anyArr });

//read
console.log(anyArr[1]);
console.log(anyArr[5]);
console.log(anyArr[5][2]);
//COMPLEX DATA TYPE ALWAYS USED CONST
//update
anyArr[1] = 22;
console.log(anyArr);
//delete
//delete garne spread operator used garne yesko keyword notation ... three dot ho
//spread operator ...
const [a, b, ...rest] = anyArr; //array ma chai j rakhna ne milcha it takes index value
console.log(rest);

//object ma ne spread operator use garna milcha
const obj = {
  name: "achyut",
  age: 24,
  collage: "nepal Engineering Collage",
  height: "5.8''",
  phone: 9811111111,
};
const { name, age, ...test } = obj; //in caase of object key haru rakhnu parcha
console.log(test);

const first = [1, 2, 3];
const second = [4, 5, 6];
//two array lai combine garne
const result = [...first, ...second];
//console.log(result);

//loop and print all the value of the result array
for (let i = 0; i < result.length; i++) {
  console.log(result[i]);
}

//google mozila  javascript array method ko lagi

//write a js array solution to add new element in the array
const arry1 = [1, 2];
//[0,1,2] .unshift()---[1,2,0].push()
console.log(arry1.unshift(0));
console.log(arry1);
//write a js array method solution  to convert  array to string
//output;"1","2"
const teststring = "1,2";
const result1 = teststring.split(",");
console.log(result1);

const people = [
  { name: "achyut", age: 24 },
  { name: "ram", age: 26 },
  { name: "bishal", age: 23 },
];
//sort in assending order by age =>small to big
//let food=['noodle','pasta','icecream'];
//let food=['fries','icecream','pizza'];
//compare this 2 array and find common food only if any.
