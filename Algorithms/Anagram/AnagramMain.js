var res=require('./Anagram.js');
var ss=require('readline-sync');
console.log("Enter String-1  : ");
var sw=ss.question();
console.log("Enter String-2  : ");
var sq=ss.question();
console.log(res.ana(sw,sq));