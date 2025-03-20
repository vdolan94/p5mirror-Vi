let sound, reverb;
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
   if (frameCount > 120 && hasPlayed === false) {
    sound.play();
    hasPlayed = true;
  }
       if (pin > 50 && pin < 255) {
    if (pin < 100) {
      // Add reverb with specific settings when pin is between 50 and 100
      if (!reverb) {
        reverb = new p5.Reverb();
        sound.disconnect();
        reverb.process(sound, 3, 2);
      }
    } else {
    // If pin is not within the specified range, disconnect reverb
    if (pin<50) {
      reverb.disconnect();
      reverb = null; // Reset reverb variable
    }
  }
  //console.log(pin);
  

}}

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



