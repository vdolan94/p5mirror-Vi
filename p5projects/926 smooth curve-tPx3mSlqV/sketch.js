function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  fill(100,240,255)
  strokeWeight(5)
  beginShape();
  curveVertex(100,100) 
  curveVertex(200,100); //command d highlights common term
  curveVertex(300,300);
  curveVertex(100,300)
  curveVertex(100,100) //repeat points to close shape
  curveVertex(200,100)
  curveVertex(300,300)
  endShape(); //dont use close when repeated vert.
}