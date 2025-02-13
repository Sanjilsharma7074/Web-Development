// "./" represents the current directory.
const math = require("./math");
console.log("Math add value is: ",math.add(2,4));
// Math add value is:  6

console.log("Math sub value is: ",math.subFn(2,4));
// Math sub value is:  2



//destructuring 
const {add, sub} = require("./math");
console.log(add(2,3)); //5



// console.log("Value of my math is : ",math);
