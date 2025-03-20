let bgcolor;
let topcolor, bottomcolor, topcolor2, bottomcolor2;
let c = 1500;
let img;
let rotationangle = 0;
let moveShape,
  moveShape1,
  moveShape2,
  moveShape3,
  moveShape4,
  moveShape5,
  moveShape6;
let glowPink, glowOrange;
let font;
let particles = [];
let pests = [];

//Vi Coding
const serial = new p5.WebSerial();
let portButton;
let inData;                  
let redValue = 0; 
let mappedpot = 0
let smth;
let smoothIndex = 30; // has to be an integer
let inDataArray = new Array(smoothIndex).fill(0);
let y;

class Particle {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(0, width);
    this.y = random(0, height / 2);
    this.r = random(1, 8);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
  }

  // creation of a particle.
  createParticle() {
    noStroke();
    fill("rgba(255,255,255,0.5)");
    circle(this.x, this.y, this.r);
  }

  // setting the particle in motion.
  moveParticle() {
    if (this.x < 0 || this.x > width) this.xSpeed *= -1;
    if (this.y < 0 || this.y > height / 2) this.ySpeed *= -1;
    this.x += this.xSpeed;
    this.y += this.ySpeed;
  }

  // this function creates the connections(lines)
  // between particles which are less than a certain distance apart
  joinParticles(particles) {
    particles.forEach((element) => {
      let dis = dist(this.x, this.y, element.x, element.y);
      if (dis < 85) {
        stroke("rgba(255,255,255,0.04)");
      }
    });
  }
}

class Pest {
  // setting the co-ordinates, radius and the
  // speed of a particle in both the co-ordinates axes.
  constructor() {
    this.x = random(0, width);
    this.y = random(height / 2, height);
    this.r = random(1, 8);
    this.xSpeed = random(-2, 2);
    this.ySpeed = random(-1, 1.5);
  }

  // creation of a particle.
  createPest() {
    noStroke();
    fill("rgba(0,0,0,0.5)");
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
        stroke("rgba(255,255,255,0.04)");
      }
    });
  }
}

function preload() {
  img = loadImage("person.png");
   font = loadFont("Cartesian-0W5Oo.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight + c);
  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle());
  }

  for (let i = 0; i < width / 10; i++) {
    pests.push(new Pest());
  }
  textFont(font);
  
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
  serial.getPorts();
  serial.on("noport", makePortButton);
  serial.on("portavailable", openPort);
  serial.on("requesterror", portError);
  serial.on("data", serialEvent);
  serial.on("close", makePortButton);
  
}

function draw() {
  inDataArray.push(redValue);
  inDataArray.shift();
  let inDataTotal = 0;
  for (let i = 0; i < inDataArray.length; i++) {
    inDataTotal += inDataArray[i];
  }
   y = inDataTotal/smoothIndex;
  mappedpot = map(y,0,255,-1400,0)
  translate(0,mappedpot)// 0 - -1500
  
  bgcolor = color("rgb(42,21,21)");
  //   let gradient = drawingContext.createLinearGradient(width/2-200,height/2-200,width/2-200,height/2+200);
  //   gradient.addColorStop(0.5,"black")
  //   gradient.addColorStop(1,"#F44336")

  //   drawingContext.fillStyle = gradient;
  //   line(0,windowWidth,0,windowHeight)
  background(bgcolor);
  gradient();
  noStroke();
  platform();

  //variables to move shapes
  moveShape = 2 * sin(frameCount / 1.5);
  moveShape2 = 10 * sin(frameCount / 30);
  moveShape3 = 18 * cos(frameCount / 30);
  moveShape4 = 15 * sin(frameCount / 30);
  moveShape5 = 30 * cos(frameCount / 30);
  moveShape6 = 6 * cos(frameCount / 30);

  //glow colors
  glowPink = color("#E86976");
  glowOrange = color("#F44336");

  push();
  shapes();
  pop();
  push()
  rotate(PI/13)
  translate(310,-100)
  scale(0.5)
  shape2()
  pop()
  
  for (let i = 0; i < particles.length; i++) {
    particles[i].createParticle();
    particles[i].moveParticle();
    particles[i].joinParticles(particles.slice(i));
  }
  for (let i = 0; i < pests.length; i++) {
    pests[i].createPest();
    pests[i].movePest();
    pests[i].joinPests(pests.slice(i));
  }
  fill(255,0,0)
  text(frameRate(),300,200)
}

function platform() {
  push();
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color("white");
  fill("rgb(0,0,0)");
  rect(windowWidth / 2 - 100, (windowHeight + c) / 2 - 50, 200, c - 450);
  pop();
  fill("#ABF5FE");
  rect(0, (windowHeight + c) / 2 - 100, windowWidth, 100);

  fill("rgb(0,0,0)");
  ellipse(windowWidth / 2, (windowHeight + c) / 2 - 50, 300, 50);

  push();
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color("white");
  fill("white");
  rect(windowWidth / 2 - 100, 0, 200, c - 450);
  ellipse(windowWidth / 2, windowHeight / 2 + 700, 200, 40);
  pop();

  fill("#95D4DB");
  rect(0, (windowHeight + c) / 2, windowWidth, 20);
  push();
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color("#A69696");
  image(img, 300, -mappedpot+300, 150, 150);
  pop();
}

function gradient() {
  topcolor = color("#000000");
  bottomcolor = color("#3F51B5");
  for (let y = 0; y < height / 2; y++) {
    n = map(y, 0, height / 2, 0, 1);

    let newcolor = lerpColor(topcolor, bottomcolor, n);
    stroke(newcolor);
    line(0, y, width, y);
  }

  topcolor2 = color("#000000");
  bottomcolor2 = color("#3F51B5");
  for (let y = height / 2; y < height; y++) {
    n = map(y, 0, height, 0, 1);

    let newcolor2 = lerpColor(topcolor2, bottomcolor2, n);
    stroke(newcolor2);
    line(0, y, width, y);
  }
}

function windowResized() {
  // print("window is resized!");
  resizeCanvas(windowWidth, windowHeight);
}

function shapes() {
  scale(0.5);
  //bottom yellow
  shape5();
  //bottom right red
  shape6();
  //right yellow
  shape7();
  //top left yellow
  shape2();
  //bottom left red
  shape1();
  //top right red
  shape3();
  //center red
  shape4();
}
function shape1() {
  let bottomLeft1 = color("#ED0537");
  let bottomLeft2 = color("#C6001F");
  let bottomLeft3 = color("#F10023");
  if (key === "z" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowRed();
      fill(glowOrange);
      beginShape();
      vertex(moveShape - 40, 220);
      vertex(moveShape - 40, 290);
      vertex(moveShape + 100, 310);
      vertex(moveShape + 140, 245);
      endShape(CLOSE);

      fill(glowOrange);
      beginShape();
      vertex(moveShape - 40, 290);
      vertex(moveShape - 40, 530);
      vertex(moveShape + 90, 550);
      vertex(moveShape + 100, 310);
      endShape(CLOSE);

      fill(glowOrange);
      beginShape();
      vertex(moveShape + 140, 245);
      vertex(moveShape + 100, 310);
      vertex(moveShape + 90, 550);
      vertex(moveShape + 125, 450);
      endShape(CLOSE);

      highlights2(60, 40 + moveShape, 260);
    }
  } else {
    hibernateRed();
    fill(bottomLeft1);
    beginShape();
    vertex(moveShape2 + 0 - 40, moveShape2 + 220);
    vertex(moveShape2 + 0 - 40, moveShape2 + 290);
    vertex(moveShape2 + 100, moveShape2 + 310);
    vertex(moveShape2 + 140, moveShape2 + 245);
    endShape(CLOSE);

    fill(bottomLeft2);
    beginShape();
    vertex(moveShape2 + 0 - 40, moveShape2 + 290);
    vertex(moveShape2 + 0 - 40, moveShape2 + 530);
    vertex(moveShape2 + 90, moveShape2 + 550);
    vertex(moveShape2 + 100, moveShape2 + 310);
    endShape(CLOSE);

    fill(bottomLeft3);
    beginShape();
    vertex(moveShape2 + 140, moveShape2 + 245);
    vertex(moveShape2 + 100, moveShape2 + 310);
    vertex(moveShape2 + 90, moveShape2 + 550);
    vertex(moveShape2 + 125, moveShape2 + 450);
    endShape(CLOSE);

    highlights2(60, moveShape2 + 40, moveShape2 + 260);
    hasPlayed = false;
  }
}
function shape2() {
  let topLeft1 = color("#C89C00");
  let topLeft2 = color("#D07A00");
  if (key === "x" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowYellow();
      fill(glowPink);
      beginShape();
      vertex(moveShape - 20, 0 - 20);
      vertex(moveShape + 140, 0 - 20);
      vertex(moveShape + 130, 200);
      vertex(moveShape - 20, 180);
      endShape(CLOSE);

      fill(glowPink);
      beginShape();
      vertex(moveShape + 140, 0 - 20);
      vertex(moveShape + 165, 0 - 20);
      vertex(moveShape + 155, 175);
      vertex(moveShape + 130, 200);
      endShape(CLOSE);

      highlights1(120, 80 + moveShape, 90);
    }
  } else {
    hibernate();
    fill(topLeft1);
    beginShape();
    vertex(moveShape3 + 0 - 20, 0 - 20);
    vertex(moveShape3 + 140, 0 - 20);
    vertex(moveShape3 + 130, 200);
    vertex(moveShape3 + 0 - 20, 180);
    endShape(CLOSE);

    fill(topLeft2);
    beginShape();
    vertex(moveShape3 + 140, 0 - 20);
    vertex(moveShape3 + 165, 0 - 20);
    vertex(moveShape3 + 155, 175);
    vertex(moveShape3 + 130, 200);
    endShape(CLOSE);

    highlights1(120, moveShape3 + 80, 90);

    hasPlayed = false;
  }
}
function shape3() {
  let topRight = color("#D20014");
  if (key === "c" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowRed();
      fill(glowOrange);
      beginShape();
      vertex(moveShape + 215, 0 - 20);
      vertex(moveShape + 200, 130);
      vertex(moveShape + 530 + 30, 200);
      vertex(moveShape + 580 + 30, 0 - 20);
      endShape(CLOSE);
    }
  } else {
    hibernateRed();
    fill(topRight);
    beginShape();
    vertex(moveShape5 + 215, 0 - 20);
    vertex(moveShape5 + 200, 130);
    vertex(moveShape5 + 530 + 30, 200);
    vertex(moveShape5 + 580 + 30, 0 - 20);
    endShape(CLOSE);

    hasPlayed = false;
  }
}
function shape4() {
  let mid = color("#EC1027");
  let mid2 = color("#FD1038");
  let lite = color("#2A1516");
  if (key === "v" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowRed();
      fill(glowOrange);
      beginShape();
      vertex(moveShape + 180, 220);
      vertex(moveShape + 155, 450);
      vertex(moveShape + 400, 495);
      vertex(moveShape + 465, 275);
      endShape(CLOSE);

      fill(glowOrange);
      beginShape();
      vertex(moveShape + 180, 220);
      vertex(moveShape + 215, 145);
      vertex(moveShape + 445, 190);
      vertex(moveShape + 465, 275);
      endShape(CLOSE);

      highlights2(60, 250 + moveShape, 200);
      highlights2(60, 375 + moveShape, 225);
      glowText();
      push();
      let angle1 = radians(10);

      let textGlow = color("#FFD2D93");
      translate(moveShape + 195, 275);
      rotate(angle1);
      textSize(26);
      fill(textGlow);
      text("''Closed in a room, my", 0, 0);
      pop();

      push();
      translate(moveShape + 200, 305);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("imagination becomes", 0, 0);
      pop();

      push();
      translate(moveShape + 195, 335);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("the universe, and the", 0, 0);
      pop();

      push();
      translate(moveShape + 190, 365);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("rest of the world is", 0, 0);
      pop();

      push();
      translate(moveShape + 190, 395);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("missing out.''", 0, 0);
      pop();

      push();
      translate(moveShape + 265, 440);
      rotate(angle1);
      textSize(20);
      fill(textGlow);
      text("-Anonymous", 0, 0);
      pop();
    }
  } else {
    hibernateRed();
    fill(mid);
    beginShape();
    vertex(moveShape4 + 180 - 15, 220);
    vertex(moveShape4 + 155 - 15, 450);
    vertex(moveShape4 + 400 - 15, 495);
    vertex(moveShape4 + 465 - 15, 275);
    endShape(CLOSE);

    fill(mid2);
    beginShape();
    vertex(moveShape4 + 180 - 15, 220);
    vertex(moveShape4 + 215 - 15, 145);
    vertex(moveShape4 + 445 - 15, 190);
    vertex(moveShape4 + 465 - 15, 275);
    endShape(CLOSE);

    highlights2(60, moveShape4 + 250 - 15, 200);
    highlights2(60, moveShape4 + 375 - 15, 225);

    hasPlayed = false;

    push();
    let angle1 = radians(10);
    translate(moveShape4 + 180, 275);
    rotate(angle1);
    textSize(26);
    fill(lite);
    text("''Closed in a room, my", 0, 0);
    pop();

    push();
    translate(moveShape4 + 185, 305);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("imagination becomes", 0, 0);
    pop();

    push();
    translate(moveShape4 + 180, 335);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("the universe, and the", 0, 0);
    pop();

    push();
    translate(moveShape4 + 175, 365);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("rest of the world is", 0, 0);
    pop();

    push();
    translate(moveShape4 + 175, 395);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("missing out.''", 0, 0);
    pop();

    push();
    translate(moveShape4 + 250, 440);
    rotate(angle1);
    textSize(20);
    fill(lite);
    text("-Anonymous", 0, 0);
    pop();
  }
}
function shape5() {
  let bottom = color("#EA8544");
  let bottom2 = color("#CFB329");
  if (key === "b" && keyIsPressed) {
    // if (frameCount > 0 && hasPlayed === false) {
    glowYellow();
    fill(glowPink);
    beginShape();
    vertex(moveShape + 165, 441);
    vertex(moveShape + 150, 490);
    vertex(moveShape + 295, 517);
    vertex(moveShape + 300, 473);
    endShape(CLOSE);

    fill(glowPink);
    beginShape();
    vertex(moveShape + 150, 490);
    vertex(moveShape + 295, 517);
    vertex(moveShape + 281, 570);
    vertex(moveShape + 145, 545);
    endShape(CLOSE);

    highlights1(120, 240 + moveShape, 460);
  } else {
    hibernate();
    fill(bottom);
    beginShape();
    vertex(moveShape3 + 165, moveShape6 + 441);
    vertex(moveShape3 + 150, moveShape6 + 490);
    vertex(moveShape3 + 295, moveShape6 + 517);
    vertex(moveShape3 + 300, moveShape6 + 473);
    endShape(CLOSE);

    fill(bottom2);
    beginShape();
    vertex(moveShape3 + 150, moveShape6 + 490);
    vertex(moveShape3 + 295, moveShape6 + 517);
    vertex(moveShape3 + 281, moveShape6 + 570);
    vertex(moveShape3 + 145, moveShape6 + 545);
    endShape(CLOSE);

    highlights1(120, 240 + moveShape3, 460);

    // hasPlayed = false;
  }
}
function shape6() {
  let bottomRight = color("#B60014");
  let bottomRight2 = color("#E7213A");
  let bottomRight3 = color("#FE2433");
  if (key === "n" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowRed();
      fill(glowOrange);
      beginShape();
      vertex(moveShape + 350, 487);
      vertex(moveShape + 530, 520);
      vertex(moveShape + 510, 576);
      vertex(moveShape + 335, 545);
      endShape(CLOSE);

      fill(glowOrange);
      beginShape();
      vertex(moveShape + 350, 487);
      vertex(moveShape + 530, 520);
      vertex(moveShape + 510, 465);
      vertex(moveShape + 335, 430);
      endShape(CLOSE);

      fill(bottomRight3);
      beginShape();
      vertex(moveShape + 335, 428);
      vertex(moveShape + 350, 487);
      vertex(moveShape + 335, 545);
      vertex(moveShape + 326, 487);
      endShape(CLOSE);

      highlights2(50, 460 + moveShape, 475);
    }
  } else {
    hibernateRed();
    fill(bottomRight);
    beginShape();
    vertex(moveShape2 + 347, moveShape4 + 484);
    vertex(moveShape2 + 530, moveShape4 + 520);
    vertex(moveShape2 + 510, moveShape4 + 576);
    vertex(moveShape2 + 335, moveShape4 + 540);
    endShape(CLOSE);

    fill(bottomRight2);
    beginShape();
    vertex(moveShape2 + 347, moveShape4 + 484);
    vertex(moveShape2 + 530, moveShape4 + 520);
    vertex(moveShape2 + 510, moveShape4 + 465);
    vertex(moveShape2 + 335, moveShape4 + 430);
    endShape(CLOSE);

    fill(bottomRight3);
    beginShape();
    vertex(moveShape2 + 335, moveShape4 + 428);
    vertex(moveShape2 + 350, moveShape4 + 487);
    vertex(moveShape2 + 335, moveShape4 + 540);
    vertex(moveShape2 + 326, moveShape4 + 487);
    endShape(CLOSE);

    highlights2(50, moveShape2 + 460, moveShape4 + 475);

    hasPlayed = false;
  }
}
function shape7() {
  let right = color("#F0B401");
  let right2 = color("#E0A800");
  let right3 = color("#DB7402");
  if (key === "m" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowYellow();
      fill(glowPink);
      beginShape();
      vertex(moveShape + 530 + 30, 240);
      vertex(moveShape + 530 + 30, 460);
      vertex(moveShape + 432, 435);
      vertex(moveShape + 493, 230);
      endShape(CLOSE);

      fill(glowPink);
      beginShape();
      vertex(moveShape + 493, 230);
      vertex(moveShape + 550 + 10, 245);
      vertex(moveShape + 550 + 10, 216);
      vertex(moveShape + 480, 200);
      endShape(CLOSE);

      fill(glowPink);
      beginShape();
      vertex(moveShape + 480, 200);
      vertex(moveShape + 493, 230);
      vertex(moveShape + 432, 435);
      vertex(moveShape + 422, 395);
      endShape(CLOSE);

      highlights1(120, 490 + moveShape, 320);
    }
  } else {
    hibernate();
    fill(right);
    beginShape();
    vertex(moveShape3 + 530 + 30, 240);
    vertex(moveShape3 + 530 + 30, 460);
    vertex(moveShape3 + 432, 435);
    vertex(moveShape3 + 493, 230);
    endShape(CLOSE);

    fill(right2);
    beginShape();
    vertex(moveShape3 + 493, 230);
    vertex(moveShape3 + 550 + 10, 245);
    vertex(moveShape3 + 550 + 10, 216);
    vertex(moveShape3 + 480, 200);
    endShape(CLOSE);

    fill(right3);
    beginShape();
    vertex(moveShape3 + 480, 200);
    vertex(moveShape3 + 493, 230);
    vertex(moveShape3 + 432, 435);
    vertex(moveShape3 + 422, 395);
    endShape(CLOSE);

    highlights1(120, moveShape3 + 490, 320);

    hasPlayed = false;
  }
}

function glowRed() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke("#FFD2D9");
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color("#FDA4AE");
}
function glowYellow() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke("#FFF9CB");
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color("#FFF495");
}

function hibernate() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke(bgcolor);
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color("#494310");
}
function hibernateRed() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke(bgcolor);
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color("#500B0B");
}

function glowText() {
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = color("#FDA4AE");
}

function highlights1(a, x, y) {
  drawingContext.shadowBlur = 0;
  noStroke();
  fill("#FFF9CB11");
  for (i = 10; i < a; i += 10) {
    ellipse(x, y, i);
  }
}
function highlights2(a, x, y) {
  drawingContext.shadowBlur = 0;
  noStroke();
  fill("#FFF9CB0A");
  for (i = 10; i < a; i += 5) {
    ellipse(x, y, 2 * i, i);
  }
}

function keyPressed() {
  if (key === "z" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      sound1.play();
      hasPlayed = true;
    }
  }
  if (key === "x" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      sound2.play();
      hasPlayed = true;
    }
  }
  if (key === "c" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      sound3.play();
      hasPlayed = true;
    }
  }
  if (key === "v" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      sound4.play();
      hasPlayed = true;
    }
  }
  if (key === "b" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      sound5.play();
      hasPlayed = true;
    }
  }
  if (key === "n" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      sound6.play();
      hasPlayed = true;
    }
  }
  if (key === "m" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      sound7.play();
      hasPlayed = true;
    }
  }
  if (key === " ") {
    saveGif("giphy", 5);
  }
}

function makePortButton() {
  portButton = createButton("choose port");
  portButton.position(10, 10);
 
  portButton.mousePressed(choosePort);
}
 
function choosePort() {
  if (portButton) portButton.show();
  serial.requestPort();
}
 
function openPort() {
  serial.open().then(initiateSerial);
 
  function initiateSerial() {
    console.log("port open");
  }
  if (portButton) portButton.hide();
}
 
function portError(err) {
  alert("Serial port error: " + err);
}
function serialEvent() {
  inData = serial.read();
  redValue = Number(inData);
}
function portConnect() {
  console.log("port connected");
  serial.getPorts();
}
 
function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}
 
function closePort() {
  serial.close();
}
// function keyPressed() {
//   if (key >= 0 && key <= 9) { // if the user presses 0 through 9
//     outByte = (key * 25); // map the key to a range from 0 to 225
//     serial.write(outByte); // send it out the serial port
//   }
// }
