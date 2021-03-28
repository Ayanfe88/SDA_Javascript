var canvas = document.getElementById("c1");
var context = canvas.getContext("2d");

context.lineWidth = 4;
context.strokeStyle = "rgb(255, 0, 0)";
context.fillStyle = "rgba(100, 100, 100, 0.5)";

context.strokeStyle = "#3333DD";
context.beginPath();

//we want to start at a position of x=100, y=100
context.moveTo(100, 100);

//we want to draw two lines to given locations
context.lineTo(200, 200);
context.lineTo(300, 100);
context.closePath();

//this will apply our changes
context.stroke();
context.fill();