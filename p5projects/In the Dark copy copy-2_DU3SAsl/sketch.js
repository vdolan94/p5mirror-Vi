let y = 0
let s = 0
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
  //flashlight
  fill(100,255,100);
  circle(200,550,25);
  fill(255,255,204,30);
  circle(200,200,400);
  if (mouseIsPressed) {
    background(0);
    fill(50);
  rectMode(CENTER);
  rect(200,550,40,100);
  rect(200,500,80,50);
  fill(80,0,0);
  circle(200,550,25);
  //blood
   function blood(x,y){
    noStroke();
    fill(200,100,180);
    circle(x,y/2,15);
    rect(x,0,15,y);
  }
  blood(50,y);
  blood(300,y);
  blood(100,y/2);
  blood(400,y/2);
  blood(375,y/3);
  blood(25,y/3);
  y+=1;
  if (y > 1200){
      y = 0;
      background(0);
  }
  fill(100,200,230);
    circle(200,200,70);
    triangle(200,200,300,180,220,210);
  }}
  
  



