// console.log(window, {document});
//     setTimeout(() => {
//         document.location = 'https://google.com';
//     }, 5000);
let canvas = document.getElementById("canvas");
let ctx = canvas.getContext("2d");
ctx.strokeStyle = "black";
ctx.strokeRect(40,20,320,200);
ctx.fillStyle = 'blue';
ctx.fillRect(40,20,320,66.6);
ctx.beginPath();
ctx.strokeRect(40,20,320,200);
ctx.fillStyle = 'black';
ctx.fillRect(40,86,320,66.6);
ctx.closePath();

ctx.lineWidth = 10;

// PENTAGRAM
ctx.beginPath();
var Base = {x:250, y:10};
ctx.moveTo(Base.x, Base.y);
var radius = 240;
ctx.beginPath();
ctx.strokeStyle = '#D60606';
ctx.moveTo(Base.x, Base.y);
for(var i=1;i<=5; ++i){
  var th = i * 4 * Math.PI/5;
  var x = Base.x + radius * Math.sin(th);
  var y = Base.y + radius - radius * Math.cos(th);
  ctx.lineTo(x,y);
}
ctx.lineJoin = 'miter';
ctx.closePath();
ctx.stroke();