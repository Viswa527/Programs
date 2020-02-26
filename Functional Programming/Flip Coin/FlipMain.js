var readline=require('readline-sync');
var ss=require('./Flip');
console.log("Enter no of flips");
var n=readline.questionInt();
ss.ok(n);