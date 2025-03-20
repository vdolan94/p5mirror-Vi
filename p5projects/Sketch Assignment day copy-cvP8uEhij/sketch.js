
function setup() {
  frameRate(5);
  createCanvas(400, 600);
  background(30,100,250);
  noStroke();
}
//fireflies
function draw() {
  //background(10,15,60);
  background(120,70,20);
  
  //ground
  fill(30, 45, 20);
  rect(0,300,600,300);
  
  //path
  fill(50,30,10);
  quad(150,400,210,410,300,600,150,600);
  quad(150,400,210,410,225,300,200,300);
  
  //trees
  fill(20,10,2);
  rect(50,0,20,350);
  rect(340,0,80,600);
  rect(150,0,20,320);
  rect(250,0,20,300);
  rect(100,0,25,400);
  rect(280,0,23,445);
  rect(10,0,27,445);
  fill(20,10,2,75);
  rect(180,0,10,300);
  rect(75,0,10,300);
  rect(240,0,10,300);
  rect(125,0,10,300);
  rect(220,0,8,300);
  rect(320,0,10,300);
  
  //set up flickers
  let shine = random(1000);
  let shine2 = random(1500);
  let flicker = 100 * sin((frameCount + shine) / 600);
  let flicker2 = 50 * sin((frameCount + shine2) / 600);
  let flicker3 = 100 * sin((frameCount + shine2) / 600);
  
  //fireflies
  fill(150,50,100,flicker);
  circle(200,200,7);
  circle(250,250,7);
  circle(100,350,7);
  circle(25,250,5);
  circle(240,50,5);
  circle(100,500,5);
  circle(260,430,7);
  
  fill(222,192,13,flicker3)
  circle(70,550,9);
  circle(270,450,9);
  circle(220,27,4);
  
  fill(200,192,13,flicker2);
  circle(140,240,4);
  circle(250,350,3);
  circle(210,270,2);
  circle(170,330,2);
  circle(168,100,7);
}