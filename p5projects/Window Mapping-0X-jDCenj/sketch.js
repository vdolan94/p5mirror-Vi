
function setup() {
  createCanvas(600, 600);
// }
// function windowdesign() {
//   for (let i = 0; i < 200; i++) {
//     let posX = random(250,350);
//     let posY = random(225,375);
//     noFill();
//     stroke("#F44336");
//     rect(posX, posY, 30, 30);
//     stroke("#E91E63");
//     rect(posX, posY, 20, 20);
//   }
}
function draw() {
  let x = frameCount
  let y = 10 * sin(x * .04) + 10;
  
  background(0);
  rectMode(CENTER)
  
  
  stroke(0)
  fill(100)
  //rect(width/2,height/2,150,200)
  
  noFill()
  stroke(255)
  
  stroke("rgb(0,255,31)")
  rect(width/2,height/2,200+y,250+y)
  
  
  stroke("rgb(0,255,149)")
  rect(width/2,height/2,225+y,275+y)
  
  stroke("rgb(0,242,255)")
  rect(width/2,height/2,250+y,300+y)
  
  stroke("rgb(0,199,255)")
  rect(width/2,height/2,275+y,325+y)
  
  stroke("rgb(0,124,255)")
  rect(width/2,height/2,300+y,350+y)
  
  stroke("rgb(81,0,255)")
  rect(width/2,height/2,325+y,375+y)
  
  stroke("rgb(167,0,255)")
  rect(width/2,height/2,350+y,400+y)
  
  stroke("rgb(221,0,255)")
  rect(width/2,height/2,375+y,425+y)
  //windowdesign()
}

