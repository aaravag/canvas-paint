var mouseevent = "empty" ;
var lastpos_x , lastpos_y ;
canvas = document.getElementById ('myCanvas') ; 
ctx=canvas.getContext("2d");
color = "black";
line_width = 1 ;
canvas.addEventListener("mousedown" , my_mousedown);

function my_mousedown (e){
    mouseevent="mousedown";
}

canvas.addEventListener("mouseup" , my_mouseup);
function my_mouseup (e){
    mouseevent="my_mouseup";
}

canvas.addEventListener("mouseleave" , my_mouseleave);
function my_mouseleave (e){
    mouseevent="mouseleave";
}

canvas.addEventListener("mousemove" , my_mousemove);
function my_mousemove (e){
    currentpositionofX = e.clientX - canvas.offsetLeft;
    currentpositionofY = e.clientY - canvas.offsetTop;

if (mouseevent == "mousedown"){
    ctx.beginPath();
    ctx.strokeStyle = color;
ctx.lineWidth =line_width  ; 
console.log ("currect position of x and y coordinates = ");
console.log ("x =" + currentpositionofX +  "y = " + currentpositionofY) ;
ctx.arc(currentpositionofX , currentpositionofY , 5 , 0 , 2* Math.PI);
ctx.stroke ();
}

lastpos_x = currentpositionofX;
lastpos_y = currentpositionofY;
}