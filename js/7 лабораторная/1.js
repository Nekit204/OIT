
function print()
{
var first=document.forms["fit"].elements[0].value;
var surname=document.forms["fit"].secondname.value;
var prof=document.forms["fit"].elements[3].value;
var course=document.forms["fit"].s.value;
document.getElementById('ploy').innerHTML=first+"<br>";
document.getElementById('loft').innerHTML="Студент"+" "+surname+" "+"специальность"+" "+prof+" "+"курс"+" "+course+" "+"должен сдавать следующие предметы:";
document.getElementById('ans').innerHTML +="<ul>";	
for(var i=0;i<=document.forms["fit"].childNodes.length; i++)
{
if(document.forms["fit"].childNodes[i].type=='checkbox' )
{
document.getElementById('ans').innerHTML += "<li>"+document.forms["fit"].childNodes[i].value+"</li>";
}
} 
document.getElementById('ans').innerHTML +="</ul>";
}
function lol()
{	

for(var l=0;l<=document.forms["fit"].childNodes.length; l++)
{
if(document.forms["fit"].childNodes[l].type=='checkbox')
{
	if(document.forms["fit"].childNodes[l].checked)
document.getElementById('lip').innerHTML += "<option>"+document.forms["fit"].childNodes[l].value+"</option>";
}
} 
}