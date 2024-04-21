console.log("practice day");
// Write a JavaScript function that reverses a number. Example x = 32243; Expected Output : 342
//by converting number tio string
function fmyunction(x) {
  x = String(x);
  return x.split("").reverse().join("");
}
console.log("original number is:" + 32242);

console.log(Number(fmyunction(32242)));
//reverse string
function Name(y) {
  let seprate = y.split("");
  let arr = seprate.reverse();
  let comb = arr.join("");
  return comb;
}
console.log(Name("Achyut"));

//simple method to reverse
let value = "Ankit";
let revvalue = value.split("").reverse().join("");
console.log("original String:" + "Ankit");
console.log(revvalue);
//using looop to reverse string
let x = "abc";
let y = "";
for (let i = x.length - 1; i >= 0; i--) {
  y += x[i]; //y=y+x[i]
}

console.log(y);

///
// write a js function that check if user is allowed access or Not
//  based on the role
//result=boolean true
//test case
//userrole=['user']
//sysrole=['admin','manager']
//result boolean false;
//vvi for interview point of view
const userrole = "user";
const sysrole = ["admin", "manager"];
const checkRole = (user, sys) => sys.some((role) => user.includes(role));
console.log(checkRole(userrole, sysrole)); //login ko lagi use huncha

//pagination problem most vvi for interview most vvvviiii
const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const page = 2;
const limit = 2;
//result [3,4]
const pagination = ({ data, page = 2, limit = 10 }) => {
  const start = (page - 1) * limit;
  const end = start + limit;
  //replace it with database aggregation
  return data.slice(start, end);
};
console.log(pagination({ data, page, limit }));

// searching related problem vvvi for interview point of view
const users = [{ name: "achyut" }, { name: "acrons" }, { user: "rita" }];
//user type ac=> [{user:"achyut"},{name:"acrons"}]

const findUser = ({ data, Search }) =>
  data.filter((item) => item.name && item.name.includes(Search));
console.log(findUser({ data: users, Search: "r" }));
