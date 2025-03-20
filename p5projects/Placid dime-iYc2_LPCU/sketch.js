const serial = new p5.WebSerial();
let portButton;
let inData;                   
let outByte = 0;              
let blinkvalue = 0;
let blinkspeed = 0;
function setup() {
  createCanvas(400, 400);
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  }
  navigator.serial.addEventListener("connect", portConnect);
  navigator.serial.addEventListener("disconnect", portDisconnect);
  // check for any ports that are available:
  serial.getPorts();
  // if there's no port chosen, choose one:
  serial.on("noport", makePortButton);
  // open whatever port is available:
  serial.on("portavailable", openPort);
  // handle serial errors:
  serial.on("requesterror", portError);
  // handle any incoming serial data:
  serial.on("data", serialEvent);
  serial.on("close", makePortButton);
}

function draw() {
  if (blinkvalue >200){
    blinkspeed = 5;
  }
  if (blinkvalue >50 && blinkvalue < 200){
    blinkspeed = 15;
  }
  if (blinkvalue < 50){
    blinkspeed = 255
  }
  let opacity = map(sin(frameCount / blinkspeed), -1, 1, 20, 100);
  noStroke();
  background(220);
  fill(240,0,100,opacity);
  heart(200,70,320);
  fill(220,0,100, opacity);
  heart(200,100,250);
  fill(230,0,100);
  heart(200,140,150)
  console.log(blinkvalue);
}
function makePortButton() {
  // create and position a port chooser button:
  portButton = createButton("choose port");
  portButton.position(10, 10);
  // give the port button a mousepressed handler:
  portButton.mousePressed(choosePort);
}
 
// make the port selector window appear:
function choosePort() {
  if (portButton) portButton.show();
  serial.requestPort();
}
 
// open the selected port, and make the port 
// button invisible:
function openPort() {
  // wait for the serial.open promise to return,
  // then call the initiateSerial function
  serial.open().then(initiateSerial);
 
  // once the port opens, let the user know:
  function initiateSerial() {
    console.log("port open");
  }
  // hide the port button once a port is chosen:
  if (portButton) portButton.hide();
}
 
// pop up an alert if there's a port error:
function portError(err) {
  alert("Serial port error: " + err);
}
function serialEvent() {
  // read one byte of data and store the raw data in inData
  inData = serial.read();
  // convert raw data to a number
  blinkvalue = Number(inData);
  // only use console.log for debugging
  // remove it after testing, otherwise console.log will
  // slow down or even crash the sketch
  // console.log(inData);
}
 
// try to connect if a new serial port 
// gets added (i.e. plugged in via USB):
function portConnect() {
  console.log("port connected");
  serial.getPorts();
}
 
// if a port is disconnected:
function portDisconnect() {
  serial.close();
  console.log("port disconnected");
}
 
function closePort() {
  serial.close();
}

function heart(x, y, size) {
  beginShape();
  vertex(x, y);
  bezierVertex(x - size / 2, y - size / 2, x - size, y + size / 3, x, y + size);
  bezierVertex(x + size, y + size / 3, x + size / 2, y - size / 2, x, y);
  endShape(CLOSE);
}