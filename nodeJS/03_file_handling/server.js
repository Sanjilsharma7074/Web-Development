const fs = require ("fs");

//synchronous - can store the returned result inside a variable.
fs.writeFileSync('./name.txt','hey there, myself sanjil')

//asynchronous - always expects a callback 
fs.writeFile('./async.txt','i am asynchronous', (err,data) => {

})

 
//asynchronous => need not have to return the result in a variable instead takes a callback function.
fs.readFile('./name.txt','utf-8',(err,result) => {
    if(err){
        console.log("Error: ",err);
    }
    else{
        console.log(result);
    }
})


//synchronous => can give us a result by storing the returned value inside a variable.
console.log("Before");

const result = fs.readFileSync('./name.txt','utf-8')
console.log(result);



console.log("After");

fs.appendFileSync('./name.txt','\nHey hello whatsup!');
const result2 = fs.readFileSync("./name.txt", "utf-8");
console.log(result2);


// !Before
// ?hey there, myself sanjil

// !After
// ?hey there, myself sanjil
// ?Hey hello whatsup!



// *can copy the content of one file to another file also
fs.cpSync('./name.txt','./copy.txt')


// **to delete a file
// fs.unlinkSync('./copy.txt')


// !!to check the status of a file.
// ? to check the statistics of the file.

console.log(fs.statSync('./async.txt'));
console.log(fs.statSync('./async.txt').isFile()); //true



// ?to make a directory and many other folders within it.

fs.mkdirSync("my-docs/a/b",{recursive:true})

