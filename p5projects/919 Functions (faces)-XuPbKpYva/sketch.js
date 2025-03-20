function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if (mouseIsPressed === true) {
    fill(random(255),random(255),random(255));
    //true and false trigger if drawn when clicked or not clicked
    drawface(mouseX, mouseY, random(10, 100), random(10, 100)); //can use mouseX and mouseY
  }
}
function drawface(x, y, w, h) {
  ellipse(x, y, w, h);
  circle(x - w / 4, y - h / 10, w / 4);
  circle(x + w / 4, y - h / 10, w / 4);
}
