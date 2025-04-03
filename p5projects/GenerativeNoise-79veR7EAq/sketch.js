function setup() {
  createCanvas(600,600,WEBGL);
  angleMode(DEGREES)
  noiseDetail(1);
}

function draw() {
  background(0);
  translate(0,-200,-200)
  rotateX(60)
  
  var w = 30
  var start = frameCount / 100
  var xoff = 0
  for(var x = -width/2; x <= width/2; x+=w){
    yoff = 0
    for(var y = -height/4; y <= height/4; y+=w){
      var h = map(noise(xoff + start,yoff + start),0,-1,-100,100)
      var r = map(x,-width/2,width/2,50,255)
      var g = map(y, -height/2, height/2, 200, 100)
      var b = map(h, -100,100,200,255)
      push()
      noStroke()
      fill(r,g,b)
      translate(x,y,h)
      sphere(w/3.5)
      
      fill(r-25,g-25,b-25)
      translate(0,0.1, h/2)
      sphere(w/3.5)
      
      fill(r-50,g-50,b-50)
      translate(0,0.1, h/2)
      sphere(w/3.5)
      
      fill(r-75,g-75,b-75)
      translate(0,0.1,h/2)
      sphere(w/3.5)
      
      // translate(0,100)
      // sphere(w/3.5)
      
      pop()
      
      yoff+=0.1
    }
    xoff += 0.1
  }
}