let scroll = 0;
function setup() {
  createCanvas(windowWidth,windowHeight);
  clip1 = createVideo('clip1.mp4');
  clip1.size(width , height );
  clip1.hide();
  clip2 = createVideo('clip2.mp4')
  clip2.size(width,height);
  clip2.hide();
  clip3 = createVideo('clip3.mp4')
  clip3.size(width,height);
  clip3.hide();
  clip4 = createVideo('clip4.mp4')
  clip4.size(width,height);
  clip4.hide();
  clip5 = createVideo('clip5.mp4')
  clip5.size(width,height);
  clip5.hide();
  clip6 = createVideo('clip6.mp4')
  clip6.size(width,height);
  clip6.hide();
  clip7 = createVideo('clip7.mp4')
  clip7.size(width,height);
  clip7.hide();
  clip8 = createVideo('clip8.mp4')
  clip8.size(width,height);
  clip8.hide();
  clip9 = createVideo('clip9.mp4')
  clip9.size(width,height);
  clip9.hide();
  clip10 = createVideo('clip10.mp4')
  clip10.size(width,height);
  clip10.hide();
  noCursor();
}

function draw() {
  background(220);
  tint(255,100)
  image(clip1,0,0)
  image(clip2,0,0)
  image(clip3,0,0)
  image(clip4,0,0)
  image(clip5,0,0)
  tint(255,70)
  image(clip6,0,0)
  image(clip8,0,0)
  image(clip9,0,0)
  image(clip10,0,0)
  image(clip7,0,0)
  //clip1
  if (scroll >= 0 && scroll <150){
  let opacity = map(scroll,0,150,0,255)
  tint(255, opacity);
  image(clip1,0,0)
  }
  if (scroll >= 150 && scroll <2000){
  let opacity = map(scroll,150,2000,200,0)
  tint(255, opacity);
  image(clip1,0,0)
  }
  //clip2
  if (scroll >= 125 && scroll <300){
    let opacity = map(scroll,125,300,0,255)
  tint(255, opacity);
  image(clip2,0,0)
  }
  if(scroll >= 300 && scroll<2000){
    let opacity = map(scroll,275,2000,255,0)
  tint(255, opacity);
  image(clip2,0,0)
  }
  //clip7
  if (scroll >= 275 && scroll <500){
    let opacity = map(scroll,275,500,0,255)
  tint(255, opacity);
  image(clip7,0,0)
  }
  if(scroll >= 500 && scroll<2000){
    let opacity = map(scroll,500,2000,255,0)
  tint(255, opacity);
  image(clip7,0,0)
  }
  //clip3
  if (scroll >= 475 && scroll <700){
    let opacity = map(scroll,475,700,0,255)
  tint(255, opacity);
  image(clip3,0,0)
  }
  if(scroll >= 700 && scroll<2000){
    let opacity = map(scroll,700,2000,255,0)
  tint(255, opacity);
  image(clip3,0,0)
  }
  //clip4
  if (scroll >= 675 && scroll <900){
    let opacity = map(scroll,675,900,0,255)
  tint(255, opacity);
  image(clip4,0,0)
  }
  if(scroll >= 900 && scroll<2000){
    let opacity = map(scroll,900,2000,255,0)
  tint(255, opacity);
  image(clip4,0,0)
  }
  //clip5
  if (scroll >= 875 && scroll <1100){
    let opacity = map(scroll,875,1100,0,255)
  tint(255, opacity);
  image(clip5,0,0)
  }
  if(scroll >= 1100 && scroll<200){
    let opacity = map(scroll,1100,200,255,0)
  tint(255, opacity);
  image(clip5,0,0)
  }
  //clip6
  if (scroll >= 1000 && scroll <1200){
    let opacity = map(scroll,1000,1200,0,255)
  tint(255, opacity);
  image(clip6,0,0)
  }
  if(scroll >= 1200 && scroll<2000){
    let opacity = map(scroll,1200,2000,255,0)
  tint(255, opacity);
  image(clip6,0,0)
  }
  //clip8
  if (scroll >= 1150 && scroll <1300){
    let opacity = map(scroll,1150,1300,0,255)
  tint(255, opacity);
  image(clip8,0,0)
  }
  if(scroll >= 1300 && scroll<2000){
    let opacity = map(scroll,1300,2000,255,0)
  tint(255, opacity);
  image(clip8,0,0)
  }
  //clip9
  if (scroll >= 1270 && scroll <1450){
    let opacity = map(scroll,1270,1450,0,255)
  tint(255, opacity);
  image(clip9,0,0)
  }
  if(scroll >= 1450 && scroll<2000){
    let opacity = map(scroll,1450,2000,255,0)
  tint(255, opacity);
  image(clip9,0,0)
  }
  //clip10
  if (scroll >= 1500 && scroll <1700){
    let opacity = map(scroll,1500,1700,0,255)
  tint(255, opacity);
  image(clip10,0,0)
  }
  if(scroll >= 1700 && scroll<2000){
    let opacity = map(scroll,1700,2000,255,0)
  tint(255, opacity);
  image(clip10,0,0)
  }
  //console.log(scroll)
  
  
}
function mousePressed(){
  clip1.loop();
  clip2.loop();
  clip3.loop();
  clip4.loop();
  clip5.loop();
  clip6.loop();
  clip7.loop();
  clip8.loop();
  clip9.loop();
  clip10.loop();
}

function mouseWheel(event) {
  // print(event.delta);
  //move the square according to the vertical scroll amount
  scroll += event.delta;
  if (scroll>1900){
    scroll = 1900
  }
  if (scroll<0){
    scroll = 0
  }
}