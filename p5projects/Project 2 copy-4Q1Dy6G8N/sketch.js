let sound;
let hasPlayed = false;
const serial = new p5.WebSerial();
let portButton;
let inData;                   
let outByte = 0; 
let pin = 0;
function preload(){
  sound = loadSound("song.mp3");
}

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
  background(220);
   
  
  

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
  pin = Number(inData);
  //console.log(inData);
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

