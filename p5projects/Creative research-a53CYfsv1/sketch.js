
 function setup() {
  createCanvas(windowWidth, windowHeight, P2D);
  
  noStroke();
  fill(0, 1);  
}
  
 function draw() {    
  background(0);
  for ( i = 0; i < windowWidth; i++) {
    x = random(width);
     y = random(height);
    stroke("#3F51B5");
    rect(x, y, 30, 30);
    stroke("#4CAF50");
    rect(x, y, 20, 20);
  }
   
   //console.log(windowWidth)
  //if (frameCount % 10 == 0) console.log(frameRate);
}
function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}