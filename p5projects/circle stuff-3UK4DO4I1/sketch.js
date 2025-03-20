let circlelist = []
let circletimer= 0
function setup() {
  createCanvas(400, 600);
  
}

function draw() {
  background(0);
  if (random(1) <0.5){
    let circle = new circles()
    circlelist.push(circle)
  }
  for (let circle of circlelist){
    circle.display()
    circle.update()
  
  if (circle.opacity <= 0){
    circlelist.splice(circle,1)
  }
}
}


class circles{
  constructor(){
    this.x = random(0,400)
    this.y = random (0,600)
    this.s = random (30,200)
    let shine1 = random(1000)
    this.opacity = 0
    this.fade = 1
    this.fadespeed = 2
    this.coloroption =     [color(250,200,0),color(250,150,0),color(250,100,50),color(200,70,50),color(250,80,0),color(190,40,0)]
    this.f = random(this.coloroption)
  }
  
  display(){
  noStroke()
  fill(this.f)
  this.f.setAlpha(this.opacity)
  circle(this.x,this.y,this.s)
  }
  
  update(){
    this.opacity += this.fade * this.fadespeed
    if(this.opacity >= 255){
      this.opacity = 255
      this.fade = -1
    }
    else if (this.opacity<= 0){
      this.opacity = 0
      this.fade = 1
    }
  }
}
function person() {
  fill(30);
  stroke(40);
  strokeWeight(12);
  circle(200, 400, 150);
  beginShape();
  curveVertex(300, 500);
  curveVertex(100, 500);
  curveVertex(100, 650);
  curveVertex(300, 650);
  curveVertex(300, 500);
  curveVertex(100, 500);
  curveVertex(100, 650);
  endShape();
  strokeWeight(4);
  beginShape();
  curveVertex(290, 370);
  curveVertex(290, 425);
  curveVertex(305, 410);
  curveVertex(305, 380);
  curveVertex(290, 370);
  curveVertex(290, 425);
  curveVertex(305, 410);
  endShape();
  beginShape();
  curveVertex(110, 370);
  curveVertex(110, 425);
  curveVertex(95, 410);
  curveVertex(95, 380);
  curveVertex(110, 370);
  curveVertex(110, 425);
  curveVertex(95, 410);
  endShape();
  noFill();
  stroke(40);
  strokeWeight(7);
  beginShape();
  curve(105, 900, 105, 370, 295, 370, 295, 900);
}