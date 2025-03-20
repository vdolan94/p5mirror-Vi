let mainc = 0;
let secc = 0;
let thc = 0;
let startTime;
let currentDesign = 0;
let frameSwitchInterval = 10; // Switch design after 30 frames

function setup() {
  createCanvas(400, 400);
  startTime = frameCount;
  frameRate(10);
}

function draw() {
  background(0);
  mainc = random(1, 150);
  secc = random(1, 150);
  thc = random(1, 150);
  fill(mainc, secc, thc);
  console.log(currentDesign)
  
  // Check if it's time to switch to a new design
  if (frameCount - startTime > frameSwitchInterval) { 
    currentDesign = int(random(1, 6)); 
    startTime = frameCount; // Reset the start time
    frameCount = 0; // Reset frameCount to 0
  }
  

  // Display different designs based on the random number
  if (currentDesign === 1) {
    pattern1();
  } else if (currentDesign === 2) {
    pattern2();
  } else if (currentDesign === 3) {
    pattern3();
  } else if (currentDesign ===4){
    pattern4()
  } else if (currentDesign === 5){
    pattern5()
  }
  
}
function pattern1 (){
  if (frameCount > 0 && frameCount < 24){
  circle(200,200,75)
  }
  
  
   if (frameCount > 2 && frameCount < 22){
    fill(mainc+50,secc+50,thc+50)
    circle(200,125,50)
    circle(200,275,50)
    circle(125,200,50)
    circle(275,200,50)
  }
  if (frameCount > 4 && frameCount < 20){
  fill(mainc+150,secc+150,thc+150)
  circle(125,125,35)
  circle(275,275,35)
  circle(125,275,35)
  circle(275,125,35)
  }
  if (frameCount > 6 && frameCount < 18){
  fill(mainc+100,secc+100,thc+100)
  circle(200,70,30)
  circle(200,330,30)
  circle(70,200,30)
  circle(330,200,30)
  }
  
  if (frameCount > 8 && frameCount <16){
  fill(mainc+150,secc+150,thc+150)
  circle(70,70,20)
  circle(330,330,20)
  circle(70,330,20)
  circle(330,70,20)
  }
  
  if(frameCount >10 && frameCount <14){
  fill(mainc+200,secc+200,thc+200)
  circle(200,20,10)
  circle(200,380,10)
  circle(20,200,10)
  circle(380,200,10)
}
  
  
}

function pattern2(){
  
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
  
  if(frameCount >10 && frameCount <14){
  fill(mainc+200,secc+200,thc+200)
  circle(200,20,10)
  circle(200,380,10)
  circle(20,200,10)
  circle(380,200,10)
}
  
  
  if (frameCount > 20 && frameCount < 24){
  circle(200,200,75)
  }
  
  
   if (frameCount > 18 && frameCount < 22){
    fill(mainc+50,secc+50,thc+50)
    circle(200,125,50)
    circle(200,275,50)
    circle(125,200,50)
    circle(275,200,50)
  }
  if (frameCount > 16 && frameCount < 20){
  fill(mainc+150,secc+150,thc+150)
  circle(125,125,35)
  circle(275,275,35)
  circle(125,275,35)
  circle(275,125,35)
  }
  if (frameCount > 14 && frameCount < 18){
  fill(mainc+100,secc+100,thc+100)
  circle(200,70,30)
  circle(200,330,30)
  circle(70,200,30)
  circle(330,200,30)
  }
  
  if (frameCount > 12 && frameCount <16){
  fill(mainc+150,secc+150,thc+150)
  circle(70,70,20)
  circle(330,330,20)
  circle(70,330,20)
  circle(330,70,20)
  }
}

function pattern3 (){
  if (frameCount > 0 && frameCount < 2){
  circle(200,200,75)
  }
  
  
   if (frameCount > 2 && frameCount < 4){
    fill(mainc+50,secc+50,thc+50)
    circle(200,125,50)
    circle(200,275,50)
    circle(125,200,50)
    circle(275,200,50)
  }
  if (frameCount > 4 && frameCount < 6){
  fill(mainc+150,secc+150,thc+150)
  circle(125,125,35)
  circle(275,275,35)
  circle(125,275,35)
  circle(275,125,35)
  }
  if (frameCount > 6 && frameCount < 8){
  fill(mainc+100,secc+100,thc+100)
  circle(200,70,30)
  circle(200,330,30)
  circle(70,200,30)
  circle(330,200,30)
  }
  
  if (frameCount > 8 && frameCount <10){
  fill(mainc+150,secc+150,thc+150)
  circle(70,70,20)
  circle(330,330,20)
  circle(70,330,20)
  circle(330,70,20)
  }
  
  if(frameCount >10 && frameCount <12){
  fill(mainc+200,secc+200,thc+200)
  circle(200,20,10)
  circle(200,380,10)
  circle(20,200,10)
  circle(380,200,10)
}
  
  
  if (frameCount > 20 && frameCount < 24){
  circle(200,200,75)
  }
  
  
   if (frameCount > 18 && frameCount < 22){
    fill(mainc+50,secc+50,thc+50)
    circle(200,125,50)
    circle(200,275,50)
    circle(125,200,50)
    circle(275,200,50)
  }
  if (frameCount > 16 && frameCount < 20){
  fill(mainc+150,secc+150,thc+150)
  circle(125,125,35)
  circle(275,275,35)
  circle(125,275,35)
  circle(275,125,35)
  }
  if (frameCount > 14 && frameCount < 18){
  fill(mainc+100,secc+100,thc+100)
  circle(200,70,30)
  circle(200,330,30)
  circle(70,200,30)
  circle(330,200,30)
  }
  
  if (frameCount > 12 && frameCount <16){
  fill(mainc+150,secc+150,thc+150)
  circle(70,70,20)
  circle(330,330,20)
  circle(70,330,20)
  circle(330,70,20)
  }
  
  if(frameCount >10 && frameCount <14){
  fill(mainc+200,secc+200,thc+200)
  circle(200,20,10)
  circle(200,380,10)
  circle(20,200,10)
  circle(380,200,10)
}
  
  
}

function pattern4(){
  if (frameCount > 0 && frameCount < 24){
  circle(200,200,75)
  }
  
  
   if (frameCount > 2 && frameCount < 8){
    fill(mainc+50,secc+50,thc+50)
    circle(200,125,50)
    circle(200,275,50)
    circle(125,200,50)
    circle(275,200,50)
  }
  if (frameCount > 4 && frameCount < 10){
  fill(mainc+150,secc+150,thc+150)
  circle(125,125,35)
  circle(275,275,35)
  circle(125,275,35)
  circle(275,125,35)
  }
  if (frameCount > 6 && frameCount < 22){
  fill(mainc+100,secc+100,thc+100)
  circle(200,70,30)
  circle(200,330,30)
  circle(70,200,30)
  circle(330,200,30)
  }
  
  if (frameCount > 8 && frameCount <16){
  fill(mainc+150,secc+150,thc+150)
  circle(70,70,20)
  circle(330,330,20)
  circle(70,330,20)
  circle(330,70,20)
  }
  
  if(frameCount >10 && frameCount <14){
  fill(mainc+200,secc+200,thc+200)
  circle(200,20,10)
  circle(200,380,10)
  circle(20,200,10)
  circle(380,200,10)
}
}

function pattern5(){
  if (frameCount > 0 && frameCount < 24){
  circle(200,200,75)
  }
  
  
   if (frameCount > 2 && frameCount < 8){
    fill(mainc+50,secc+50,thc+50)
    circle(200,125,50)
    circle(200,275,50)
    circle(125,200,50)
    circle(275,200,50)
  }
  if (frameCount > 4 && frameCount < 12){
  fill(mainc+150,secc+150,thc+150)
  circle(125,125,35)
  circle(275,275,35)
  circle(125,275,35)
  circle(275,125,35)
  }
  if (frameCount > 8 && frameCount < 22){
  fill(mainc+100,secc+100,thc+100)
  circle(200,70,30)
  circle(200,330,30)
  circle(70,200,30)
  circle(330,200,30)
  }
  
  if (frameCount > 12 && frameCount <20){
  fill(mainc+150,secc+150,thc+150)
  circle(70,70,20)
  circle(330,330,20)
  circle(70,330,20)
  circle(330,70,20)
  }
  
  if(frameCount >4 && frameCount <14){
  fill(mainc+200,secc+200,thc+200)
  circle(200,20,10)
  circle(200,380,10)
  circle(20,200,10)
  circle(380,200,10)
}
}
