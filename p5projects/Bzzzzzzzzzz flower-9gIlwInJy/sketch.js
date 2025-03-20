let bees = []
let numofbees = 70
let check = false
function setup() {
  createCanvas(400, 600);
  for (let i = 0; i < numofbees; i++){
    bees.push(new Bees(200,300))
  }
  
}

function draw() {
  background(100,190,255);
  //Beehive
  stroke(200,150,50)
  hive(100,300,50)
  hive(110,260,40)
  hive(110,340,40)
  hive(120,230,30)
  hive(120,370,30)
  hive(130,210,20)
  hive(130,390,20)
  ellipse(200,200,100,20)
  ellipse(200,400,100,20)
  
  stroke(150,100,75)
  hive(100,275,5)
  hive(100,325,5)
  hive(110,240,4)
  hive(110,360,4)
  hive(120,215,3)
  hive(120,385,3)
  hive(140,200,2)
  hive(140,400,2)
  fill(0)
  ellipse(200,300,50,70)
  rectMode(CENTER)
  noStroke()
  fill(50,20,5)
  rect(200,150,10,70)
  quad(0,50,0,100,400,180,400,100)
  quad(160,0,190,0,350,100,260,90)
  quad(160,130,190,90,0,130,0,150)
  
  //flower
  flower(mouseX,mouseY)
  
  
  if (mouseButton){
  //bees
  for (let bee of bees){
    bee.followcursor()
    bee.update()
    bee.display()
  
  }
  }
}


function hive (x,y,s){
  strokeWeight(s)
  line(x,y,400-x,y)
  
}

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

class Bees {
  constructor(x,y){
    this.x = x
    this.y = y
    this.speedx = random(1,7)
    this.speedy = random(1,7)
  }
  
  followcursor(){
    let spacex = mouseX - this.x
    let spacey = mouseY - this.y
    
    let distance = dist(this.x,this.y,mouseX,mouseY)
    spacex /= distance
    spacey /= distance
    
    this.x += spacex *this.speedx
    this.y += spacey * this.speedy
  }
  
  checkEdges(){
    if ( this.x > width || this.x < 0){
      this.speedx = -this.speedx;
    }
   if (this.y > height || this.y < 0){
      this.speedy = -this.speedy;
   }
  }
  
  update(){
    this.checkEdges()
  }
  display(){
    fill(220,180,50)
    stroke(220,180,50)
    ellipse(this.x,this.y,20,15)
    fill(0)
    rectMode(CENTER)
    rect(this.x,this.y,4,15)
    rect(this.x+4,this.y,3,14)
    rect(this.x-4,this.y,3,14)
    stroke(0)
    strokeWeight(1)
    line(this.x+7,this.y-5,this.x+9,this.y-10)
    circle(this.x+9,this.y-10,2)
    fill(255)
    stroke(255)
    ellipse(this.x-5,this.y-8,9,6)
  }
}

