document.getElementById('dv').onmouseover = function(event){
var target = event.target;
if (target.className == 'menu-item'){
var s = target.getElementsByClassName('submenu');
s[0].style.display='inline';
}
}
document.onmouseover=function(event){
var target = event.target;
if (target.className!='menu-item' &&target.className!='submenu'){
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
