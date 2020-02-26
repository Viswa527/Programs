var game=function(s,g,t)
{
    var b=0;
    var w=0;
    for (var i = 0; i < t; i++) 
    {
        var cash = s;
        while (cash > 0 && cash < g) 
        {
            b++;
            if (Math.random() < 0.5) 
            {
                cash++;
            } 
            else
            {
                 cash--;
            }
        }
        if (cash == g) 
        {
            w++;
        } 
    }
    console.log("Number of games won : "+w);
    var p=((w*1.0)/t)*100;
    var q=100-p;
    console.log("percentage of winning : "+p);
    console.log("Percentage of lossing : "+q);
}
module.exports.game=game;