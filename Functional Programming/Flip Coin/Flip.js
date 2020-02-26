var ok=function(num)
{
    var h=0;
    var t=0;
    for(var i=0;i<num;i++)
    {
        if(Math.random()<0.5)
        {
            h++;
        }
        else
        {
            t++;
        }
    }
    console.log(h+" "+t);
    var p=(((h+1.0)/num)*100);
    var q=100-p;
    console.log("Percentage of getting TAILS : "+p);
    console.log("Percentage of getting HEADS : "+q);
}
module.exports.ok=ok;