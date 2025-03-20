var song;
var fft;
const serial = new p5.WebSerial();
let portButton;
let inData;                   
let outByte = 0; 
let pin = 0; // Added variable to store pin value

function preload() {
  song = loadSound("song.mp3");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  fft = new p5.FFT();
  background(0);
  
  // Serial communication setup
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  }
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
  var wave = fft.waveform();
  background(0, 20);
  
  for (var i = 0; i < width; i++) {
    var index = floor(map(i, 0, width, 0, wave.length));
    var x = i;
    var y = wave[index] * 300 + height / 2;
    stroke(255);
    point(x, y);
  }
  
  // Check pinValue and play/pause the song
  if (pin > 100) {
    if (!song.isPlaying()) {
      song.play();
    }
  } else {
    if (song.isPlaying()) {
      song.pause();
    }
  }



}
console.log(pin)

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


