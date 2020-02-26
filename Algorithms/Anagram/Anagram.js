var ana=function(s1,s2)
{
    var arr1=s1.toUpperCase().replace("[^A-Z]","").split('').sort();
    var arr2=s2.toUpperCase().replace("[^A-Z]","").split('').sort();
    if(arr1.length==arr2.length)
    {
        for(var i=0;i<arr1.length;i++)
        {
            if(arr1[i]!=arr2[i])
            {
                return "Not Anagram";
            }
        }
        return "Anagram";
    }
    else
    {
        return "Not Anagram";
    }
}
module.exports.ana=ana;