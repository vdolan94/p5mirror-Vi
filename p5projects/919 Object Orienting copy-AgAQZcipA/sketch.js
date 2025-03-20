let faces = [];
let numofFaces = 10;

function setup() {
  createCanvas(400, 400);
  for (let i = 0; i < numofFaces; i++){
    faces.push(new Face(200,200,50,50));
  }
 
  
}

function draw() {
  background(220);
  //for (let i = 0; i < faces.length; i++){
    //faces[i].update();
    //faces[i].display();
  for (let face of faces){
    face.update();
    face.display();
  }
  
}



class Face {
  constructor(x,y,w,h){
  this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.speedx = random(1,5)*random([-1,1]);
    this.speedy = random(1,5)*random([-1,1]);
    this.color = color(random(0,255),random(0,255),random(150,255));
  }
  
  checkEdges(){
    if (this.x<this.w/2 ||  this.x > width - this.w/2){
      this.speedx = -this.speedx;
    }
   if (this.y<this.h/2 ||  this.y > height - this.h/2){
      this.speedy = -this.speedy;
    }
  }
  
  update(){
    this.checkEdges();
    this.x = this.x + this.speedx;
    this.y = this.y+ this.speedy;
  }
  
  display(){
    fill(this.color);
    ellipse(this.x,this.y,this.w,this.h);
    circle(this.x-this.w/4,this.y-this.h/10,this.w/4);
    circle(this.x+this.w/4,this.y-this.h/10,this.w/4);
  }
}