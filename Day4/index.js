console.log("day 4");
//object
//object lai jaila ne conat bata matra lekincha object start huncha{}; bata
//which is shown below
const car = {
  name: "tesla",
  color: "red",
  owner: { 1: "Achyut", 2: "Arjun" },
  age: function () {
    return 2024 - 2026;
  }, //es5 ho yo function lai async function vanincha ra yesla globally access garcha

  old: () => {
    return 2025 - 2030;
  }, //es6 yo chai arrow function yo local variable ho yesla arrow function bhitra {} ko matra value lincha
};
console.log(car);
//kunai seprate value matra print garnu chha vane
console.log(car.age, car.name);

//CRUD Operation garchu
//Creat there are two ways
//technique 1
const obj = new Object();
//technique 2
const objects = {};
//Read=>object ma read garna hamle . operator use garnu parcha
console.log(car.old);

//Update garna
car.owner[3] = "Ankit";
car.power = "750 HP";
console.log({ car });
//Delete
delete car.owner[2];

const teacher = {
  name: "Achyut ",
  subject: "mern stack",
  dob: 2014,
  age: function () {
    return 2024 - this.dob;
  },
  old: () => {
    return 2025 - this.dob;
  },
};
console.log(teacher.age()); //o/p=10, yesle le this key word le teacher represent
// garcha asyn function global variable variable vayera
console.log(teacher.old()); //NaN /yesle not a number show garcha because  arrow function
//le afno {----}bracket bhitra ko data matra hercha so this ma undefined value huncha ani
//number-undefined value gives NOta Number(NaN)

//<-------exercise------>>
//write a program which can return a boolean if value is present in the
//range with given start and end value in object
// range start=10,end=50
const range = {
  start: 10,
  end: 50,
  check: (num) => {
    if (num >= range.start && num <= range.end) {
      return true;
    }
    return false;
  },
};
console.log(range.check(40));
//a.Find the value of the price property and if it is greater than 100,
//discount it by 10%. If that’s not the case, discount it by 7%.

//hint
/* 
let prod = {
name: "headphones",
price: 83.7,
discount: "7%",
};

End result should be like this >>

 end result - case 1:
{ name: 'headphones', price: '77.84', discount: '7%' }


*/

const prod = {
  name: "headphone",
  price: 83.7,
  discount: "7%",
  value: (price) => {
    if (price < 100) {
      return prod.price - prod.price * (prod.discount / 100);
    }
    return prod.price - prod.price * 0.1;
  },
};

console.log(prod.name, prod.value(50), prod.discount);

// b. Update the object with the new property - discount and the
// corresponding value (7% or 10%) and the new price.
//hint
/* let prod = {
   name: "headphones",
   price: 83.7,
   discount: "7%",
   };
----------------------------
    end result - case 2:
Already discounted by 7%.
*/
const newprice = prod.price - (prod.price * prod.discount) / 100;
prod.discount = "10%";
if (prod.discount == "7%") {
  console.log("already discounted by 7%");
} else {
  console.log("new discount:10%");
}

console.log("newprice:", newprice);

// Write a JavaScript program to calculate circle area and perimeter.
//Note : Create two methods to calculate the area and perimeter.
// The radius of the circle will be supplied by the user.
const pi = 3.14;
let radius = prompt("enter radius ?");
areaOfCircle = 2 * pi * radius * radius;
console.log({ areaOfCircle });
perimeter = 2 * pi * radius;
console.log({ perimeter });
