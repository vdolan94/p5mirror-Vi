let lasers;
let lightvisible = true;
let lighttimer = 0
function setup() {
  createCanvas(400, 600);
  lasers = new Laser();
}

function draw() {
  background(0);
  if (lighttimer > 7){
    lightvisible = !lightvisible
    lighttimer = 0
  }
  if (lightvisible){
    backlight()
    bluelight()
  }
  lighttimer++
  //lightshow();
  lasers.update();
  lasers.display();
  backlight()
  person();
}

function bluelight() {
  //blue lights
  fill(100);
  noStroke();
  fill(0, 50, 255, 200);
  triangle(0, 600, 400, -50, 400, 300);
  fill(80, 0, 255, 200);
  triangle(400, 600, 0, -50, 0, 300);
  
 
}

class Laser {
  constructor() {
    this.length = 600;
    this.strokeweight = 6;
    this.shortening = true;
  }
  update() {
    if (this.shortening) {
      this.length -= 2;
      if (this.length <= 100) {
        this.shortening = false;
      }
    } else {
      this.length += 2;
      if (this.length >= 600) {
        this.shortening = true;
      }
    }
    this.strokeweight = map(this.length, -100, 600, 5, 1);
  }
  display() {
    strokeWeight(this.strokeweight);
    stroke(255,0,0, 600 - this.length);
    line(200, 600, 150, 600 - this.length);
    line(200, 600, 250, 600 - this.length);
    line(150, 600, 50, 600 - this.length);
    line(250, 600, 350, 600 - this.length);
    line(100, 600, 0, 600 - this.length);
    line(300, 600, 400, 600 - this.length);
    line(50, 600, -20, 600 - this.length);
    line(350, 600, 420, 600 - this.length);

    line(0, 500, 600 - this.length, 300);
    line(0, 400, 600 - this.length, 200);
    line(0, 300, 600 - this.length, 100);

    line(400, 500, 600 - this.length, 300);
    line(400, 400, 600 - this.length, 200);
    line(400, 300, 600 - this.length, 100);
    
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

function backlight(){
  noStroke()
  fill(0,255,0,100)
  triangle(200,-100,-100,600,50,600)
  triangle(200,-100,500,600,350,600)
  triangle(200,-100,150,600,250,600)
}
