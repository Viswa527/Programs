var es=require('./Power');
var d=require('readline-sync');
console.log("Enter a value to get power of 2 :")
var num=d.questionInt();
console.log(es.pv(num));