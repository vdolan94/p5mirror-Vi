let img
function setup() {
  createCanvas(400, 400);
  img = createCapture(VIDEO)
  img.hide()
}

function draw() {
  background(220);
  translate(width,0)
  scale(-1,1)
  image(img,0,0,width,height,0,0,img.width,img.height,COVER)
}