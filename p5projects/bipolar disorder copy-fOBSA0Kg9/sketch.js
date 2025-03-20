let bgcolor;
let topcolor, bottomcolor, topcolor2, bottomcolor2;
let c = 1500;
let img, swirls;
let rotationangle = 0;
let moveShape,
  moveShape1,
  moveShape2,
  moveShape3,
  moveShape4,
  moveShape5,
  moveShape6;
let glowPink, glowOrange, glowBlue, glowRose;
let font;
let particles = [];
let pests = [];
let heaven,hell;

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
    this.randoColor = [
      color("#02665D"),
      color("#009688"),
      color("rgb(171,224,171)"),
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
        stroke("#C2E4BA70");
        line(this.x, this.y, element.x, element.y);
      }
    });
  }
}

function preload() {
  img = loadImage("person.png");
  swirls = loadImage("swirls.png");
  font = loadFont("Cartesian-0W5Oo.otf");
  heaven = loadSound("sounds/warm-rain-145528.mp3");
  hell = loadSound("sounds/the-futuristic-ambience-everything-is-one-179395.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight + c);
  for (let i = 0; i < width / 10; i++) {
    particles.push(new Particle());
  }
  for (let i = 0; i < width / 10; i++) {
    pests.push(new Pest());
    pests.push(new Pest());
    pests.push(new Pest());
  }
  textFont(font);
  if((mouseX > 0) && (mouseX < windowWidth) && (mouseY < windowHeight/2)){
  // heaven.volume(0.3);
  heaven.play();
  // heaven.loop();
  }
  // } else if (mouseX > 0 && mouseX < 1000 && mouseY >= 1000) {
  // // hell.volume(0.3);
  // hell.play();
  // // hell.loop();
  // }
}

function draw() {
  bgcolor = color("rgb(42,21,21)");
  background(bgcolor);
  gradient();
  noStroke();
  platform();
  push();
  scale(0.65);
  shapes();
  pop();
  //variables to move shapes
  moveShape = 2 * sin(frameCount / 1.5);
  moveShape2 = 10 * sin(frameCount / 30);
  moveShape3 = 18 * cos(frameCount / 30);
  moveShape4 = 15 * sin(frameCount / 30);
  moveShape5 = 30 * cos(frameCount / 30);
  moveShape6 = 6 * cos(frameCount / 30);
  moveBubble = 5 * cos(frameCount / 2);

  //glow colors
  glowPink = color("#E86976");
  glowOrange = color("#F44336");
  glowBlue = color("#7AEDFC");
  glowRose = color("#FA74A2");

  // group1()
  push();
  group2();
  pop();
  push();
  translate(-400, 400);
  // group2()
  pop();
  // group3()
  push();
  group4();
  pop();

  push();
  scale(0.65);
  push();
  translate(270, windowHeight + 2500);
  shape3bw();
  pop();
  push();
  translate(100, windowHeight + 2000);
  shape4bw();
  rotate(PI / 10);
  translate(380, 150);
  shape1bw();
  pop();
  push();
  translate(650, windowHeight + 1870);
  shape1bw();
  pop();
  push();
  translate(-400, windowHeight + 2250);
  shape7bw();
  translate(1080, 0);
  shape4bw();
  translate(-550, -100);
  shape6bw();
  pop();
  push();
  rotate(PI / 10);
  translate(1700, 2500);
  shape2bw();
  pop();
  push();
  translate(260, 2320);
  shape5bw();
  pop();
  translate(400, 2000);
  scale(0.65);
  shape1bw();
  pop();

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
}

function platform() {
  //black beam
  push();
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color("#009688");
  fill("rgb(0,0,0)");
  let gradient2 = drawingContext.createLinearGradient(
    width / 2 - 200,
    height / 2 - 150,
    width / 2 - 200,
    height / 2 + 300
  );
  gradient2.addColorStop(0, "#6BCDFB");
  gradient2.addColorStop(1, "#009688");

  //ground
  drawingContext.fillStyle = gradient2;
  rect(windowWidth / 2 - 100, (windowHeight + c) / 2 - 50, 200, c);
  pop();
  push();
  tint(255, 30);
  image(swirls, 0, -150,windowWidth,1200);
  pop();

  fill("#ABF5FE");
  rect(0, (windowHeight + c) / 2 - 100, windowWidth, 100);

  //black hole
  fill("rgb(0,0,0)");
  ellipse(windowWidth / 2, (windowHeight + c) / 2 - 50, 300, 60);

  //white beam
  push();
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color("white");
  fill("white");

  let gradient = drawingContext.createLinearGradient(
    width / 2 - 200,
    height / 2 - 450,
    width / 2 - 200,
    height / 2 + 200
  );
  gradient.addColorStop(0, "white");
  gradient.addColorStop(1, "#03A9F4");

  drawingContext.fillStyle = gradient;

  rect(windowWidth / 2 - 100, 0, 200, c - 450);
  pop();

  push();
  fill("#6BCDFB");
  ellipse(windowWidth / 2, windowHeight / 2 + 700, 200, 40);
  pop();

  fill("#95D4DB");
  rect(0, (windowHeight + c) / 2, windowWidth, 20);
  //person
  push();
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color("#A69696");
  //image(img, 250, 800, 150, 150);
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

  topcolor2 = color("rgb(75,76,125)");
  bottomcolor2 = color("black");
  for (let y = height / 2; y < height; y++) {
    n = map(y, 0, height, 0, 1);

    let newcolor2 = lerpColor(topcolor2, bottomcolor2, n);
    stroke(newcolor2);
    line(0, y, width, y);
  }
}

// function windowResized() {
//   // print("window is resized!");
//   resizeCanvas(windowWidth, windowHeight);
// }

function group1() {
  push();
  rotate(PI / 100);
  translate(-300, 270);
  scale(0.65);

  push();
  rotate(PI / 17);
  translate(290, -400);
  shape6();
  pop();

  push();
  scale(1.2);
  rotate(PI / 11);
  translate(870, -70);
  shape2();
  pop();

  push();
  rotate(PI / 13);
  translate(640, -200);
  shape2();
  pop();

  push();
  rotate(PI / 17);
  translate(700, -370);
  shape5();
  pop();

  push();
  rotate(PI / 12);
  translate(765, -100);
  shape1();
  pop();

  push();
  rotate(PI / 13);
  translate(600, -250);
  shape6();
  pop();

  push();
  translate(400, 800);

  pop();
  pop();
}
function group2() {
  push();
  scale(0.65);

  push();
  rotate(PI / 17);
  translate(290, -400);
  shape6();
  pop();

  push();
  rotate(PI / 40);
  translate(930, -20);
  shape3();
  pop();

  push();
  scale(1.2);
  rotate(PI / 11);
  translate(870, -70);
  shape2();
  pop();

  push();
  rotate(PI / 13);
  translate(640, -200);
  shape2();
  pop();

  push();
  rotate(PI / 17);
  translate(700, -370);
  shape5();
  pop();

  push();
  rotate(PI / 17);
  translate(680, -400);
  shape41();
  pop();

  push();
  rotate(PI / 12);
  translate(765, -100);
  shape1();
  pop();

  push();
  rotate(PI / 12);
  translate(780, -160);
  shape5();
  pop();

  push();
  rotate(250);
  translate(-100, 1030);
  shape1();
  pop();

  push();
  rotate(PI / 13);
  translate(600, -250);
  shape6();
  pop();

  push();
  rotate(PI / 40);
  translate(900, 240);
  shape7();
  pop();

  push();
  rotate(PI / 20);
  translate(940, 140);
  shape42();
  pop();

  push();
  translate(400, 800);

  pop();
  pop();
}
function group3() {
  push();
  rotate(PI / 80);
  translate(-200, 330);
  scale(0.5);

  push();
  rotate(PI / 17);
  translate(290, -400);
  shape6();
  pop();

  push();
  rotate(PI / 40);
  translate(930, -20);
  shape3();
  pop();

  push();
  scale(1.2);
  rotate(PI / 11);
  translate(870, -70);
  shape2();
  pop();

  push();
  rotate(PI / 13);
  translate(640, -200);
  shape2();
  pop();

  push();
  rotate(PI / 17);
  translate(700, -370);
  shape5();
  pop();

  push();
  rotate(PI / 17);
  translate(680, -400);
  shape4();
  pop();

  push();
  rotate(PI / 12);
  translate(765, -100);
  shape1();
  pop();

  push();
  rotate(250);
  translate(-100, 1030);
  shape1();
  pop();

  push();
  rotate(PI / 13);
  translate(600, -250);
  shape6();
  pop();

  push();
  rotate(PI / 40);
  translate(900, 240);
  shape7();
  pop();

  push();
  scale(1.2);
  rotate(PI / 12);
  translate(630, -180);
  shape5();
  pop();

  push();
  translate(400, 800);

  pop();
  pop();
}
function group4() {
  push();
  //rotate(PI/20)
  translate(0, 420);
  scale(0.2);
  shape3();
  pop();

  push();
  rotate(PI / 0);
  translate(-150, 280);
  scale(0.7);
  shape7();
  pop();

  push();
  rotate(PI / 10);
  translate(450, 160);
  scale(0.5);
  shape5();
  pop();

  push();
  rotate(PI / 10);
  translate(200, 350);
  scale(0.5);
  shape6();
  pop();

  push();
  rotate(PI / 10);
  translate(350, 800);
  scale(0.4);
  shape2();
  pop();

  push();
  rotate(PI / 10);
  translate(750, 200);
  scale(1 / 2);
  shape1();
  pop();

  push();
  rotate(PI / 10);
  translate(800, 400);
  scale(1 / 4);
  shape4();
  pop();

  push();
  rotate(PI / 10);
  translate(700, 400);
  scale(1 / 2);
  shape5();
  pop();
}
function shapes() {
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
  //bottom left red
  let bottomLeft1 = color("#D736F3");
  let bottomLeft2 = color("#9C27B0");
  let bottomLeft3 = color("#C734E1");
  if (key === "z" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowRed();
      fill(glowOrange);
      beginShape();
      vertex(moveShape - 40, 220);
      vertex(moveShape - 90, 282);
      vertex(moveShape + 100, 310);
      vertex(moveShape + 140, 245);
      endShape(CLOSE);

      fill(glowOrange);
      beginShape();
      vertex(moveShape - 90, 282);
      vertex(moveShape - 95, 518);
      vertex(moveShape + 90, 550);
      vertex(moveShape + 100, 310);
      endShape(CLOSE);

      fill(glowOrange);
      beginShape();
      vertex(moveShape + 140, 245);
      vertex(moveShape + 100, 310);
      vertex(moveShape + 90, 550);
      vertex(moveShape + 130, 465);
      endShape(CLOSE);
      highlights2(60, 40 + moveShape, 260);
    }
  } else {
    hibernateRed();
    fill(bottomLeft1);
    beginShape();
    vertex(moveShape2 + 0 - 40, moveShape2 + 220);
    vertex(moveShape2 + 0 - 90, moveShape2 + 282);
    vertex(moveShape2 + 100, moveShape2 + 310);
    vertex(moveShape2 + 140, moveShape2 + 245);
    endShape(CLOSE);

    fill(bottomLeft2);
    beginShape();
    vertex(moveShape2 + 0 - 90, moveShape2 + 282);
    vertex(moveShape2 + 0 - 95, moveShape2 + 518);
    vertex(moveShape2 + 90, moveShape2 + 550);
    vertex(moveShape2 + 100, moveShape2 + 310);
    endShape(CLOSE);

    fill(bottomLeft3);
    beginShape();
    vertex(moveShape2 + 140, moveShape2 + 245);
    vertex(moveShape2 + 100, moveShape2 + 310);
    vertex(moveShape2 + 90, moveShape2 + 550);
    vertex(moveShape2 + 130, moveShape2 + 465);
    endShape(CLOSE);

    highlights2(60, moveShape2 + 40, moveShape2 + 260);
    hasPlayed = false;
  }
}
function shape2() {
  //top yellow
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
  //top red
  let topRight = color("#E91E63");
  if (key === "c" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowRed();
      fill(glowRose);
      beginShape();
      vertex(moveShape + 215, 0 - 80);
      vertex(moveShape + 280, 0 - 133);
      vertex(moveShape + 560, 0 - 90);
      vertex(moveShape + 610, 0 - 20);
      endShape();
      beginShape();
      vertex(moveShape + 215, 0 - 80);
      vertex(moveShape + 200, 130);
      vertex(moveShape + 530 + 30, 200);
      vertex(moveShape + 580 + 30, 0 - 20);
      endShape(CLOSE);
    }
  } else {
    hibernateRed();
    fill(topRight);
    beginShape();
    vertex(moveShape5 + 215, 0 - 80);
    vertex(moveShape5 + 280, 0 - 133);
    vertex(moveShape5 + 560, 0 - 90);
    vertex(moveShape5 + 610, 0 - 20);
    endShape();

    beginShape();
    vertex(moveShape5 + 215, 0 - 80);
    vertex(moveShape5 + 200, 130);
    vertex(moveShape5 + 530 + 30, 200);
    vertex(moveShape5 + 580 + 30, 0 - 20);
    endShape(CLOSE);
    hasPlayed = false;
  }
}
function shape4() {
  //middle
  let mid = color("#00BCD4");
  let mid2 = color("#05D1EB");
  let lite = color("#012F35");
  if (key === "v" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowBluey();
      fill(glowBlue);
      beginShape();
      vertex(moveShape + 180, 220);
      vertex(moveShape + 155, 450);
      vertex(moveShape + 400, 495);
      vertex(moveShape + 465, 275);
      endShape(CLOSE);

      fill(glowBlue);
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
function shape41() {
  //middle
  let mid = color("#00BCD4");
  let mid2 = color("#05D1EB");
  let lite = color("#012F35");
  if (key === "v" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowBluey();
      fill(glowBlue);
      beginShape();
      vertex(moveShape + 180, 220);
      vertex(moveShape + 155, 450);
      vertex(moveShape + 400, 495);
      vertex(moveShape + 465, 275);
      endShape(CLOSE);

      fill(glowBlue);
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
      text("      ''Keep smiling, ", 0, 0);
      pop();

      push();
      translate(moveShape + 200, 305);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("   because life is a ", 0, 0);
      pop();

      push();
      translate(moveShape + 195, 335);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("  beautiful thing and", 0, 0);
      pop();

      push();
      translate(moveShape + 190, 365);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text(" there's so much to", 0, 0);
      pop();

      push();
      translate(moveShape + 190, 395);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("    smile about''", 0, 0);
      pop();

      push();
      translate(moveShape + 235, 440);
      rotate(angle1);
      textSize(20);
      fill(textGlow);
      text("-Marilyn Monroe", 0, 0);
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
    text("      ''Keep smiling, ", 0, 0);
    pop();

    push();
    translate(moveShape4 + 185, 305);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("   because life is a ", 0, 0);
    pop();

    push();
    translate(moveShape4 + 180, 335);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("  beautiful thing and ", 0, 0);
    pop();

    push();
    translate(moveShape4 + 175, 365);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text(" there's so much to", 0, 0);
    pop();

    push();
    translate(moveShape4 + 175, 395);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("    smile about''", 0, 0);
    pop();

    push();
    translate(moveShape4 + 220, 440);
    rotate(angle1);
    textSize(20);
    fill(lite);
    text("-Marilyn Monroe", 0, 0);
    pop();
  }
}
function shape42() {
  //middle
  let mid = color("#00BCD4");
  let mid2 = color("#05D1EB");
  let lite = color("#012F35");
  if (key === "v" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowBluey();
      fill(glowBlue);
      beginShape();
      vertex(moveShape + 180, 220);
      vertex(moveShape + 155, 450);
      vertex(moveShape + 400, 495);
      vertex(moveShape + 465, 275);
      endShape(CLOSE);

      fill(glowBlue);
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
      text("''The greatest glory", 0, 0);
      pop();

      push();
      translate(moveShape + 200, 305);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("in living lies not in ", 0, 0);
      pop();

      push();
      translate(moveShape + 195, 335);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("never falling, but in", 0, 0);
      pop();

      push();
      translate(moveShape + 190, 365);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("rising every time", 0, 0);
      pop();

      push();
      translate(moveShape + 190, 395);
      rotate(angle1);
      textSize(24);
      fill(textGlow);
      text("we fall.''", 0, 0);
      pop();

      push();
      translate(moveShape + 235, 440);
      rotate(angle1);
      textSize(20);
      fill(textGlow);
      text("-Nelson Mandela", 0, 0);
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
    text("''The greatest glory", 0, 0);
    pop();

    push();
    translate(moveShape4 + 185, 305);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("in living lies not in ", 0, 0);
    pop();

    push();
    translate(moveShape4 + 180, 335);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("never falling, but in", 0, 0);
    pop();

    push();
    translate(moveShape4 + 175, 365);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("rising every time", 0, 0);
    pop();

    push();
    translate(moveShape4 + 175, 395);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("we fall.''", 0, 0);
    pop();

    push();
    translate(moveShape4 + 220, 440);
    rotate(angle1);
    textSize(20);
    fill(lite);
    text("-Nelson Mandela", 0, 0);
    pop();
  }
}
function shape5() {
  //little yellow
  let bottom = color("#EA8544");
  let bottom2 = color("#CFB329");
  if (key === "b" && keyIsPressed) {
    // if (frameCount > 0 && hasPlayed === false) {
    glowYellow();
    fill(glowPink);
    beginShape();
    vertex(moveShape + 165, 447);
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
    vertex(moveShape3 + 165, moveShape6 + 447);
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
  //little red
  let bottomRight = color("#DD1E5F");
  let bottomRight2 = color("#E91E63");
  let bottomRight3 = color("#FA206A");
  if (key === "n" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowRed();
      fill(glowOrange);
      beginShape();
      vertex(moveShape + 347, 484);
      vertex(moveShape + 530, 520);
      vertex(moveShape + 510, 576);
      vertex(moveShape + 335, 540);
      endShape(CLOSE);

      fill(glowOrange);
      beginShape();
      vertex(moveShape + 347, 484);
      vertex(moveShape + 530, 520);
      vertex(moveShape + 510, 465);
      vertex(moveShape + 340, 430);
      endShape(CLOSE);

      fill(bottomRight3);
      beginShape();
      vertex(moveShape + 340, 430);
      vertex(moveShape + 350, 487);
      vertex(moveShape + 335, 540);
      vertex(moveShape + 325, 485);
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
    vertex(moveShape2 + 340, moveShape4 + 430);
    endShape(CLOSE);

    fill(bottomRight3);
    beginShape();
    vertex(moveShape2 + 340, moveShape4 + 430);
    vertex(moveShape2 + 350, moveShape4 + 487);
    vertex(moveShape2 + 335, moveShape4 + 540);
    vertex(moveShape2 + 325, moveShape4 + 485);
    endShape(CLOSE);

    highlights2(50, moveShape2 + 460, moveShape4 + 475);

    hasPlayed = false;
  }
}
function shape7() {
  //verticle yellow
  let right = color("#D538F0");
  let right2 = color("#CC33E6");
  let right3 = color("#9C27B0");
  if (key === "m" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowYellow();
      fill(glowPink);
      beginShape();
      vertex(moveShape + 590 + 30, 259);
      vertex(moveShape + 530 + 30, 460);
      vertex(moveShape + 432, 435);
      vertex(moveShape + 493, 230);
      endShape(CLOSE);

      fill(glowPink);
      beginShape();
      vertex(moveShape + 493, 230);
      vertex(moveShape + 610 + 10, 259);
      vertex(moveShape + 594 + 10, 227);
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
    vertex(moveShape3 + 590 + 30, 259);
    vertex(moveShape3 + 530 + 30, 460);
    vertex(moveShape3 + 432, 435);
    vertex(moveShape3 + 493, 230);
    endShape(CLOSE);

    fill(right2);
    beginShape();
    vertex(moveShape3 + 493, 230);
    vertex(moveShape3 + 610 + 10, 259);
    vertex(moveShape3 + 594 + 10, 227);
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

function shapesbw() {
  shape1bw();
  shape2bw();
  shape3bw();
  shape4bw();
  shape5bw();
  shape6bw();
  shape7bw();
}
function shape1bw() {
  let bottomLeft1 = color("rgba(255,255,255,0.12)");
  let bottomLeft2 = color("rgba(255,255,255,0.12)");
  let bottomLeft3 = color("rgba(255,255,255,0.12)");
  if (key === "z" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowWhite();
      fill(bottomLeft1);
      beginShape();
      vertex(moveShape + 0 - 40, moveShape2 + 220);
      vertex(moveShape + 0 - 90, moveShape2 + 282);
      vertex(moveShape + 100, moveShape2 + 310);
      vertex(moveShape + 140, moveShape2 + 245);
      endShape(CLOSE);

      fill(bottomLeft2);
      beginShape();
      vertex(moveShape + 0 - 90, moveShape2 + 282);
      vertex(moveShape + 0 - 95, moveShape2 + 518);
      vertex(moveShape + 90, moveShape2 + 550);
      vertex(moveShape + 100, moveShape2 + 310);
      endShape(CLOSE);

      fill(bottomLeft3);
      beginShape();
      vertex(moveShape + 140, moveShape2 + 245);
      vertex(moveShape + 100, moveShape2 + 310);
      vertex(moveShape + 90, moveShape2 + 550);
      vertex(moveShape + 130, moveShape2 + 465);
      endShape(CLOSE);
      highlights3(60, 40 + moveShape, 260);
    }
  } else {
    hibernateWhite();
    fill(bottomLeft1);
    beginShape();
    vertex(+0 - 40, +220);
    vertex(+0 - 90, +282);
    vertex(+100, +310);
    vertex(+140, +245);
    endShape(CLOSE);

    fill(bottomLeft2);
    beginShape();
    vertex(+0 - 90, +282);
    vertex(+0 - 95, +518);
    vertex(+90, +550);
    vertex(+100, +310);
    endShape(CLOSE);

    fill(bottomLeft3);
    beginShape();
    vertex(+140, +245);
    vertex(+100, +310);
    vertex(+90, +550);
    vertex(+130, +465);
    endShape(CLOSE);

    highlights2(60, +40, +260);
    hasPlayed = false;
  }
}
function shape2bw() {
  let topLeft1 = color("rgba(255,255,255,0.12)");
  let topLeft2 = color("rgba(255,255,255,0.12)");
  if (key === "x" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowWhite();
      fill(topLeft1);
      beginShape();
      vertex(moveShape - 20, 0 - 20);
      vertex(moveShape + 140, 0 - 20);
      vertex(moveShape + 130, 200);
      vertex(moveShape - 20, 180);
      endShape(CLOSE);

      fill(topLeft1);
      beginShape();
      vertex(moveShape + 140, 0 - 20);
      vertex(moveShape + 165, 0 - 20);
      vertex(moveShape + 155, 175);
      vertex(moveShape + 130, 200);
      endShape(CLOSE);

      highlights4(120, 80 + moveShape, 90);
    }
  } else {
    hibernateWhite();
    fill(topLeft1);
    beginShape();
    vertex(+0 - 20, 0 - 20);
    vertex(+140, 0 - 20);
    vertex(+130, 200);
    vertex(+0 - 20, 180);
    endShape(CLOSE);

    fill(topLeft2);
    beginShape();
    vertex(+140, 0 - 20);
    vertex(+165, 0);
    vertex(+155, 175);
    vertex(+130, 200);
    endShape(CLOSE);

    highlights1(120, +80, 90);

    hasPlayed = false;
  }
}
function shape3bw() {
  let topRight = color("rgba(255,255,255,0.12)");
  if (key === "c" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowWhite();
      fill(topRight);
      beginShape();
      vertex(moveShape + 215, 0 - 80);
      vertex(moveShape + 280, 0 - 133);
      vertex(moveShape + 560, 0 - 90);
      vertex(moveShape + 610, 0 - 20);
      endShape();
      beginShape();
      vertex(moveShape + 215, 0 - 80);
      vertex(moveShape + 200, 130);
      vertex(moveShape + 530 + 30, 200);
      vertex(moveShape + 580 + 30, 0 - 20);
      endShape(CLOSE);
    }
  } else {
    hibernateWhite();
    fill(topRight);
    beginShape();
    vertex(+215, 0 - 80);
    vertex(+280, 0 - 133);
    vertex(+560, 0 - 90);
    vertex(+610, 0 - 20);
    endShape();

    beginShape();
    vertex(+215, 0 - 80);
    vertex(+200, 130);
    vertex(+530 + 30, 200);
    vertex(+580 + 30, 0 - 20);
    endShape(CLOSE);
    hasPlayed = false;
  }
}
function shape4bw() {
  let mid = color("rgba(255,255,255,0.12)");
  let mid2 = color("rgba(255,255,255,0.12)");
  let lite = color("rgba(255,255,255,0.45)");
  if (key === "v" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      bubble(604,212);
      glowWhite();
      fill(mid);
      beginShape();
      vertex(moveShape + 180, 220);
      vertex(moveShape + 155, 450);
      vertex(moveShape + 400, 495);
      vertex(moveShape + 465, 275);
      endShape(CLOSE);

      fill(mid);
      beginShape();
      vertex(moveShape + 180, 220);
      vertex(moveShape + 215, 145);
      vertex(moveShape + 445, 190);
      vertex(moveShape + 465, 275);
      endShape(CLOSE);

      highlights3(60, 250 + moveShape, 200);
      highlights3(60, 375 + moveShape, 225);
      glowText2();
      push();
      let angle1 = radians(10);

      let textGlow = color("#ACE3AFF");
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
    hibernateWhite();
    fill(mid);
    beginShape();
    vertex(+180 - 15, 220);
    vertex(+155 - 15, 450);
    vertex(+400 - 15, 495);
    vertex(+465 - 15, 275);
    endShape(CLOSE);

    fill(mid2);
    beginShape();
    vertex(+180 - 15, 220);
    vertex(+215 - 15, 145);
    vertex(+445 - 15, 190);
    vertex(+465 - 15, 275);
    endShape(CLOSE);

    highlights2(60, +250 - 15, 200);
    highlights2(60, +375 - 15, 225);

    hasPlayed = false;

    push();
    let angle1 = radians(10);
    translate(+180, 275);
    rotate(angle1);
    textSize(26);
    fill(lite);
    text("''I wish to weep but", 0, 0);
    pop();

    push();
    translate(+185, 305);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text("sorrow is stupid. I", 0, 0);
    pop();

    push();
    translate(+180, 335);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text(" wish to believe but", 0, 0);
    pop();

    push();
    translate(+175, 365);
    rotate(angle1);
    textSize(24);
    fill(lite);
    text(" belief is a graveyard.", 0, 0);
    pop();

    // push();
    // translate(+175, 395);
    // rotate(angle1);
    // textSize(24);
    // fill(lite);
    // text("missing out.''", 0, 0);
    // pop();

    push();
    translate(+220, 440);
    rotate(angle1);
    textSize(20);
    fill(lite);
    text("-Charles Bukowski", 0, 0);
    pop();
  }
}
function shape5bw() {
  let bottom = color("rgba(255,255,255,0.12)");
  let bottom2 = color("rgba(255,255,255,0.12)");
  if (key === "b" && keyIsPressed) {
    // if (frameCount > 0 && hasPlayed === false) {
    glowWhite();
    fill(bottom);
    beginShape();
    vertex(moveShape + 165, 447);
    vertex(moveShape + 150, 490);
    vertex(moveShape + 295, 517);
    vertex(moveShape + 300, 473);
    endShape(CLOSE);

    fill(bottom);
    beginShape();
    vertex(moveShape + 150, 490);
    vertex(moveShape + 295, 517);
    vertex(moveShape + 281, 570);
    vertex(moveShape + 145, 545);
    endShape(CLOSE);

    highlights4(120, 240 + moveShape, 460);
  } else {
    hibernateWhite();
    fill(bottom);
    beginShape();
    vertex(+165, +447);
    vertex(+150, +490);
    vertex(+295, +517);
    vertex(+300, +473);
    endShape(CLOSE);

    fill(bottom2);
    beginShape();
    vertex(+150, +490);
    vertex(+295, +517);
    vertex(+281, +570);
    vertex(+145, +545);
    endShape(CLOSE);

    highlights1(120, 240, 460);

    // hasPlayed = false;
  }
}
function shape6bw() {
  let bottomRight = color("rgba(255,255,255,0.12)");
  let bottomRight2 = color("rgba(255,255,255,0.12)");
  let bottomRight3 = color("rgba(255,255,255,0.12)");
  if (key === "n" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      glowWhite();
      fill(bottomRight);
      beginShape();
      vertex(moveShape + 347, 484);
      vertex(moveShape + 530, 520);
      vertex(moveShape + 510, 576);
      vertex(moveShape + 335, 540);
      endShape(CLOSE);

      fill(bottomRight2);
      beginShape();
      vertex(moveShape + 347, 484);
      vertex(moveShape + 530, 520);
      vertex(moveShape + 510, 465);
      vertex(moveShape + 340, 430);
      endShape(CLOSE);

      fill(bottomRight3);
      beginShape();
      vertex(moveShape + 340, 430);
      vertex(moveShape + 350, 487);
      vertex(moveShape + 335, 540);
      vertex(moveShape + 325, 485);
      endShape(CLOSE);

      highlights3(50, 460 + moveShape, 475);
    }
  } else {
    hibernateWhite();
    fill(bottomRight);
    beginShape();
    vertex(+347, +484);
    vertex(+530, +520);
    vertex(+510, +576);
    vertex(+335, +540);
    endShape(CLOSE);

    fill(bottomRight2);
    beginShape();
    vertex(+347, +484);
    vertex(+530, +520);
    vertex(+510, +465);
    vertex(+340, +430);
    endShape(CLOSE);

    fill(bottomRight3);
    beginShape();
    vertex(+340, +430);
    vertex(+350, +487);
    vertex(+335, +540);
    vertex(+325, +485);
    endShape(CLOSE);

    highlights2(50, +460, +475);

    hasPlayed = false;
  }
}
function shape7bw() {
  let right = color("rgba(255,255,255,0.12)");
  let right2 = color("rgba(255,255,255,0.12)");
  let right3 = color("rgba(255,255,255,0.12)");
  if (key === "m" && keyIsPressed) {
    if (frameCount > 0 && hasPlayed === false) {
      bubble(604,212);
      glowWhite();
      fill(right);
      beginShape();
      vertex(moveShape + 590 + 30, 259);
      vertex(moveShape + 530 + 30, 460);
      vertex(moveShape + 432, 435);
      vertex(moveShape + 493, 230);
      endShape(CLOSE);

      fill(right);
      beginShape();
      vertex(moveShape + 493, 230);
      vertex(moveShape + 610 + 10, 259);
      vertex(moveShape + 594 + 10, 227);
      vertex(moveShape + 480, 200);
      endShape(CLOSE);

      fill(right);
      beginShape();
      vertex(moveShape + 480, 200);
      vertex(moveShape + 493, 230);
      vertex(moveShape + 432, 435);
      vertex(moveShape + 422, 395);
      endShape(CLOSE);

      highlights4(120, 490 + moveShape, 320);
    }
  } else {
    hibernateWhite();
    fill(right);
    beginShape();
    vertex(+590 + 30, 259);
    vertex(+530 + 30, 460);
    vertex(+432, 435);
    vertex(+493, 230);
    endShape(CLOSE);

    fill(right2);
    beginShape();
    vertex(+493, 230);
    vertex(+610 + 10, 259);
    vertex(+594 + 10, 227);
    vertex(+480, 200);
    endShape(CLOSE);

    fill(right3);
    beginShape();
    vertex(+480, 200);
    vertex(+493, 230);
    vertex(+432, 435);
    vertex(+422, 395);
    endShape(CLOSE);

    highlights1(120, +490, 320);

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

function glowBluey() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke("#FFFFFF");
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color("#CAECFC");
}

function glowYellow() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke("#FFF9CB");
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color("#FFF495");
}

function glowWhite() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke("#BEEAC0");
  drawingContext.shadowBlur = 10;
  drawingContext.shadowColor = color("#4CAF50");
}

function hibernate() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke(bgcolor);
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color("#FFFFFF");
}
function hibernateRed() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke(bgcolor);
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color("#E0F9FC");
}

function hibernateWhite() {
  strokeJoin(ROUND);
  strokeWeight(5);
  stroke(bgcolor);
  drawingContext.shadowBlur = 50;
  drawingContext.shadowColor = color("#FDFDFD");
}

function glowText() {
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = color("#FDA4AE");
}

function glowText2() {
  drawingContext.shadowBlur = 30;
  drawingContext.shadowColor = color("#4CAF50");
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

function highlights3(a, x, y) {
  drawingContext.shadowBlur = 0;
  noStroke();
  fill("#FFFFFF0A");
  for (i = 10; i < a; i += 5) {
    ellipse(x, y, 2 * i, i);
  }
}
function highlights4(a, x, y) {
  drawingContext.shadowBlur = 0;
  noStroke();
  fill("#FFFFFF0A");
  for (i = 10; i < a; i += 10) {
    ellipse(x, y, i);
  }
}

let y = 0;
function bubble(xCor,yCor) {
  y = y + 10;
  noFill();
  strokeWeight(2);
  let opacity = 5;
  if (y > 0 && y < 200) {
    stroke(255, 255, 255, opacity + y);
  }
  // else if (y >= 100) {
  //   stroke(255, 255, 255, opacity-5);
  // }
  // }
  circle(moveBubble + xCor, yCor - y, 15);
}
// fill("white")
// push()
// rotate(PI/40)
// ellipse(width/2-50,height/2-60,20,30)
// pop()
// push()
// rotate(PI/5)
// ellipse(width/2+530,height/2-490,40,70)
// pop()

// function keyPressed() {
//   if (key === "z" && keyIsPressed) {
//     if (frameCount > 0 && hasPlayed === false) {
//       sound1.play();
//       hasPlayed = true;
//     }
//   }
//   if (key === "x" && keyIsPressed) {
//     if (frameCount > 0 && hasPlayed === false) {
//       sound2.play();
//       hasPlayed = true;
//     }
//   }
//   if (key === "c" && keyIsPressed) {
//     if (frameCount > 0 && hasPlayed === false) {
//       sound3.play();
//       hasPlayed = true;
//     }
//   }
//   if (key === "v" && keyIsPressed) {
//     if (frameCount > 0 && hasPlayed === false) {
//       sound4.play();
//       hasPlayed = true;
//     }
//   }
//   if (key === "b" && keyIsPressed) {
//     if (frameCount > 0 && hasPlayed === false) {
//       sound5.play();
//       hasPlayed = true;
//     }
//   }
//   if (key === "n" && keyIsPressed) {
//     if (frameCount > 0 && hasPlayed === false) {
//       sound6.play();
//       hasPlayed = true;
//     }
//   }
//   if (key === "m" && keyIsPressed) {
//     if (frameCount > 0 && hasPlayed === false) {
//       sound7.play();
//       hasPlayed = true;
//     }
//   }
// }
