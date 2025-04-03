//https://openprocessing.org/sketch/2442794 

let radius = 250;
let my = {};

function setup() {
  // Set up the canvas with WEBGL mode
  createCanvas(720, 720, WEBGL);
  frameRate(25);
  noFill(); // Disable fill for shapes
  strokeWeight(3); // Set line thickness
  
  my.fullScreenBtn = createButton("Full Screen");
  my.fullScreenBtn.mousePressed(full_screen_action);
  my.fullScreenBtn.style("font-size:42px");
}

function draw() {
  // Set the background color to black
  background(0);

  // Calculate rotation based on mouse movement
  let rotationX = map(mouseY, 0, height, -PI, PI);
  let rotationY = map(mouseX, 0, width, -PI, PI);
  
  // Apply rotations based on mouse position
  rotateX(rotationX);
  rotateY(rotationY);

  // Draw animated shapes
  for (let i = 0; i < 20; i++) {
    // Rotate around the Z axis by 8 degrees for each shape
    rotateZ(PI / 22.5);

    // Animate the color of the lines
    let r = map(sin(frameCount * 0.05 + i), -1, 1, 50, 255);
    let g = map(sin(frameCount * 0.03 + i), -1, 1, 50, 255);
    let b = map(cos(frameCount * 0.04 + i), -1, 1, 50, 255);
    stroke(r, g, b); // Set stroke color

    // Start drawing the shape
    beginShape();
    for (let theta_deg = 0.5; theta_deg < 180; theta_deg += 0.5) {
      // Calculate phi angle based on Perlin noise
      let phi_deg = map(noise(theta_deg * 0.008 + frameCount * 0.02), 0, 1, -1080, 1080);

      // Calculate the 3D coordinates
      let x = windowWidth/4 * sin(radians(theta_deg)) * cos(radians(phi_deg));
      let y = windowWidth/4 * sin(radians(theta_deg)) * sin(radians(phi_deg));
      let z = windowWidth/4 * cos(radians(theta_deg));

      // Add the vertex to the shape
      vertex(x, y, z);
    }
    endShape();
  }
}

function full_screen_action() {
  my.fullScreenBtn.remove();
  fullscreen(1);
  let delay = 3000;
  setTimeout(ui_present_window, delay);
}

function ui_present_window() {
  resizeCanvas(windowWidth, windowHeight);
  // init_dim();
}