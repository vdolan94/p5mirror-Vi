//Eyes
let eye1, eye2;

//pests
let pests = [];
var pst = 0
const colorThemes = {
  red: {
    fill: "#FF6347",  // Tomato red
    line: "#3E0E0E"   // Firebrick red
  },
  green: {
    fill: "#90EE90",  // Light green
    line: "#0E3D0E"   // Office green
  },
  blue: {
    fill: "#ADD8E6",  // Light blue
    line: "#121249"   // Blue
  }
};

function setup() {
  createCanvas(windowWidth, windowHeight); // Use the full window dimensions
  let centerSpacing = 200; // Horizontal spacing between the two eyes
  eye1 = new Eye(windowWidth / 2 - centerSpacing, windowHeight / 2, 1, millis()); // Initialize first eye to the left
  eye2 = new Eye(windowWidth / 2 + centerSpacing, windowHeight / 2, 1, millis()); // Initialize second eye to the right
  
  //pests
  const themeKeys = Object.keys(colorThemes);
  const randomThemeKey = random(themeKeys);
  colorTheme = colorThemes[randomThemeKey];
  pst = random (4,15)
  for (let i = 0; i < width / pst; i++) {
    pests.push(new Pest());
    pests.push(new Pest());
    // pests.push(new Pest());
  }
  
}

function draw() {
  background(0);
  for (let i = 0; i < pests.length; i++) {
    pests[i].createPest();
    pests[i].movePest();
    pests[i].joinPests(pests.slice(i));
  }
  eye1.updateAndDraw(); // Update and draw first eye
  eye2.updateAndDraw(); // Update and draw second eye
  
}

class Eye {
  constructor(centerX, centerY, startDirection, startTime) {
    this.centerX = centerX;
    this.centerY = centerY;
    this.controlY = centerY - 150; // Start at a position above center
    this.direction = startDirection;
    this.lastChangeTime = startTime;
    this.isPaused = false;
    this.movePhase = 'down';
    this.speed = 2;
  }

  updateAndDraw() {
    // Draw the static curve
    strokeWeight(2);
    stroke(255);
    noFill();
    beginShape();
    vertex(this.centerX - 150, this.centerY);
    quadraticVertex(this.centerX, this.centerY + 100, this.centerX + 150, this.centerY);
    endShape();

    // Draw the animated curve
    beginShape();
    vertex(this.centerX - 150, this.centerY);
    quadraticVertex(this.centerX, this.controlY, this.centerX + 150, this.centerY);
    endShape();

    // Animation control logic
    if (!this.isPaused) {
      this.controlY += this.speed * this.direction;
      if ((this.movePhase === 'down' && this.controlY >= this.centerY + 100) || (this.movePhase === 'up' && this.controlY <= this.centerY - 100)) {
        if (this.movePhase === 'down') {
          this.movePhase = 'up';
          this.direction = -1;
        } else {
          this.movePhase = 'down';
          this.direction = 1;
          this.isPaused = true;
          this.lastChangeTime = millis();
        }
      }
    } else {
      if (millis() - this.lastChangeTime > 5000) {
        this.isPaused = false;
        this.lastChangeTime = millis(); // Reset the last change time
      }
    }
  }
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
  // Re-center the eyes when the window is resized
  let centerSpacing = 200;
  eye1.centerX = windowWidth / 2 - centerSpacing;
  eye2.centerX = windowWidth / 2 + centerSpacing;
  eye1.centerY = eye2.centerY = windowHeight / 2;
  eye1.controlY = eye2.controlY = windowHeight / 2 - 150;
}
class Pest {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(0,width);
    this.y = random(0,height);
    this.r = random(1, 6);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
    this.randoColor = [
      // color("#02665D"),
      // color("#009688"),
      // color("rgb(171,224,171)"),
      color("#4C4C4F"),
      color("#575759"),
      color("#B5B5B9"),
    ];
    this.f = random(this.randoColor);
    
  }

  // creation of a particle.
  createPest() {
    noStroke();

    fill(this.f);
    circle(this.x, this.y, this.r);
  }

  // setting the particle in motion.
  movePest() {
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < height / 2 || this.y > height) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
  joinPests(pests) {
    pests.forEach((element) => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        //this.lf = random(1,3)
        //stroke("#C2E4BA23");
        stroke(colorTheme.line);
        line(this.x, this.y, element.x, element.y);
      }
      
    });
  }
}
