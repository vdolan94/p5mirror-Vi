//recommended soundtrack- "bad girl" by Devendra Banhart

rain=[]
colors=["#75b9be","#696d7d","#d72638","#f49d37","#140f2d"]

function setup() {
  createCanvas(800, 600);
	background('#090909');
	//blendMode(HARD_LIGHT)
}

function draw() {
	backgroundColor=color('#131212')
	backgroundColor.setAlpha(10)
	background(backgroundColor)
  
  if(frameCount%2==0){
    rain.push(new drip(random(width), random(-100, height), random(5, 30)))
  }

  for(let i=rain.length-1; i>=0; i--){
    rain[i].move();
    rain[i].show();
  }
}

class pointer{
  constructor(rad, acc, finalSize){
    this.dist=1
    this.rad=rad
    this.speed=0
    this.acc=acc
    this.pos=createVector(0, 0)
    this.finalSize=finalSize
    this.downSpeed=createVector(0, 0.01)
    this.downAcc=createVector(0, 0.05+this.acc/500)
  }
  move(){
    if(this.dist<=this.finalSize){
    this.speed+=this.acc
    this.dist+=this.speed
    this.pos=createVector(cos(this.rad)*this.dist, sin(this.rad)*this.dist)
    } else{
      this.downSpeed.add(this.downAcc);
      this.pos.add(this.downSpeed);  
    }
  }
}


class drip{
  constructor(x, y, extent){
    this.splat=[]
		this.color= color(random(colors))
    this.x=x
    this.y=y
		this.death=500
    this.extent=extent
    this.noiseStart=random(1000)
  for(let i=this.noiseStart;i<this.noiseStart+TWO_PI; i+=0.1){
    let acc= (noise(i))
    this.splat.push(new pointer(i, acc, extent))
  }  
  }
  
 move(){
   for(let n of this.splat){
     n.move()
   }
	 this.death-=1
   if(this.death<1){
     let index = rain.indexOf(this);
      rain.splice(index, 1);
   }
 } 
 show(){
 noStroke()
	 this.color.setAlpha(80)
 fill(this.color)
   push()
  translate(this.x, this.y)
  beginShape()
  for(let i=0; i<this.splat.length; i++){
    curveVertex(this.splat[i].pos.x, this.splat[i].pos.y)
  }
  endShape(CLOSE)
pop() 
 }
  
}

function mousePressed() {
    let fs = fullscreen();
    fullscreen(!fs);
}