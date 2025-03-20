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
  createCanvas(600, 600);
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
