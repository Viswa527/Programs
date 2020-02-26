var Fac=function(n)
{
    let ar=[];
    var j=0;
    for(var i=1;i<=n;i++)
    {
        if(isPrime(i) && n%i==0)
        {
            ar[j]=i;
            j++;
        }
    }
    return ar;
}
var isPrime=function(n)
{
    if(n>3)
    {
        for( var i=2;i<n ;i++)
        {
         if(n%i==0)
            {
                return false;
            }
        }
        return true
    }
    else
    {
        return true;
    }
}
module.exports.Fac=Fac;