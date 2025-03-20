let circles = [];
let numCircles = 0;

function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(0);

  
  if (frameCount % 10 === 0 && numCircles < 500) {
    circles.push({
      x: random(width),
      y: random(height),
      speedX: random(-1, 1), 
      speedY: random(-1, 1)  
    });
    numCircles++;
  }

  
  fill(255);
  for (let i = 0; i < circles.length; i++) {
    let circle = circles[i];
    circle.x += circle.speedX; 
    circle.y += circle.speedY; 
    
   
    if (circle.x < 0 || circle.x > width || circle.y < 0 || circle.y > height) {
      circle.x = random(width);
      circle.y = random(height);
    }
    
    
    ellipse(circle.x, circle.y, random(1,7));
  }
}
