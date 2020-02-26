var ee=require('./LeapYear');
var ss=require('readline-sync');
console.log("Enter a Year : ");
var ok=ss.questionInt();
console.log(ee.ly(ok));
