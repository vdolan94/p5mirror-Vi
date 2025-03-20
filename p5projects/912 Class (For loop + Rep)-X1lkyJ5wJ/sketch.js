function setup() {
  createCanvas(400, 400);
  noStroke()
}

function draw() {
  background(0);
  for (let i = -25; i < 400; i += 1){ //i++ = increase by 1; adds circles vs moving circles in circle() 
    let modifiedI = map(i,0,30,0,TWO_PI*1)+frameCount/150; 
    fill(map(sin(modifiedI),-1,1,0,255),
         map(sin(modifiedI/2),-1,1,0,255),
         map(sin(modifiedI/3),-1,1,0,255));
    circle(i, 200+100*sin(modifiedI), 15);
  }
}
//mouseX/50