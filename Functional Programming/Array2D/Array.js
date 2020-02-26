var d=require('readline-sync');
var ar=function(n,m)
{
    var arr=[];
    for(var i=0;i<n;i++)
    {
        var res=[];
        for(var j=0;j<m;j++)
        {
            res.push(d.questionInt());
        }
        arr.push(res);
    }
    for(var i=0;i<n;i++)
    {
console.log(arr[i].join(' '));
    }
}
module.exports.ar=ar;