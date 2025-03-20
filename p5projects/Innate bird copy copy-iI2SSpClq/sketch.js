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
    this.randoColor = [color(0),color(120),color(255)]
    this.f = random(this.randoColor);
  }

  // creation of a particle.
  createPest() {
    noStroke();
   
    fill(this.f)
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
    pests.push(new Pest());
    pests.push(new Pest());
  }
  textFont(font);
}

function draw() {
  bgcolor = color("rgb(42,21,21)");
  background(bgcolor);
  gradient();
  noStroke();
    platform();
  push();
  scale(0.65)
  shapes();
  pop(); 
  
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

   
  // group1()
  push()
  group2()
  pop()
  push()
  translate(-400,400)
  // group2()
  pop()
  // group3()
  push()
  group4()
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
}

function platform() {
  //black beam
  push();
  drawingContext.shadowBlur = 100;
  drawingContext.shadowColor = color("#03A9F4");
  fill("rgb(0,0,0)");
   let gradient2 = drawingContext.createLinearGradient(
    width / 2 - 200,
    height / 2 - 150,
    width / 2 - 200,
    height / 2 + 300
  );
  gradient2.addColorStop(0, "#6BCDFB");
  gradient2.addColorStop(1, "#3F51B5");

  drawingContext.fillStyle = gradient2;
  rect(windowWidth / 2 - 100, (windowHeight + c) / 2 - 50, 200, c - 450);
  pop();
  fill("#ABF5FE");
  rect(0, (windowHeight + c) / 2 - 100, windowWidth, 100);

  fill("rgb(0,0,0)");
  ellipse(windowWidth / 2, (windowHeight + c) / 2 - 50, 300, 50);

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
  image(img, 250, 800, 150, 150);
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

function group1(){
  push();
  rotate(PI/100)
  translate(-300,270)
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
  pop()

  push()
  rotate(PI/13)
  translate(600,-250)
  shape6()
  pop()
  
  push()
  translate(400,800)
  
  pop()
  pop();

}
function group2(){
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

  push()
  rotate(PI/13)
  translate(600,-250)
  shape6()
  pop()
  
  push()
  rotate(PI/40)
  translate(900,240)
  shape7()
  pop()
  
  push()
  scale(1.2)
  rotate(PI/12)
  translate(630,-180)
  shape5()
  pop()
  
  push()
  rotate(PI/20)
  translate(940,140)
  shape4()
  pop()
  
  push()
  translate(400,800)
  
  pop()
  pop();
}
function group3(){
  push();
  rotate(PI/80)
  translate(-200,330)
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

  push()
  rotate(PI/13)
  translate(600,-250)
  shape6()
  pop()
  
  push()
  rotate(PI/40)
  translate(900,240)
  shape7()
  pop()
  
  push()
  scale(1.2)
  rotate(PI/12)
  translate(630,-180)
  shape5()
  pop()
  
  push()
  translate(400,800)
  
  pop()
  pop();
}
function group4(){
   push()
  //rotate(PI/20)
  translate(0,420)
  scale(.2)
  shape3()
  pop()
  
  push()
  rotate(PI/0)
  translate(-200,280)
  scale(.7)
  shape7()
  pop()
  
  push()
  rotate(PI/10)
  translate(200,350)
  scale(.5)
  shape6()
  pop()
  
  push()
  rotate(PI/10)
  translate(350,800)
  scale(.4)
  shape2()
  pop()
  
  push()
  rotate(PI/10)
  translate(750,200)
  scale(1/2)
  shape1()
  pop()
  
  push()
  rotate(PI/10)
  translate(800,400)
  scale(1/4)
  shape4()
  pop()
  
  push()
  rotate(PI/10)
  translate(700,400)
  scale(1/2)
  shape5()
  pop()
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
function shape1() { //bottom left red
  let bottomLeft1 = color("#D736F3");
  let bottomLeft2 = color("#9C27B0");
  let bottomLeft3 = color("#C734E1");
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
function shape2() { //top yellow
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
function shape3() { //top red
  let topRight = color("#E91E63");
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
function shape4() { //middle
  let mid = color("#00BCD4");
  let mid2 = color("#05D1EB");
  let lite = color("#012F35");
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
function shape5() { //little yellow
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
function shape6() { //little red
  let bottomRight = color("#DD1E5F");
  let bottomRight2 = color("#E91E63");
  let bottomRight3 = color("#FA206A");
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
function shape7() { //verticle yellow
  let right = color("#D538F0");
  let right2 = color("#CC33E6");
  let right3 = color("#9C27B0");
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
}