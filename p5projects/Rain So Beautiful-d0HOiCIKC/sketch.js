let rain = [];
let numofRain = 100;
let currentlighting;
let switchlighting;

function setup() {
  createCanvas(400, 600);
  for (let i = 0; i < numofRain; i++) {
    rain.push(new Rain(-20, 0, 20));
  }
  
  switchlighting = millis() + random(1000,2000)
  
}

function draw() {
  background(0);
//   if (currentlighting){
//     currentlighting()
//   }
  
//   if (millis() > switchlighting){
//     let lightings = random([lighting1, lighting2])
//     currentlighting = lightings
//     switchlighting = millis() + random(1000,2000) 
//   }
  
  for (let drop of rain) {
    drop.update();
    drop.display();
  }
  person()
}

class Rain {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z; 
    this.coloroption = [color(0,0,100),color(0,0,200),color(0,0,255),color(50,0,100),color(100,0,100),color(100,0,200)]
    this.f = random(this.coloroption)
    this.speedy = random(1, 5);
  }

  checkEdges() {
    if (this.y > height) {
      this.y = 0;
      this.x = random(20, 380);
      this.z = random(5, 15);
    }
  }

  update() {
    this.checkEdges();
    this.y = this.y + this.speedy;
  }
  display() {
    fill(this.f)
    noStroke();
    circle(this.x, this.y, this.z);
    triangle(
      this.x + this.z / 2,this.y,this.x - this.z / 2,this.y,this.x,this.y - this.z * 1.25);
  }
}

function person(){
  fill(30)
  stroke(40)
  strokeWeight(12)
  circle(200,400,150)
  beginShape()
  curveVertex(300,500)
  curveVertex(100,500)
  curveVertex(100,650)
  curveVertex(300,650)
  curveVertex(300,500)
  curveVertex(100,500)
  curveVertex(100,650)
  endShape()
  strokeWeight(4)
  beginShape()
  curveVertex(290,370)
  curveVertex(290,425)
  curveVertex(305,410)
  curveVertex(305,380)
  curveVertex(290,370)
  curveVertex(290,425)
  curveVertex(305,410)
  endShape()
  beginShape()
  curveVertex(110,370)
  curveVertex(110,425)
  curveVertex(95,410)
  curveVertex(95,380)
  curveVertex(110,370)
  curveVertex(110,425)
  curveVertex(95,410)
  endShape()
  noFill()
  stroke(40)
  strokeWeight(7)
  beginShape()
  curve(105,900,105,370,295,370,295,900)
}

function lighting1(){
  strokeWeight(2)
  stroke(40)
  line(40,0,25,30)
  line(25,30,100,70)
  line(100,70,160,140)
  line(160,140,190,280)
  
  line(45,40,40,60)
  line(40,60,50,80)
  line(50,80,45,150)
  line(49,100,60,130)
  
  line(115,87,130,150)
  line(130,150,120,190)
  line(123,120,140,140)
  line(120,190,130,200)
  
  line(173,200,200,230)
  line(200,230,195,245)
  line(195,245,200,260)
  
  strokeWeight(3)
  stroke(30,0,250,50)
  line(40,0,25,30)
  line(25,30,100,70)
  line(100,70,160,140)
  line(160,140,190,280)
  
  line(45,40,40,60)
  line(40,60,50,80)
  line(50,80,45,150)
  line(49,100,60,130)
  
  line(115,87,130,150)
  line(130,150,120,190)
  line(123,120,140,140)
  line(120,190,130,200)
  
  line(173,200,200,230)
  line(200,230,195,245)
  line(195,245,200,260)
}

function lighting2(){
  stroke(40)
  strokeWeight(1.5)
  line(300,0,280,50)
  line(280,50,300,100)
  line(300,100,240,200)
  line(240,200,260,300)
  line(260,300,240,350)
  
  line(288,70,270,100)
  line(270,100,255,110)
  line(255,110,260,125)
  line(260,125,250,140)
  
  line(282,130,270,170)
  line(270,170,275,180)
  line(275,180,270,200)
  line(240,200,230,250)
  line(230,250,235,260)
  line(235,260,225,280)
  
  stroke(200,0,250,40)
  strokeWeight(3)
  line(300,0,280,50)
  line(280,50,300,100)
  line(300,100,240,200)
  line(240,200,260,300)
  line(260,300,240,350)
  
  line(288,70,270,100)
  line(270,100,255,110)
  line(255,110,260,125)
  line(260,125,250,140)
  
  line(282,130,270,170)
  line(270,170,275,180)
  line(275,180,270,200)
  line(240,200,230,250)
  line(230,250,235,260)
  line(235,260,225,280)
}