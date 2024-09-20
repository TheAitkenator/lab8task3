
function drawCircle(circleObj){
  circle(circleObj. x, circleObj.y, circleObj.radius);
}


function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  drawCircle(myCircle);
}
