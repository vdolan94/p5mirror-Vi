let img;
let rows = 80;
let cols = 80;
let tilewidth;
let tileheight;
function preload() {
  img = loadImage("assets/scap.jpg");
}
function setup() {
  createCanvas(400, 400);
  print(img.width);
  print(img.height);
  print(pixelDensity(1));
  tilewidth = width / cols;
  tileheight = height / rows;
}

function draw() {
  background(220); //can put img after bkgrd but also include load pix
  image(img, 0, 0, width, height, 0, 0, img.width, img.height, COVER);
  loadPixels();

  circle(mouseX, mouseY, 50);

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
