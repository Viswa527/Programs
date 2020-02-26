var ly=function(n)
{
    if(n%400==0 && n%4==0 || n%100!=0)
    {
        return "Leap Year";
    }
    else
    {
        return "Not Leap Year";
    }
}
module.exports.ly=ly;