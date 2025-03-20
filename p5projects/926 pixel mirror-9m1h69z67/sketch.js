let img;
let rows = 40;
let cols = 40;
let tilewidth;
let tileheight;

function setup() {
  createCanvas(400, 400);
  img = createCapture(VIDEO)
  img.hide()
  print(pixelDensity(1));
  tilewidth = width / cols;
  tileheight = height / rows;
}

function draw() {
  background(220); //can put img after bkgrd but also include load pix
  
  image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
  loadPixels();

  circle(mouseX, mouseY, 50);
  translate(width,0)
  scale(-1,1)

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      let x = col * tilewidth;
      let y = row * tileheight;
      let startIndex = (y * width + x) * 4;
      let r = pixels[startIndex];
      let g = pixels[startIndex + 1];
      let b = pixels[startIndex + 2];
      let a = pixels[startIndex + 3];
      fill(r, g, b, a);
      noStroke()
      
      rect(x, y, tilewidth, tileheight);
    }
  }
}
