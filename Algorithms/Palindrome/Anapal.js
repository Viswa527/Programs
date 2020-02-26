var fun=function(n)
{
    for(var i=1;i<n;i++)
    {
        if(isPrime(i)==true)
        {
            if(i==rem(i))
            {
                console.log(i);
            }
        }
    }
}
var rem=function(h)
{
    var s=""+h;
    var stri="";
    for(var i=0;i<s.length;i++)
    {
        stri=s.charAt(i)+stri;
    }
    var d=parseInt(stri);
    return d;
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
module.exports.fun=fun;