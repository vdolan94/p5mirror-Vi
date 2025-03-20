let sound, reverb;
let hasPlayed = false;
let inData;
let outByte = 0;
let pin = 0;

function preload() {
  sound = loadSound("ZHU - Good Life (Without Poetry Edit).mp3");
}

function setup() {
  createCanvas(800, 400); // Adjust canvas size as needed
  fft = new p5.FFT(); // Initialize FFT
  if (!navigator.serial) {
    alert("WebSerial is not supported in this browser. Try Chrome or MS Edge.");
  }
  serial.getPorts().then((ports) => {
    if (ports.length > 0) {
      serial.connect(ports[0].portName);
    } else {
      alert("No serial ports available.");
    }
  });
}

function draw() {
  background(220);
  let wave = fft.waveform(); // Get waveform data

  // Visualize audio waveform
  for (let i = 0; i < width; i++) {
    let index = floor(map(i, 0, width, 0, wave.length));
    let x = i;
    let y = wave[index] * 100 + height / 2;
    stroke(255);
    point(x, y);
  }

  if (frameCount > 120 && !hasPlayed) {
    sound.play();
    hasPlayed = true;
  }

  if (pin > 50 && pin < 100) {
    reverb = new p5.Reverb();
    sound.disconnect();
    reverb.process(sound, 3, 2);
  }
  if (pin > 50 && pin < 255) {
    reverb = new p5.Reverb();
    sound.disconnect();
    reverb.process(sound, 10, 10);
  }
  console.log(pin);
}

function serialEvent() {
  inData = serial.read();
  if (inData) {
    pin = Number(inData);
  }
}
