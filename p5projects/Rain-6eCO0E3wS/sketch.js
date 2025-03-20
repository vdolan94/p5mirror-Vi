let yy = 0
let xx = 0
function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0);
  yy+=1
  rain(100+xx,0+yy,20)
  rain(200+xx,0+yy,10)
  rain(110+xx,0+yy,10)
  
  
}
function rain(x,y,z){
  fill('blue')
  noStroke()
  circle(x,y,z)
  triangle(x+z/2,y,x-z/2,y,x,y-z*1.25)
  if (y > 600){
    yy = 0
    xx = random(10,300)
    y = random(-15,0)
  }
}
  