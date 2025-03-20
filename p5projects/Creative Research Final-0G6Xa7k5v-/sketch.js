// By Mandelgen
// Twitter : https://twitter.com/mandelgen
// Instagram : https:www.instagram.com/mandelgen
//Circle var
var eyeRadius = 0
var eyeVariance = 0
var distribution = 0
var length = 0
var lengthEvo = 0
var speedFactor = 0
var respawnFactor = 0
var n = 200;
var vents = [];

//pests
let pests = [];
var pst = 0

function setup() {
  createCanvas(400, 400);
  eyeRadius = random (0.01,0.2);
 eyeVariance = random ( 0.05, 0.01);
 distribution = random( 1.0,  0.05);
 length = random( 0.4,0.8);
 lengthEvo = random( 1.3,  0.5);
 speedFactor = random( 0.1,  0.01);
 respawnFactor = random( 0.03,  0.005);
	createCanvas(700, 700);
  for(let i = 0 ; i < n ; i ++) {
    vents.push(new Vent());
  }
  
  //pe
}

function draw() {
	background(0);
  //circles
  for(let i = 0 ; i < n ; i ++) {
    vents[i].show();
    vents[i].move();
  }
}

class Vent {
  
  constructor () {
		var x,y,rx,ry,a,la,s,c;
    this.initialize(); 
  }
  
  initialize() {
    var centerR = random(0, eyeVariance * width);
    var centerA = random(0, 2 * PI);
    this.x = width / 2.0 + centerR * cos(centerA);
    this.y = height / 2.0 + centerR * sin(centerA);
    
    var radiusRow = eyeRadius * width + pow(random(0, pow((width - eyeRadius * width * 2.0),distribution)), 1.0 / distribution);
    this.rx = radiusRow * random(0.8, 1.2);
    this.ry = radiusRow * random(0.8, 1.2);
    
    this.a = random(0, 2 * PI);
    
    this.la = pow(length * width,lengthEvo) / radiusRow * random(0.8, 1.2);
    
    this.c = color(random(230, 255));
    
    this.s = speedFactor * random(0.8, 1.2);
  }
  
  show() {
    
    noFill();
    stroke(this.c);
    arc(this.x, this.y, this.rx, this.ry, this.a, this.a + this.la);
    
  }
  
  move() {
    this.a += this.s;
    var r = random(0,1);
    if(r < respawnFactor) {
      this.initialize();
    }
  }
}

