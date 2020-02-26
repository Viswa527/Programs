var prime= function(n)
{
    for(var i=1;i<=n;i++)
    {
        if(isPrime(i)==true)
        {
            console.log(i);
        }
    }
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
module.exports.prime=prime;