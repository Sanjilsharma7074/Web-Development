const fs = require("fs");

//blocking request or synchronous operations

console.log(1);
const result = fs.readFileSync("./contacts.txt","utf-8");
console.log(result);
console.log(2);

// output for the above code is : 
// 1
// sanjil sharma +91 345262662
// sandy - +91 6372738227
// 2


// non blocking operations / asynchronous requests.
console.log(1);
fs.readFile('./contacts.txt',"utf-8",(err,result)=> {
    console.log(result);
    
})
console.log(2);

// 1
// 2
// sanjil sharma +91 345262662
// sandy - +91 6372738227

