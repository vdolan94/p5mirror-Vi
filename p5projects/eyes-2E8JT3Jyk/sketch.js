let eye1, eye2;

function setup() {
  createCanvas(500, 300); // Use the full window dimensions
  let centerSpacing = 200; // Horizontal spacing between the two eyes
  eye1 = new Eye(250, 150, 1, millis()); // Initialize first eye to the left
  eye2 = new Eye(windowWidth / 2 + centerSpacing, windowHeight / 2, 1, millis()); // Initialize second eye to the right
}

function draw() {
  background(0);
  eye1.updateAndDraw(); // Update and draw first eye
  // eye2.updateAndDraw(); // Update and draw second eye
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
    vertex(0, this.centerY);
    quadraticVertex(500, 150, this.centerX + 150, this.centerY);
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
