canvas=document.getElementById ("myCanvas");
ctx=canvas.getContext("2d");
color="blue";


ctx.beginPath();
ctx.strokeStyle="orange";
ctx.lineWidth=3;
ctx.rect(150,143,430,200);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="blue";
ctx.lineWidth=3;
ctx.arc(240,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="black";
ctx.lineWidth=3;
ctx.arc(340,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="red";
ctx.lineWidth=3;
ctx.arc(440,200,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="yellow";
ctx.lineWidth=3;
ctx.arc(290,240,40,0,2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="green";
ctx.lineWidth=3;
ctx.arc(390,240,40,0,2*Math.PI);
ctx.stroke();