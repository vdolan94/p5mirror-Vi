let sound;
let hasPlayed = false;

function preload(){
  sound = loadSound('Song.mp3')
}
function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  if (frameCount > 120 && hasPlayed === false){
    sound.play();
    hasPlayed = true;
  
  }
}

function mousePressed(){
  sound.stop()
  
}