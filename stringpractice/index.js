// console.log("this is string practice");
// 1. Write a JavaScript function to check whether an 'input' is a string or not.

// Test Data :
// console.log(is_string('Achyut '));
// true
// console.log(is_string([1, 2, 4, 0]));
// false

const is_string = (names) => {
  if (typeof names === "string") {
    return true;
  } else {
    return false;
  }
};
console.log(is_string("achyut"));
console.log(is_string(1, 2, 3));

// 2. Write a JavaScript function to check whether a string is blank or not.
// Test Data :
// console.log(is_Blank(''));
// console.log(is_Blank('abc'));
// true
// false

const is_Blank = (input) => {
  if (input.length === 0) {
    return true;
  } else {
    return false;
  }
};
console.log(is_Blank(""));
console.log(is_Blank("abc"));

// 3. Write a JavaScript function to split a string and convert it into an array of words.
// Test Data :
// console.log(string_to_array("Robin Singh"));
// ["Robin", "Singh"]
const seprate = (input) => {
  return input.split(" ");
};
console.log(seprate("achyut adhikari"));

// 4. Write a JavaScript function to extract a specified number of characters from a string.
// Test Data :
// console.log(truncate_string("Robin Singh",4));
// "Robi"
const specifiedchar = (string) => {
  return string.slice(0, 4);
};

console.log(specifiedchar("Robin Singh"));

// 6. Write a JavaScript function that hides email addresses to prevent unauthorized access.
// Test Data :
// console.log(protect_email("robin_singh@example.com"));
// "robin...@example.com"
const hide = (email) => {
  return email();
};
console.log(hide(a, b, c, d, ...hide, email));
