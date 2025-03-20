let s = 0
function setup() {
  createCanvas(400, 600);
  }

function draw() {
  background(0);
  if (mouseIsPressed){
    let xcen = width / 2;
    let ycen = height / 2;

    translate(xcen, ycen);
    scale(s); 
    translate(-xcen, -ycen); 

    face();
    
    //fill(0);
    //circle(200,200,s)
    //s += 2
  }
  if (s>=2){
    s = 0;}
  else {
  s += 0.003;
  }
  
}
function face(){
  fill(20);
  noStroke();
  rectMode(CENTER);
  ellipse(200,150,200,150);
  rect(200,225,200,150);
  circle(270,280,75);
  circle(130,280,75);
  rect(200,300,150,200);
  triangle(125,400,200,450,275,400);
  circle(200,400,100);
    
  // facials
  fill(0);
  circle(150,200,75);
  circle(250,200,75);
  ellipse(200,350,100,125);
  ellipse(190,250,10,30);
  ellipse(210,250,10,30);
  fill(100);
  circle(250,200,15);
  circle(150,200,15);
}