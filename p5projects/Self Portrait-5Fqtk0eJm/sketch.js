let Face = []
function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < 10; i ++ ){
    Face[i] = new face()
  }
}

function draw() {
  background(0);
  noStroke()
  for (let i = 0; i < Face.length; i++){
    Face[i].show()
  }
  // fill(250)
  // fill(0)
  // rectMode(CENTER)
  // rect(200,210,70,90)
  // ellipse(200,170,70,40)
  // fill(255)
  // ellipse(200,200,50,60)
  // fill(0)
  // ellipse(190,195,13,10)
  // ellipse(210,195,13,10)
  
  
 
}

class face{
  constructor(x,y,c){
    this.x = random(width)
    this.y = random(height)
    
    this.color = color(random(0,255),random(0,255),random(150,255))
    this.difc = 
color(random(0,255),random(0,255),random(150,255))
    this.n = this.color -30
  }
  show() {
    rectMode(CENTER)
    noStroke()
    fill(this.difc)
    rect(this.x,this.y+10,70,90)
    ellipse(this.x,this.y-30,70,40)
    fill(this.color)
    ellipse(this.x,this.y,50,60)
    rect(this.x,this.y+35,10,20)
    fill(0)
    ellipse(this.x-10,this.y-5,13,10)
    ellipse(this.x+10,this.y-5,13,10)
    
    //fill(this.n)
    stroke(2)
    line(this.x,this.y-3,this.x+1,this.y+5)
    line(this.x-5,this.y+12,this.x+5,this.y+10)
    
  }
  
}
  
