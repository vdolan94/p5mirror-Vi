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
  function blood(x,y){
    noStroke();
    fill(60,0,0);
    circle(x,y,15);
    rect(x,0,15,y*2);
  }
  if (mouseIsPressed) {
  //flashlight
  fill(100,255,100);
  circle(200,550,25);
  fill(255,255,204,30);
  circle(200,200,400);
  //blood
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
  let xcen = width / 2;
    let ycen = height / 2;

    translate(xcen, ycen);
    scale(s); 
    translate(-xcen, -ycen); 

    face();
  }
  if (s>=2){
    s = 0;}
  else {
  s += 0.003;
  }
  
}
function face(x){
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
    
  // eyes
  fill(30,0,0);
  circle(150,200,75);
  circle(250,200,75);
  fill(0,0,0);
  ellipse(250,200,15,80);
  ellipse(150,200,15,80);
  //face shit
  stroke(0);
    strokeWeight(5)
  line(120,130,180,150);
  strokeWeight(3);
  line(140,120,140,150);
  line(160,130,160,160);
  strokeWeight(5);
  line(230,250,290,280);
  
  //mouth
  strokeWeight(2);
  fill(30,0,0);
  ellipse(200,350,100,125);
  //nose
  noStroke();
  fill(0);
  ellipse(190,250,10,30);
  ellipse(210,250,10,30);
  
  
  //teeth
  fill(20);
  triangle(165,280,170,350,175,280);
  triangle(190,280,185,350,180,280);
  triangle(195,280,200,350,205,280);
  triangle(210,280,215,350,220,280);
  triangle(225,280,230,350,235,280);
  triangle(165,420,170,360,175,420);
  triangle(180,420,185,360,190,420);
  triangle(195,420,200,355,205,420);
  triangle(210,420,215,360,220,420);
  triangle(225,420,230,355,235,420);
  }

