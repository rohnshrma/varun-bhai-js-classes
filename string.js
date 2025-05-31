// a sequence of characters (alpha , num , special symbols and whitespace) enclosed in single, double quotes and backticks

// var start = "hello world";
// var myName = "john doe";
// // var txt = `john doe`;

// var txt = `${start} my name is ${myName}`;

// console.log(txt);

// note  : value taken as an input using the prompt function is of type
// string by default, but can be converted into supported data type

// var age = prompt("Enter your age :");
// console.log(typeof age);

// var age = parseInt(prompt("Enter your age :"));
// console.log(typeof age);

var fName = "john";
var lName = "doe";
var age = 23;

// concatenation : adding two or more strings together using +
// var txt =
//   "hello world this is " +
//   fName +
//   " " +
//   lName +
//   " and i am " +
//   age +
//   " years old.";

// console.log(txt);

// template literal | string literal

// var txt = `hello world this is ${fName} ${lName} and i am ${age} years old.`;

// console.log(txt);

// indexing : counting starting from 0 used to access characters | items of a string | array

// str[index] this is how indexing is used

//-5-4-3-2-1 : negative indexing
// 0 1 2 3 4 : positive indexing
// h e l l o
// 1 2 3 4 5 : normal counting

// - the first character will be on the 0th position
// - the last character will be on the str.length - 1 th position

// var name = "john donny";
// console.log(name[0]);
// console.log(name[name.length - 1]);

var txt = "my name is john doe";

// return character on the specfied index (positive)
// console.log(txt.charAt(3));
// console.log(txt.charAt(txt.length - 1));
// console.log(txt.charAt(-1)); // doesn't support negative indexing

// return character on the specfied index (positive and negative)

// console.log(txt.at(3));
// console.log(txt.at(txt.length - 1));
// console.log(txt.at(-1)); // support negative indexing

// console.log(txt.toUpperCase());
// console.log(txt.toLowerCase());

// returns true if the string includes the specified string else , false
// console.log(txt.includes("x")); // substring
// console.log(txt.includes("o"));
// console.log(txt.includes("o", 18)); //substring , start position (inclusive)

// replaces the given substring with new one (first occurances)
// console.log(txt.replace("o", "-"));
// replaces the given substring with new one (all occurances)
// console.log(txt.replaceAll("o", "-"));

// return index of first occurance of the specified string
// console.log(txt.indexOf("o"));
// console.log(txt.indexOf("o", 14)); // search string , start position (inclusive)

// console.log(txt.lastIndexOf("o")); // search string
// console.log(txt.lastIndexOf("o", 16)); // search string , end position (inclusive)

// console.log(txt.padEnd(20)); // new length (more than the actual length)
// console.log(txt.padEnd(30, "-")); // new length (more than the actual length) , fill str

// console.log(txt.padStart(20)); // new length (more than the actual length)
// console.log(txt.padStart(30, "-")); // new length (more than the actual length) , fill str

// console.log(txt.padStart(29, "*").padEnd(39, "-"));

// repeat the string with the given number of times
// console.log(txt.repeat(3));

// console.log("          hello world           ".trim()); // return a new string with leading and trailing whitespace removed
// console.log("          hello world           ".trimStart()); // return a new string with leading whitespace removed
// console.log("          hello world           ".trimEnd()); // return a new string with trailing whitespace removed

// split the string into an array
// console.log(txt.split());
// console.log(txt.split(""));
// console.log(txt.split(" "));
// console.log(txt.split("o"));

// console.log(txt.slice(2, 8)); // start (inclusice), end (exclusive) (2 : 7)
// console.log(txt.substring(2, 8)); // start (inclusice), end (exclusive) (2 : 7)

// return true if the string starts with the given substring
// console.log(txt.startsWith("hello"));
// console.log(txt.startsWith("my"));
// console.log(txt.startsWith("my", 4)); // search string , start position
// console.log(txt.startsWith("am", 4)); // search string , start position

// return true if the string ends with the given substring

// console.log(txt.endsWith("oe")); // search string , end position
// console.log(txt.endsWith("is", 10)); // search string , end position (9)

// var x = 23;
// console.log(x.toString());

// console.log(txt.match("john"));

// var result = txt.match(/[aeiou]/g);

// console.log(result);

// return index of the first match
// var res = txt.search("john");

// console.log(res);
// var res = txt.search("xx");

// console.log(res);

// var res = txt.search(/[aeiou]/g);

// console.log(res);
