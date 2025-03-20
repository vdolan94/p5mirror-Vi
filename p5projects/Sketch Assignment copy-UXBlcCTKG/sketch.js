
function setup() {
  frameRate(5);
  createCanvas(400, 600);
  background(30,100,250);
  
  noStroke();
  //ground
  fill(15,30,13);
  rect(0,300,600,300);
  
  //path
  fill(10,5,0);
  quad(150,400,210,410,300,600,150,600);
  quad(150,400,210,410,225,300,200,300);
  
  //trees base
  fill(20,10,2);
  rect(40,0,30,350);
  rect(320,0,80,600);
  rect(150,0,20,320);
  rect(250,0,20,300);
  rect(100,0,25,400);
  rect(280,0,23,445);
  
  
}
//fireflies
function draw() {
  let shine = random(1000);
  let flicker = 200 * sin((frameCount + shine) / 600);
   background(10,15,60);
  
  //ground
  fill(20,40,20);
  rect(0,300,600,300);
  
  //path
  fill(20,15,4);
  quad(150,400,210,410,300,600,150,600);
  quad(150,400,210,410,225,300,200,300);
  
  //trees base
  fill(20,10,2);
  rect(40,0,30,350);
  rect(320,0,80,600);
  rect(150,0,20,320);
  rect(250,0,20,300);
  rect(100,0,25,400);
  rect(280,0,23,445);
  
 
  //fill(222,192,13,40*sin(frameCount/200));
  fill(222,192,13,flicker);
  circle(200,200,7);
  circle(160,100,7);
  circle(250,250,7);
  circle(100,350,7);
  circle(25,250,5);
  
  circle(240,50,5);
  circle(100,500,5);
  circle(70,550,9);
  circle(270,450,9);
  circle(260,430,7);
  circle(220,27,4);
  print(frameCount);
  
  
 
  //flash
  

}