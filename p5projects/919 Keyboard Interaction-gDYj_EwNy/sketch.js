function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (keyIsPressed){ //keyIsPressed = any key
    circle(200,200,15);
  }
  if(keyIsDown(32)){ //IsDown = specific key w/ keycode
    square(200,200,100);
  }
}
function keyPressed(){
  if (key == 'w'){
    print("Key is pressed");
  } else if (key == 'a'); {
    circle(200,200,15);
  }
}