/*________________1 zadaniye__________________________________*/
for(var i=0;i<document.all.length;i++)
{
var allElements=document.all[i].nodeType.valueOf()
console.log(allElements)
}
/*___________________2 zadaniye_________________________________*/
for (var i = 0; i < document.body.childNodes.length; i++)
{
var bodElements = document.body.childNodes[i].tagName;
document.getElementById("nl").innerHTML +=bodElements +" ";
}

/*___________________3 zadaniye_________________________________*/
var span2 = document.getElementsByTagName("span")[0];
var span1 = document.all[7];
var span3 = document.getElementById("s1");
console.log(span2)
console.log(span1)
console.log(span3)
/*___________________4 zadaniye_________________________________*/

var phisic = document.getElementById("phisic").innerHTML,
math= document.getElementById("math").innerHTML,
alo = document.getElementById("alo").innerHTML,
oit = document.getElementById("oit").innerHTML,
oaip =  document.getElementById("oaip").innerHTML;
var average = function(mark1, mark2, mark3, mark4, mark5) 
{
var arr = [mark1, mark2, mark3, mark4, mark5];
var sum = 0;
for (var i = 0; i < arr.length; i++) 
{
sum += parseInt(arr[i]);	
}
sum = sum / 5;
return sum;
}
var result = average(phisic, math, alo, oit, oaip);
document.getElementById("fl").innerHTML = result;
	