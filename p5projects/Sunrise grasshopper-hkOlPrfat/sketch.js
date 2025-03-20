let y = 0
function setup(){
  createCanvas(400,400)
   background(255);
}
function draw(){
  noStroke()
 y += 1;
  fill(255,0,0);
  if (y > 400){
    y = 0;
    background(255);
  }
  circle(200, y, 15)

  fill(50);
  rectMode(CENTER);
  rect(200,550,50,100);
  rect(200,500,70,50);
  fill(0);
  circle(200,560,20);
  
}
