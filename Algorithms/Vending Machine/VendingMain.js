var ref=require('readline-sync');
var de=require('./Vending');
console.log("Enter a amount  : ");
var n=ref.questionInt();
de.cal(n);