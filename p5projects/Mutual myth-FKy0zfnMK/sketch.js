let circlelist = []
let circletimer= 0

function setup() {
  createCanvas(400, 450);
}

function draw() {
  background("#0D0C0C");
  
  for ( i = 0; i < 200; i++) {
    x = random(400);
     y = random(450);
    noFill()
    stroke("#43CC54");
    rect(x, y, 30, 30);
    stroke("#4C84AF");
    rect(x, y, 20, 20);
  }
}

