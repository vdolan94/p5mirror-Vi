let basex = 200;


function setup() {
  createCanvas(400, 400);

}

function draw(){
  background(128+127*sin(frameCount/10));
  let animatedX = basex + 100*sin(frameCount/10);
  circle(animatedX,200,100)
}