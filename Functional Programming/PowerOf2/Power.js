var pv=function(n)
{
    if (n<32)
    {
    return Math.pow(2,n);
    }
    else
    {
        return "Enter value between 0 to 31 ..!";
    }
}
module.exports.pv=pv;