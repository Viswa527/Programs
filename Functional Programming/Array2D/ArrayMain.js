var re=require('readline-sync');
var aa=require('./Array');
console.log("Enter no of Rows :");
var a=re.questionInt();
console.log("Enter no of columns ");
var b=re.questionInt();
aa.ar(a,b);