

// // function setup() {
// //   createCanvas(400, 1500);
// // }

// // function draw() {
// //   background(0);
// //   moveBubble = 5 * cos(frameCount / 2);
// //   if (key === "m" && keyIsPressed){
// //     bubble(200,1500)
// //   }
// // }
// // let y = 0
// // function bubble(xCor, yCor) {
// //   y = y + 10;
// //   noFill();
// //   strokeWeight(2);
// //   let opacity = 5;
// //   op = map(xCor,0,200,0,255)
// //   opback = map(xCor,)
// //   // if (y > 0 && y < 800) {
// //   //   stroke(255, opacity + y);
// //   // }
// //   //  else if (y >= 800 && y<1200) {
// //   //    stroke(255, 255, 255, 0);
// //   //  }
// //   // }
// //   stroke(op)
// //   circle(moveBubble + xCor, yCor - y, 15);
// // }

// let y = 0;
// let moveBubble = 0;
// let increasing = true; // Flag to track stroke direction
// const maxHeight = 500; // Maximum height for the bubble

// function setup() {
//   createCanvas(400, 1500);
// }

// function draw() {
//   background(0);

//   if (keyIsPressed && key === "m") {
//     bubble(200, 1500);
//   }
// }

let y = 0;
let moveBubble = 0;
const maxHeight = 500
function setup() {
  createCanvas(400, 1500);
}

function draw() {
  background(0);

  if (keyIsPressed && key === "m") {
    bubble(200, 1500);
  }
}

function bubble(xCor, yCor) {
  y += 10;
  moveBubble = 5 * cos(frameCount / 2);

  noFill();
  strokeWeight(2);

  if (y > 0 && y < 800) {
    let opacity = map(y, 0, 800, 0, 255);
    stroke(255, opacity);
  } else if (y >= 800 && y < 1200) {
    stroke(255, 0);
  }

  circle(moveBubble + xCor, yCor - y, 15);
}



