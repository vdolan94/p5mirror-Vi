function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(0);
  if (key === "z" && keyIsPressed){
    fill(200,0,0)
    circle(windowWidth/4,windowHeight/4,100)
  }
  if (key === "x" && keyIsPressed){
    fill("rgb(56,180,56)")
    circle(windowWidth/4*3,windowHeight/3,100)
  }
  if (key === "c" && keyIsPressed){
    fill("#FFEB3B")
    circle(windowWidth/4,windowHeight/4*3,100)
  }
  if (key === "v" && keyIsPressed){
    fill("#E91E63")
    circle(windowWidth/2,windowHeight/2,100)
  }
  if (key === "b" && keyIsPressed){
    fill("#673AB7")
    circle(windowWidth/4*3,windowHeight/4*3,100)
  }
}