function add(a, b) {
  return a + b;
}

function sub(a,b){
    if(a>b) return a - b;
    else return b-a;
}

// module.exports = "sanjil" ; // Math value is : sanjil

// module.exports = add;
// module.exports = sub; // overridden

// we can use javascript objects to return multiple things.

//single export or default export
module.exports = {
    add,
    subFn : sub,
}
// Math value is:  { add: [Function: add], subFn: [Function: sub] }



// multiple export -> using the export object

// exports.add1 = (a,b) => a+b;
// exports.sub1 = (a,b) => a-b;

// Value of my math is :  { add1: [Function (anonymous)], sub1: [Function (anonymous)] }

// these are anonymous functions, since these functions does have properties, but does not have any names.
// add1 becomes a property on the exports object, and its value is this anonymous function.
