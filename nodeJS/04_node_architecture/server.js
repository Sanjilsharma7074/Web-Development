const fs = require("fs");
const os = require("os");

console.log(`Length of CPU cores is: ${os.cpus().length}`);
console.log();


//blocking request or synchronous operations

console.log("Blocking operations");

console.log(1);

const result = fs.readFileSync("./contacts.txt","utf-8");
console.log(result);

console.log(2);

// ? 1
// ?sanjil sharma +91 345262662
// ?sandy - +91 6372738227
// ?2

console.log(); // new line


// non blocking operations / asynchronous requests.
console.log("Non blocking operations");

console.log(3);

fs.readFile('./contacts.txt',"utf-8",(err,result)=> {
    console.log(result);
    
})

console.log(4);

// !3
// !4
// !sanjil sharma +91 345262662
// !sandy - +91 6372738227
