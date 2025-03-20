function setup() {
  createCanvas(windowWidth,windowHeight);
}

function draw() {
  //blendMode(BLEND)
  clear()
  background(0);
  blendMode(SCREEN)
  fill(255,0,0)
  circle(mouseX,mouseY,100);
  fill(0,0,255);
  circle(width/2,height/2,100);
  //eye diameter responds to canvas width
  circle(width/2-20,height/2,width/20)
  circle(width/2+20,height/2,width/20)
}

function windowResized(){
   resizeCanvas(windowWidth,windowHeight);
}