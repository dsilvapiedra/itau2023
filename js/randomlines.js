// Giving color to each text in sphere
var linecolor = "red";

//cambiar codigo para que resuelva  el is typing a crear canvas

// var canvas = document.createElement("canvas");
canvas = document.querySelector("canvas");
canvas.style.width = window.innerWidth;
canvas.style.height = window.innerHeight;
// scale = 1;
// canvas.width =  window.innerWidth * scale;
// canvas.height = window.innerHeight * scale;
//document.getElementsByTagName("body")[0].appendChild(canvas);
// document.body.style.background = 'url(' + canvas.toDataURL() + ')';
var ctx = canvas.getContext("2d");
var pause = true;

ctx.beginPath();
ctx.rect(0, 0, canvas.width, canvas.height); //canvas background
// ctx.fillStyle = `rgba(159, 240, 167, 255)`;

ctx.fillStyle = `#5f9ea0`;
ctx.fill();

var ptheta = 50;
var theta = 50;
var px = 0;
var py = 0;
var x = 100;
var y = 100;
var a = 0.3;

var rand = 0;
var angleVar = 0;
function animate() {
  rand = Math.random() * (10.0 - 1.0) * 1.0;
  angleVar = (2 * rand - 1) * a * Math.PI;
  theta = ptheta + angleVar;
  px = x;
  py = y;
  r = rand; //Math.random() * (10.0 - 1.0) * 1.0;
  x = px + r * Math.cos(ptheta);
  y = py + r * Math.sin(ptheta);
  ptheta = theta;

  //draw
  ctx.lineWidth = 0.3 * rand; //make this random
  ctx.beginPath();
  ctx.moveTo(this.px, this.py);
  ctx.strokeStyle = linecolor;
  ctx.lineTo(this.x, this.y);
  ctx.lineCap = "round";
  ctx.stroke();
}

async function dibujar() {
  while (isTyping) {
    await new Promise((r) => setTimeout(r, 2000));
  }

  setInterval(function () {
    if (!pause) animate();
  }, 50);

  const arte = document.querySelector(".btn-pause span");
  arte.addEventListener("click", () => {
    pause ? (arte.style.color = "#FF5733") : (arte.style.color = "black");
    pause = !pause;
  });
}

dibujar();
