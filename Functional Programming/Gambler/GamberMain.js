var ss=require('./Gambler');
var d=require('readline-sync');
console.log("Enter ur stack value : ");
var a=d.questionInt();
console.log("Enter ur goal: ");
var b=d.questionInt();
console.log("Enter how many trails you want to play : ");
var c=d.questionInt();
ss.game(a,b,c);