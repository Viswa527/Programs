var s=require('./Replace');
var readline=require('readline-sync');
console.log("Enter your name");
let sr=readline.question();
console.log(s.str(sr));