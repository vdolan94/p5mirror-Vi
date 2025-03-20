
function setup() {
  frameRate(5);
  createCanvas(400, 600);
  background(30,100,250);
  noStroke();
}
//fireflies
function draw() {
  //background(10,15,60);
  background(16, 30, 82);
  
  //set up flickers
  let shine = random(1000);
  let shine2 = random(1500);
  let flicker = 200 * sin((frameCount + shine) / 600);
  let flicker2 = 200 * sin((frameCount + shine2) / 600);
  let flicker3 = 300 * sin((frameCount + shine2) / 600);
  
  let shine3 = random(400,600);
  let shine4 = random(400,600);
  let light = 120 * sin((frameCount+shine3) / 700);
  let light2 = 120 * sin((frameCount+shine4) / 700);

  
  //background(10,15,60);
  background(16, 30, 82);
  
  //light
  fill(16, 30, 150,light);
  quad(250,0,0,100,0,200,300,0);
  quad(400,40,150,300,250,300,400,50);
  
  fill(16, 30, 170,light2);
  quad(350,0,0,250,0,400,400,0);
  
  //ground
  fill(21, 36, 20);
  rect(0,300,600,300);
  
  //path
  fill(20,15,4);
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
  
  
  //fireflies
  fill(222,192,13,flicker);
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