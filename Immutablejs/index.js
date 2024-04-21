//Immutable java script
// original data ko copy nikalera kam garne lai immutable js vanchu
//map ,reduce ,filter, some, every, find,spread =>not sure vako bela ma yo garne

//original data ma direct change garnu xa if it is 100% then +>use foreach,delete,replace

//date
const d = new Date();
console.log(d);

//crud

const oldDate = new Date("2021-2-3");
//Read
console.log({ oldDate });

console.log(oldDate.getMonth()); //yo index based huncha
//update
console.log(oldDate.setMonth(3));
console.log(oldDate);

//Time Zone
// dataa base le Iso standard ma rakdo Racha
//("2024-04--07T12:36:04.542+00:00")
console.log(oldDate.toISOString());
console.log(new Date("2024-04-07T12:36:04.542+00:00").toLocaleString());
