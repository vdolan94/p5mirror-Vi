let bees = []
let numofbees = 100
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
  
  
  if (mouseButton){
  //bees
  for (let bee of bees){
    bee.update()
    bee.display()
  
  }
  }
}
function checkhive(){
  if (mouseX > 100 && mouseX < 300 && mouseY > 300 && mouseY < 400){
    check = true
  }
}

function hive (x,y,s){
  strokeWeight(s)
  line(x,y,400-x,y)
  
}

class Bees {
  constructor(x,y){
    this.x = x
    this.y = y
    this.speedx = random(1,5)
    this.speedy = random(1,5)
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
    this.x = this.x + this.speedx
    this.y = this.y + this.speedy
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

