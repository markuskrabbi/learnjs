// console.log(window, {document});
//     setTimeout(() => {
//         document.location = 'https://google.com';
//     }, 5000);

// FLAG
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
let Base = {x:550, y:35};
ctx.moveTo(Base.x, Base.y);
let radius = 70;
ctx.beginPath();
ctx.strokeStyle = 'black';
ctx.moveTo(Base.x, Base.y);
for(let i=1;i<=5; ++i){
  let th = i * 4 * Math.PI/5;
  let x = Base.x + radius * Math.sin(th);
  let y = Base.y + radius - radius * Math.cos(th);
  ctx.lineTo(x,y);
}
ctx.lineJoin = 'miter';
ctx.closePath();
ctx.stroke();

// CIRCLE
let sector = document.getElementById('sector');
sector.style.transform = 'rotate(270deg)';

