let firstc = 0
let secc = 0
let thc = 0
let currentDesign = 0; // Variable to keep track of the current design
let startTime;

function setup() {
  createCanvas(400, 400);
startTime = millis();
  frameRate(11)
  
}

function draw() {
  background(0);
    mainc = random(1,150)
  secc = random(1,150)
  thc = random(1,150)
  fill(mainc,secc,thc)
  if (frameCount > 0 && frameCount < 4){
  circle(200,200,75)
  }
  
  
   if (frameCount > 2 && frameCount < 6){
    fill(mainc+50,secc+50,thc+50)
    circle(200,125,50)
    circle(200,275,50)
    circle(125,200,50)
    circle(275,200,50)
  }
  if (frameCount > 4 && frameCount < 8){
  fill(mainc+150,secc+150,thc+150)
  circle(125,125,35)
  circle(275,275,35)
  circle(125,275,35)
  circle(275,125,35)
  }
  if (frameCount > 6 && frameCount < 10){
  fill(mainc+100,secc+100,thc+100)
  circle(200,70,30)
  circle(200,330,30)
  circle(70,200,30)
  circle(330,200,30)
  }
  
  if (frameCount > 8 && frameCount <12){
  fill(mainc+150,secc+150,thc+150)
  circle(70,70,20)
  circle(330,330,20)
  circle(70,330,20)
  circle(330,70,20)
  }
  
  if(frameCount >10 && frameCount <20){
  fill(mainc+200,secc+200,thc+200)
  circle(200,20,10)
  circle(200,380,10)
  circle(20,200,10)
  circle(380,200,10)
}
  if (frameCount > 32){
    frameCount = 0
  }
  
  if (frameCount > 26 && frameCount < 30){
  circle(200,200,75)
  }
  
  
   if (frameCount > 24 && frameCount < 28){
    fill(mainc+50,secc+50,thc+50)
    circle(200,125,50)
    circle(200,275,50)
    circle(125,200,50)
    circle(275,200,50)
  }
  if (frameCount > 22 && frameCount < 26){
  fill(mainc+150,secc+150,thc+150)
  circle(125,125,35)
  circle(275,275,35)
  circle(125,275,35)
  circle(275,125,35)
  }
  if (frameCount > 20 && frameCount < 24){
  fill(mainc+100,secc+100,thc+100)
  circle(200,70,30)
  circle(200,330,30)
  circle(70,200,30)
  circle(330,200,30)
  }
  
  if (frameCount > 18 && frameCount <22){
  fill(mainc+150,secc+150,thc+150)
  circle(70,70,20)
  circle(330,330,20)
  circle(70,330,20)
  circle(330,70,20)
  }
  
  
}


