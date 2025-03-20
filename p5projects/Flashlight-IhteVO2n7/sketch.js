function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0);
  noStroke()
  fill(50);
  rectMode(CENTER);
  rect(200,550,40,100);
  rect(200,500,80,50);
  fill(80,0,0);
  circle(200,550,25);
  if (mouseIsPressed) {
  //flashlight
  fill(100,255,100);
  circle(200,550,25);
  fill(255,255,204,30);
  circle(200,200,400);
  
  }
}
  
