<<<<<<< HEAD
console.log("parctice of map  reduce ");
//praciie array ===> map ,filter, sort, reduce,
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// const allNames = characters.map((character)=> character.name);
// console.log({allNames});
//=====================================
/*Reduces ==> thulo chiz lai sano banaune tara logic lageyera*/
//1.Get total mass of all th character
//2. get total height of all the character
//3. get the total number of character by eye color
//4.get total number of character in all the character name
const callback = (initialvalue, currentvalue) =>
  initialvalue + Number(currentvalue.mass);
const totalmass = characters.reduce(callback, 0);
console.log({ totalmass });

//malai function baneyara garna man lago vana
//so hamle garda yesari function baneyara garnu parcha
//always follow this techniue
const mass = (arr) => {
  return arr.reduce(
    (initialvalue, currentvalue) => initialvalue + Number(currentvalue.mass),
    0
  );
};

const result = mass(characters);
console.log({ result });

//2. get total height of all the character
const height = (arr) => {
  return arr.reduce(
    (initialvalue, currentvalue) => initialvalue + currentvalue.height,
    0
  );
};
const rheight = height(characters);
console.log({ rheight });

//3. get the total number of character by eye color
const color = (arr) => {
  return arr.reduce(
    (initialvalue, currentvalue) => initialvalue + currentvalue.eye_color,
    0
  );
};
const eyeresult = color(characters);
console.log({ eyeresult });
//4.get total number of character in all the character name
const allname = (arr) => {
  return arr.reduce(
    (initialvalue, currentvalue) => initialvalue + currentvalue.name,
    0
  );
};
const resultname = allname(characters);
console.log({ resultname });

// MAP
//1.get an array of all names
//2. get an array of all height
//3.get an array of object with just name and height properties
//4.get an array of all first names

//1.get an array of all names
const allnames = characters.map((Name) => {
  return Name.name;
});
console.log({ allnames });
//2. get an array of all height
const allheight = characters.map((Height) => {
  return Height.height;
});
console.log({ allheight });

//3.get an array of object with just name and height properties
const nh = characters.map((nameHeight) => ({
  //if we want to direct return object we wrwp it into parantheses

  name: nameHeight.name,
  height: nameHeight.height,
}));
console.log({ nh });

// 4.get an array of all first names
const firstname = characters.map((fname) => {
  return fname.name.split("")[0];
});
console.log({ firstname });

//Filter
//1.get character mass greater than 100
//2.get charactr height with less than 200
//3.get all male character
//4.get all female character
//-----------------------------
//1.get character mass greater than 100
const cmass = characters.filter((Mass) => parseInt(Mass.mass) > 100);
console.log({ cmass });

//2.get charactr height with less than 200
const cheight = characters.filter((height) => height.height < 200);
console.log({ cheight });
//3.get all male character

const allmale = characters.filter((male) => male.gender === "male");
console.log({ allmale });

//4.get all female character
const allfemale = characters.filter((female) => female.gender === "female");
console.log([allfemale]);

//sort
//1.sort by name
const sname = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  } else return 0;
});
//another method
console.log({ sname });
const s = characters.sort((a, b) => a.name - b.name);
console.log({ s });

//2.sort by mass
const smass = characters.sort((a, b) => a.mass - b.mass);
console.log({ smass });

//3.sort by height
const heght = characters.sort((a, b) => a.height - b.height);
console.log({ heght });

//4. sort by gender
const gs = characters.sort((a, b) => a.gender - b.gemder);
console.log({ gs });
=======
console.log("parctice of map  reduce ");
//praciie array ===> map ,filter, sort, reduce,
const characters = [
  {
    name: "Luke Skywalker",
    height: "172",
    mass: "77",
    eye_color: "blue",
    gender: "male",
  },
  {
    name: "Darth Vader",
    height: "202",
    mass: "136",
    eye_color: "yellow",
    gender: "male",
  },
  {
    name: "Leia Organa",
    height: "150",
    mass: "49",
    eye_color: "brown",
    gender: "female",
  },
  {
    name: "Anakin Skywalker",
    height: "188",
    mass: "84",
    eye_color: "blue",
    gender: "male",
  },
];

// const allNames = characters.map((character)=> character.name);
// console.log({allNames});
//=====================================
/*Reduces ==> thulo chiz lai sano banaune tara logic lageyera*/
//1.Get total mass of all th character
//2. get total height of all the character
//3. get the total number of character by eye color
//4.get total number of character in all the character name
const callback = (initialvalue, currentvalue) =>
  initialvalue + Number(currentvalue.mass);
const totalmass = characters.reduce(callback, 0);
console.log({ totalmass });

//malai function baneyara garna man lago vana
//so hamle garda yesari function baneyara garnu parcha
//always follow this techniue
const mass = (arr) => {
  return arr.reduce(
    (initialvalue, currentvalue) => initialvalue + Number(currentvalue.mass),
    0
  );
};

const result = mass(characters);
console.log({ result });

//2. get total height of all the character
const height = (arr) => {
  return arr.reduce(
    (initialvalue, currentvalue) => initialvalue + currentvalue.height,
    0
  );
};
const rheight = height(characters);
console.log({ rheight });

//3. get the total number of character by eye color
const color = (arr) => {
  return arr.reduce(
    (initialvalue, currentvalue) => initialvalue + currentvalue.eye_color,
    0
  );
};
const eyeresult = color(characters);
console.log({ eyeresult });
//4.get total number of character in all the character name
const allname = (arr) => {
  return arr.reduce(
    (initialvalue, currentvalue) => initialvalue + currentvalue.name,
    0
  );
};
const resultname = allname(characters);
console.log({ resultname });

// MAP
//1.get an array of all names
//2. get an array of all height
//3.get an array of object with just name and height properties
//4.get an array of all first names

//1.get an array of all names
const allnames = characters.map((Name) => {
  return Name.name;
});
console.log({ allnames });
//2. get an array of all height
const allheight = characters.map((Height) => {
  return Height.height;
});
console.log({ allheight });

//3.get an array of object with just name and height properties
const nh = characters.map((nameHeight) => ({
  //if we want to direct return object we wrwp it into parantheses

  name: nameHeight.name,
  height: nameHeight.height,
}));
console.log({ nh });

// 4.get an array of all first names
const firstname = characters.map((fname) => {
  return fname.name.split("")[0];
});
console.log({ firstname });

//Filter
//1.get character mass greater than 100
//2.get charactr height with less than 200
//3.get all male character
//4.get all female character
//-----------------------------
//1.get character mass greater than 100
const cmass = characters.filter((Mass) => parseInt(Mass.mass) > 100);
console.log({ cmass });

//2.get charactr height with less than 200
const cheight = characters.filter((height) => height.height < 200);
console.log({ cheight });
//3.get all male character

const allmale = characters.filter((male) => male.gender === "male");
console.log({ allmale });

//4.get all female character
const allfemale = characters.filter((female) => female.gender === "female");
console.log([allfemale]);

//sort
//1.sort by name
const sname = characters.sort((a, b) => {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  } else return 0;
});
//another method
console.log({ sname });
const s = characters.sort((a, b) => a.name - b.name);
console.log({ s });

//2.sort by mass
const smass = characters.sort((a, b) => a.mass - b.mass);
console.log({ smass });

//3.sort by height
const heght = characters.sort((a, b) => a.height - b.height);
console.log({ heght });

//4. sort by gender
const gs = characters.sort((a, b) => a.gender - b.gemder);
console.log({ gs });
>>>>>>> 149379d74d186dd339bf213c6101d3e208efee32
