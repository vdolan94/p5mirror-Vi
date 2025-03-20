let cols = 10;
let rows = 10;
function setup() {
  createCanvas(400, 400);
}

function draw() {
  let tilewidth = width/cols;
  let tileheight = height/rows;
  background(220);
  for (let c = 0; c < cols; c++){
    for(let r = 0; r< rows; r++){
      //fill(random(255),random(255),random(255));
    rect(c*tilewidth,r*tileheight,tilewidth,tileheight);
  }}
}