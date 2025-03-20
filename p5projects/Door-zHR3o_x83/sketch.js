let x = 0; 
let y = 0
// Width of the cut-off portion
let direction = 1;    // Direction of change, 1 for increasing, -1 for decreasing
let speed = 4;        // Speed of the animation, can be adjusted
let lastChangeTime = 0;  // Last time the direction changed
let isPaused = false;    // Is the animation currently paused

function setup() {
  createCanvas(400, 600);
  lastChangeTime = millis();  // Initialize lastChangeTime
}

function draw() {
  background(220);  // Set background color to light gray
  fill(0);          // Set fill color to black

  // Draw a quad that moves its right vertices horizontally across the canvas
  quad(0, 0, 0, 600, 400 - x, 600 - y, 400 - x, 0 + y);

  if (!isPaused) {
    // Update the width of the cut-off portion
    x += direction * speed;
    y += direction * speed
  }

  // Check if x reaches the boundary and handle pause at 400 only
  if (x >= 400 && !isPaused && y>100) {
    direction *= -1;  // Change direction
    isPaused = true;  // Start pause
    lastChangeTime = millis();  // Reset the timer
  } else if (x <= 0) {
    direction = 1;  // Ensure direction is set to increase when at 0
  }

  // Handle the pause logic
  if (isPaused && millis() - lastChangeTime > 5000) {  // 5000 milliseconds = 5 seconds
    isPaused = false;  // Resume animation after 5 seconds
  }

  // Ensure x stays within bounds
  x = max(0, min(x, 400));
  y = max(0,min(x,400))
}
