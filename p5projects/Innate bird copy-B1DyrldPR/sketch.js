let x=0
let topcolor, bottomcolor;
let c = 1500;

const serial = new p5.WebSerial();
let portButton;
let inData;                  
let redValue = 0; 

function setup() {
  createCanvas(windowWidth, windowHeight+c);
  
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
  
  translate(0,-1500) // 0 - -1500
  x-=1
  topcolor = color(63,191,191)
  bottomcolor = color("rgb(82,3,3)")
  
  for(let y = 0; y < height; y++){
    n = map(y,0,height,0,1);
    
    let newcolor = lerpColor(topcolor,bottomcolor,n);
    stroke(newcolor);
    line(0,y,width,y)
    fill(255);
  
  console.log(redValue);
  }
  
  fill("white")
  rect(windowWidth/2-150,0,300,c)
  fill("rgb(0,0,0)")
  rect(windowWidth/2-150,(windowHeight+c)/2 - 50,300,c)
  noStroke()
  fill("white")
  rect(0,(windowHeight+c)/2 - 100, windowWidth,100)
  fill("rgb(0,0,0)")
  ellipse(windowWidth/2,(windowHeight+c)/2 - 50,300,50)
  fill("rgb(161,161,161)")
  rect(0,(windowHeight+c)/2,windowWidth,20);
  fill(255)
  text("raw incoming data: " + inData, 30, 50);
  text(frameRate(),100,100)
}

function windowResized(){
 // print("window is resized!");
  resizeCanvas(windowWidth,windowHeight);
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