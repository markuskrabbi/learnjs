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


