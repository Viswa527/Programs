var Har=function(n)
{
    var sum=0;
    for(var i=1;i<=n;i++)
    {
        sum=sum+(1/i);
    }
    return sum;
}
module.exports.Har=Har;