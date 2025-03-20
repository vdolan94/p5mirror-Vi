function setup() {
  createCanvas(400, 600);
}

function draw() {
  background(0);
  noStroke()
  fill("#F0BB1B")
  circle(200,200,250)
  rect(75,200,250,100)
  triangle(75,300,200,370,325,300)
  
  strokeWeight(4)
  stroke(0)
  line(125,190,160,200)
  line(275,190,240,200)
}