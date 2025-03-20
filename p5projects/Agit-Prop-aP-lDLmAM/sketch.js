let lastColorChangeFrame = 0;
let strokeColor = 255;
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  noCursor()
  background(0);
  strokeWeight(1);
  stroke(strokeColor)
  if (mouseIsPressed){
    colored()
  } else {
    White()
  }
  
}

function colored (){
  strokeWeight(2)
  for (let y = 20; y < height; y += 20) {
    strokeColor = color(random(200), random(200), random(200));
    stroke(strokeColor)
    line(0, y, width, y);
  }
  for (let x = 20; x < width; x += 20) {
    strokeColor = color(random(200), random(200), random(200));
    stroke(strokeColor)
    line(x, 0, x, height);
  }
}
function White(){
  stroke(255)
  strokeWeight(1)
  for (let y = 20; y < height; y += 20) {
    line(0, y, width, y);
  }
  for (let x = 20; x < width; x += 20) {
    line(x, 0, x, height);
  }
}