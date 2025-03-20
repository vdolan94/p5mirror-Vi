let img;

function preload(){
  img = loadImage('assets/scap.jpg');
}
function setup() {
  createCanvas(400, 400);
  print(img.width)
  print(img.height)
  print(pixelDensity(1))
}

function draw() {
  background(220);
  image(img,0,0,width,height,0,0,img.width,img.height,CONTAIN)
  loadPixels();
  circle(mouseX,mouseY,50)
  let startIndex = (mouseY * width + mouseX) * 4
  let r = pixels[startIndex]
  let g = pixels[startIndex+1]
  let b = pixels[startIndex+2]
  let a = pixels[startIndex+3]
  fill(r,g,b,a)
  //noLoop();
  
}