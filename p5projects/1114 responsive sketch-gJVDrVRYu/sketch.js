function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  background(220);
  circle(width/2,height/2,100);
  //eye diameter responds to canvas width
  circle(width/2-20,height/2,width/20)
  circle(width/2+20,height/2,width/20)
}

function windowResized(){
   resizeCanvas(windowWidth,windowHeight);
}