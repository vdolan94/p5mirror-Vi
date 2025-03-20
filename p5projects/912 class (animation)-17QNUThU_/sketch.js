let x = 0;
let y = 0;

function setup() {
  createCanvas(400, 400);
  frameRate(60);
}

function draw() {
  background(220);  //background draw = no trace
  rectMode(CENTER); //change mode to center as coords
  y = y + 1.5;
  x = x + 1;
  if( x > 200){
    fill(255,0,0);
  }
  if (y > 400 || y > 400){    // || = or &&= and
    x = 100;
    y = 100;
  }          
  rect(x, y,100,50);
  
}