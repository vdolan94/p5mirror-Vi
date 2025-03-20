let points= []
var mult = 0.007
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(0)
  angleMode(DEGREES)
  noiseDetail(1)
  
  var density = 10
  var space = width/density
  for(let x= 0; x < width; x+= space){
      for (let y = 0; y < height; y += space){
        var p = createVector(x + random(-10,10),y)
        points.push(p)
      }
      }
  shuffle(points, true)
  r1 = random(255)
  r2 = random(255)
  g1 = random(255)
  g2 = random(255)
  b1 = random(255)
  b2 = random(255)
}

function draw() {
  noStroke()
  fill(255)
  if (frameCount <= points.length){
    var max = frameCount
  } else {
     var max = points.length
  }
  
  for (let i =0; i< points.length; i++){
    
    var r = map(points[i].x , 0, width, r1, r2)
    var g = map(points[i].y , 0, width, g1, g2)
    var b = map(points[i].x , 0, width, b1, b2)
    
    fill(r,g,b)
    
    var angle = map(noise(points[i].x * mult,points[i].y* mult), 0, 1, 0, 720)
    
    points[i].add(createVector(cos(angle), sin(angle)))
//     if(dist(width/2, height/2, points[i].x, points[i].y)<200){
      
    
//     ellipse(points[i].x , points[i].y, 1)
//     }
     ellipse(points[i].x , points[i].y, 1)
  }
}