//song setup
let songs = [];
let currentSongIndex = -1;
let isPlaying = false;

// rain setup
let rain = [];
let numofRain = 20;
let currentlighting;
let switchlighting;

//edm setup
let lasers;
let lightvisible = true;
let lighttimer = 0;

//Circle setup
let circlelist = [];
let circletimer = 0;

function preload() {
  songs.push(loadSound("So Beautiful.mp3"));
  songs.push(loadSound("Vip.mp3"));
  songs.push(loadSound("I am not the Sun.mp3"));
}

function setup() {
  createCanvas(400, 600);
  //rain setup
  for (let i = 0; i < numofRain; i++) {
    rain.push(new Rain(-20, 0, 20));
  }
  switchlighting = millis() + random(1000, 2000);

  //edm setup
  lasers = new Laser();
}

function draw() {
  background(0);
  person();
  if (currentSongIndex === 0) {
    Rainscene();
  } else if (currentSongIndex === 1) {
    EDM();
  } else if (currentSongIndex === 2) {
    Orange();
  }
}
function mouseClicked() {
  if (currentSongIndex !== -1) {
    songs[currentSongIndex].stop();
  }
  currentSongIndex = (currentSongIndex + 1) % songs.length;
  songs[currentSongIndex].play();
  isPlaying = true;
}

function Rainscene() {
  if (currentlighting) {
    currentlighting();
  }

  if (millis() > switchlighting) {
    let lightings = random([lighting1, lighting2]);
    currentlighting = lightings;
    switchlighting = millis() + random(1000, 2000);
  }

  for (let drop of rain) {
    drop.update();
    drop.display();
  }
  person();
}

function EDM() {
  if (lighttimer > 7) {
    lightvisible = !lightvisible;
    lighttimer = 0;
  }
  if (lightvisible) {
    backlight();
    bluelight();
  }
  lighttimer++;
  //lightshow();
  lasers.update();
  lasers.display();
  backlight();
  person();
}

function Orange() {
  background(0);
  if (random(1) < 0.06) {
    let circle = new circles();
    circlelist.push(circle);
  }
  for (let circle of circlelist) {
    circle.display();
    circle.update();

    if (circle.opacity <= 0) {
      circlelist.splice(circle, 1);
    }
  }
  person();
}

function person() {
  fill(30);
  stroke(40);
  strokeWeight(12);
  circle(200, 400, 150);
  beginShape();
  curveVertex(300, 500);
  curveVertex(100, 500);
  curveVertex(100, 650);
  curveVertex(300, 650);
  curveVertex(300, 500);
  curveVertex(100, 500);
  curveVertex(100, 650);
  endShape();
  strokeWeight(4);
  beginShape();
  curveVertex(290, 370);
  curveVertex(290, 425);
  curveVertex(305, 410);
  curveVertex(305, 380);
  curveVertex(290, 370);
  curveVertex(290, 425);
  curveVertex(305, 410);
  endShape();
  beginShape();
  curveVertex(110, 370);
  curveVertex(110, 425);
  curveVertex(95, 410);
  curveVertex(95, 380);
  curveVertex(110, 370);
  curveVertex(110, 425);
  curveVertex(95, 410);
  endShape();
  noFill();
  stroke(40);
  strokeWeight(7);
  beginShape();
  curve(105, 900, 105, 370, 295, 370, 295, 900);
}

class Rain {
  constructor(x, y, z) {
    this.x = x;
    this.y = y;
    this.z = z;
    this.coloroption = [
      color(0, 0, 100),
      color(0, 0, 200),
      color(0, 0, 255),
      color(50, 0, 100),
      color(100, 0, 100),
      color(100, 0, 200),
    ];
    this.f = random(this.coloroption);
    this.speedy = random(1, 5);
  }

  checkEdges() {
    if (this.y > height) {
      this.y = 0;
      this.x = random(20, 380);
      this.z = random(5, 15);
    }
  }

  update() {
    this.checkEdges();
    this.y = this.y + this.speedy;
  }
  display() {
    fill(this.f);
    noStroke();
    circle(this.x, this.y, this.z);
    triangle(
      this.x + this.z / 2,
      this.y,
      this.x - this.z / 2,
      this.y,
      this.x,
      this.y - this.z * 1.25
    );
  }
}

function lighting1() {
  strokeWeight(2);
  stroke(40);
  line(40, 0, 25, 30);
  line(25, 30, 100, 70);
  line(100, 70, 160, 140);
  line(160, 140, 190, 280);

  line(45, 40, 40, 60);
  line(40, 60, 50, 80);
  line(50, 80, 45, 150);
  line(49, 100, 60, 130);

  line(115, 87, 130, 150);
  line(130, 150, 120, 190);
  line(123, 120, 140, 140);
  line(120, 190, 130, 200);

  line(173, 200, 200, 230);
  line(200, 230, 195, 245);
  line(195, 245, 200, 260);

  strokeWeight(3);
  stroke(30, 0, 250, 50);
  line(40, 0, 25, 30);
  line(25, 30, 100, 70);
  line(100, 70, 160, 140);
  line(160, 140, 190, 280);

  line(45, 40, 40, 60);
  line(40, 60, 50, 80);
  line(50, 80, 45, 150);
  line(49, 100, 60, 130);

  line(115, 87, 130, 150);
  line(130, 150, 120, 190);
  line(123, 120, 140, 140);
  line(120, 190, 130, 200);

  line(173, 200, 200, 230);
  line(200, 230, 195, 245);
  line(195, 245, 200, 260);
}

function lighting2() {
  stroke(40);
  strokeWeight(1.5);
  line(300, 0, 280, 50);
  line(280, 50, 300, 100);
  line(300, 100, 240, 200);
  line(240, 200, 260, 300);
  line(260, 300, 240, 350);

  line(288, 70, 270, 100);
  line(270, 100, 255, 110);
  line(255, 110, 260, 125);
  line(260, 125, 250, 140);

  line(282, 130, 270, 170);
  line(270, 170, 275, 180);
  line(275, 180, 270, 200);
  line(240, 200, 230, 250);
  line(230, 250, 235, 260);
  line(235, 260, 225, 280);

  stroke(200, 0, 250, 40);
  strokeWeight(3);
  line(300, 0, 280, 50);
  line(280, 50, 300, 100);
  line(300, 100, 240, 200);
  line(240, 200, 260, 300);
  line(260, 300, 240, 350);

  line(288, 70, 270, 100);
  line(270, 100, 255, 110);
  line(255, 110, 260, 125);
  line(260, 125, 250, 140);

  line(282, 130, 270, 170);
  line(270, 170, 275, 180);
  line(275, 180, 270, 200);
  line(240, 200, 230, 250);
  line(230, 250, 235, 260);
  line(235, 260, 225, 280);
}

function bluelight() {
  //blue lights
  fill(100);
  noStroke();
  fill(0, 50, 255, 200);
  triangle(0, 600, 400, -50, 400, 300);
  fill(80, 0, 255, 200);
  triangle(400, 600, 0, -50, 0, 300);
}

class Laser {
  constructor() {
    this.length = 600;
    this.strokeweight = 6;
    this.shortening = true;
  }
  update() {
    if (this.shortening) {
      this.length -= 2;
      if (this.length <= 100) {
        this.shortening = false;
      }
    } else {
      this.length += 2;
      if (this.length >= 600) {
        this.shortening = true;
      }
    }
    this.strokeweight = map(this.length, -100, 600, 5, 1);
  }
  display() {
    strokeWeight(this.strokeweight);
    stroke(255, 0, 0, 600 - this.length);
    line(200, 600, 150, 600 - this.length);
    line(200, 600, 250, 600 - this.length);
    line(150, 600, 50, 600 - this.length);
    line(250, 600, 350, 600 - this.length);
    line(100, 600, 0, 600 - this.length);
    line(300, 600, 400, 600 - this.length);
    line(50, 600, -20, 600 - this.length);
    line(350, 600, 420, 600 - this.length);

    line(0, 500, 600 - this.length, 300);
    line(0, 400, 600 - this.length, 200);
    line(0, 300, 600 - this.length, 100);

    line(400, 500, 600 - this.length, 300);
    line(400, 400, 600 - this.length, 200);
    line(400, 300, 600 - this.length, 100);
  }
}

function backlight() {
  noStroke();
  fill(0, 255, 0, 100);
  triangle(200, -100, -100, 600, 50, 600);
  triangle(200, -100, 500, 600, 350, 600);
  triangle(200, -100, 150, 600, 250, 600);
}

class circles {
  constructor() {
    this.x = random(0, 400);
    this.y = random(0, 600);
    this.s = random(30, 200);
    let shine1 = random(1000);
    this.opacity = 0;
    this.fade = 1;
    this.fadespeed = 2;
    this.coloroption = [
      color(250, 200, 0),
      color(250, 150, 0),
      color(250, 100, 50),
      color(200, 70, 50),
      color(250, 80, 0),
      color(190, 40, 0),
    ];
    this.f = random(this.coloroption);
  }

  display() {
    noStroke();
    fill(this.f);
    this.f.setAlpha(this.opacity);
    circle(this.x, this.y, this.s);
    circle(this.x, this.y, this.s * 1.2);
  }

  update() {
    this.opacity += this.fade * this.fadespeed;
    if (this.opacity >= 255) {
      this.opacity = 255;
      this.fade = -1;
    } else if (this.opacity <= 0) {
      this.opacity = 0;
      this.fade = 1;
    }
  }
}
