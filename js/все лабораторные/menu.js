document.getElementById('dv').onmouseover = function(event){
var target = event.target;
if (target.className == 'menu-item'||target.className == 'menu-item2'||target.className == 'menu-item3')
{
var s = target.getElementsByClassName('submenu');
s[0].style.display='block';
}
}
document.onmouseover=function(event){
var target = event.target;
if (target.className!='menu-item'&&target.className!='submenu'&&target.className!='sp'&&target.className!='d'&&target.className!='menu-item2'&&target.className!='menu-item3'){
closeMenu();
}
}
function closeMenu(){
var menu = document.getElementById('dv');
var subm=document.getElementsByClassName('submenu');
for (var i=0; i <subm.length; i++){
subm[i].style.display ="none";
}
}
