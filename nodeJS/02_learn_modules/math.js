function add (a,b){
  return a+b;
}
function sub (a,b){
  return a-b;
}

module.exports = {addition: add , sub};

exports.mul = (a,b) => a*b;
exports.div = (a,b) => a/b;

// ? in presence of single/default export we cannot export functions using export objects