function setup() {
  createCanvas(400, 400);

}

function draw() {
  background(0);
  fill(0,0,100)
  square(0,0,50)
  
  fill(0,0,200)
  square(50,0,50)
  
  fill(0,0,255)
  square(100,0,50)
  
  fill(50,0,100)
  square(0,50,50)
  
  fill(100,0,100)
  square(50,50,50)
  
  fill(100,0,200)
  square(100,50,50)
  
  //light pallete
  fill(255,200,0)
  square(350,0,50)
  
  fill(0,255,0)
  square(300,0,50)
  
  fill(0,50,255)
  square(250,0,50)
  
  
}
function laserss(){
  strokeWeight(6)
  stroke(0,200,0,100)
  line(200,600,150,0)
  line(200,600,250,0)
  line(150,600,50,0)
  line(250,600,350,0)
  line(100,600,0,100)
  line(300,600,400,100)
  line(50,600,-10,300)
  line(350,600,410,300)
}