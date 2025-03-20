function setup() {
  createCanvas(400, 400);
  background(220);
}

function draw() {
  if (mouseIsPressed){
    noStroke();
    fill(random(255),random(255),random(255));
  circle(mouseX, mouseY,100);
  }
}