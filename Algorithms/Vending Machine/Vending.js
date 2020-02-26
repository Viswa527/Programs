var arr=[1000,500,100,50,10,5,2,1];
var cal=function(n)
{
    var i=0;
    while(n>0)
    {
        if(Math.trunc(n/arr[i])!=0)
        {
            var b=Math.trunc(n/arr[i]);
            
            console.log(arr[i]+" * "+b+" = "+arr[i]*b);
            var r=n-(arr[i]*b)
            n=r;
        }
        else
        {
            i++;
        }
    }

}
module.exports.cal=cal;