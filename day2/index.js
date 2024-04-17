console.log("Day 2");

// data type
//premitive data type
//1 string =>string always begin with dounle quote or single quote or tild sign
const person = "Achyut";
let female = "sita";
const user = "arjun";
const user1 = `gita`; //backtick or tild sign
let num = 1.0;
let boolean = true;
console.log({ person, female, user, user1, num, boolean });
//2 number
const number1 = 3;
const number2 = 4;
console.log({ number1, number2 });
//3.Boolean =>either true or false
const isAchyutStudent = true; //camel case ho yo isAchyutStudent first sentence small and rest sentence first letter capital
const isAchyutTeacher = false;
console.log({ isAchyutStudent, isAchyutTeacher });
//4. undefined =>undefined let ra var ma matra use garna milcha
//value tha xaina vana undefined rakhne
let value;
let value1;
console.log({ value, value1 });
//5.Null =>
const data = null;
console.log({ data });

//Type conversion or type coercion
//method 1
const mul1 = prompt("enter 1 value");
const mul2 = prompt("enter 2 value");
const result = Number(mul1) * Number(mul2);
const onlystring = String(mul1);
console.log({ result, onlystring });

//method 2
const n1 = +mul1 * +mul2; //agadi plus lekho vane number ma convert huncha
console.log({ n1 });

//operator
//logical operator AND &&, OR ||,NOT!
const andcheck = mul1 && mul2;
const orcheck = mul1 || mul2;
const notcheck = !mul1;
console.log({ andcheck, orcheck, notcheck });
