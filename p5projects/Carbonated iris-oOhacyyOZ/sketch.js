function setup() {
  createCanvas(400, 400);
  angleMode(DEGREES)
}

function draw() {
  background(140,200,255);
  
  fill(220,180,50)
  stroke(220,180,50)
  ellipse(200,200,55,40)
  fill(0)
  rectMode(CENTER)
  rect(200,200,5,40)
  rect(210,200,5,36)
  rect(190,200,5,36)
  stroke(0)
  strokeWeight(1.5)
  line(220,190,230,180)
  circle(230,180,3)
  fill(0)
  stroke(0)
  
  ellipse(240,90,25,15)
  

  fill(220,180,50)
  stroke(220,180,50)
  ellipse(200,200,20,15)
  fill(0)
  rectMode(CENTER)
  rect(200,200,4,15)
  


function flower(x,y){
    noStroke()
    fill(200,60,120)
    circle(x+15,y-15,30)
    circle(x-15,y+15,30)
    circle(x+15,y+15,30)
    circle(x-15,y-15,30)
    fill(255,80,130)
    ellipse(x,y+25,30,30)
    ellipse(x,y-25,30,30)
    ellipse(x+25,y,30,30)
    ellipse(x-25,y,30,30)
    fill(220,180,70)
    circle(x,y,30)
    
    
}
  flower(mouseX,mouseY)
  
  function bee(x,y){
    fill(220,180,50)
    stroke(220,180,50)
    ellipse(x,y,20,15)
    fill(0)
    rectMode(CENTER)
    rect(x,y,4,15)
    rect(x+4,y,3,14)
    rect(x-4,y,3,14)
    stroke(0)
    strokeWeight(1)
    line(x+7,y-5,x+9,y-10)
    circle(x+9,y-10,2)
    fill(255)
    stroke(255)
    ellipse(x-5,y-8,9,6)
  }
  bee(100,100)
  
}
  
  
  
  
