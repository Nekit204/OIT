$(document).ready(function ()
{
//-----------задания 8 лабы----------------
//--------------------1 задание-----------
$("#km").mouseover(function ()
{
$("#km").css("color" , "red");
})
//--------------------2 задание-----------
$("#tm").click(function () 
{
$("#tm").css("font-size" , "30px");
})
//--------------------3 задание-----------
$("#lolik").click(function () 
{
$("[src='c++.png']").attr("src" , "js.png");
})
//--------------------4 задание-----------
$("#blink").click(function () 
{
$("#blink").html('<img src ="Enot.png" width = "300px" height = "200px"/>');
})
//--------------------5 задание-----------
$("#fl").mouseover(function () 
{
$("#fl").css("width", 300).css("height", 300);
})
$("#fl").mouseout(function () 
{
$("#fl").css("width", 200).css("height", 200);
})
//--------------------6 задание-----------
$("p").dblclick(function()
{
$("p").css("border","4px double aqua");
})
//--------------------7 задание-----------
//---------------задания 9 лабы----------------------
//--------------------1 задание-----------
$( init );
function init() {
$('#img1').draggable();
}
//--------------------2 задание-----------
$("#but2").click(function(){
$("#one").animate({marginLeft:100},100);
$("#one").animate({marginLeft:200},100);
$("#one").animate({marginLeft:300},100);
$("#one").animate({marginLeft:400},100);
$("#one").animate({marginLeft:500},100);
});
//--------------------3 задание-----------
$("#but3").click(function(){
$("#two").animate({marginLeft:100},700);
$("#two").animate({marginTop:140},700);
$("#two").animate({marginLeft:150,marginTop:-3},700);
$("#two").animate({marginLeft:200,marginTop:140},700); 
$("#two").animate({marginLeft:250,marginTop:-3},700);
$("#two").animate({marginLeft:0},1000);
});
//--------------------4 и 5 задание-----------
$("#draw").click(function(){
var canvas = document.getElementById('c1');
var ctx = canvas.getContext('2d');
var x = 0;
var y=0;
var timer;
var fn=$('[name=graph]');
var func=$('[name=col]');
if(fn[0].checked)
{
$(function drawSin(){
y = Math.sin(x);
x=x+0.3;
ctx.fillRect(15*x,430+80*y, 8,20);
timer = setTimeout(drawSin, 2);
})
}
if(fn[1].checked)
{
$(function drawSin(){
y = Math.cos(x);
x=x+0.3;
ctx.fillRect(15*x,430+80*y, 8,20);
timer = setTimeout(drawSin, 2);
})
}
if(fn[2].checked)
{
$(function drawSin(){
y=Math.pow(x,2);
x=x+0.3;
ctx.fillRect(440+x*5,450-2*y,15,35)
ctx.fillRect(440-x*5,450-2*y,15,35)
timer = setTimeout(drawSin, 2);
})
}
if(fn[3].checked)
{
 $(function drawSin(){
y=Math.pow(x,3);
x=x+0.3;
ctx.fillRect(440-x*5,450-2*y,15,45);
ctx.fillRect(440+x*5,450+2*y,15,45);
timer = setTimeout(drawSin, 2);
})
}
if(func[0].checked)
{
$(function changeColor(){
ctx.fillStyle="#FF69B4";
})
}
if(func[1].checked)
{
$(function changeColor(){
ctx.fillStyle="#00FF00";
})
}
if(func[2].checked)
{
$(function changeColor(){
ctx.fillStyle="#FF0000";
})
}
if(func[3].checked)
{
$(function changeColor(){
ctx.fillStyle="#8B008B";
})
}
});
})