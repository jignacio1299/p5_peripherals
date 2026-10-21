let x, y; // Current cursor position
let px, py; // Previous cursor position
let brushSize = 20; // Brush thickness
let drawColor; // Brush color
let rainbowMode; 

let prevButtons = [];
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(220);
  
  x = width/2;
  y = height/2;
  px = x;
  py = y;
  
  drawColor = color(0);
  strokeWeight(brushSize);
  textAlign(CENTER, CENTER);
}

function draw() {
  // Create instructions when no controllers are connected
  let gp = navigator.getGamepads()[0];
  if(!gp) {
    fill(0);
    noStroke();
    textSize(24);
    text("Connect gamepad and press any button", width/2, height/2);
    return;
  }
  
  // Left joystick
  let deadzone = 0.15;
  let dx = abs(gp.axes[0]) > deadzone ? gp.axes[0] : 0;
  let dy = abs(gp.axes[1]) > deadzone ? gp.axes[1] : 0;
  
  let speed = 8;
  px = x;
  py = y;
  
  x += dx * speed;
  y += dy * speed;
  
  x = constrain(x, 0, width);
  y = constrain(y, 0,   height);
  
  // rainbow mode
  
  if(rainbowMode) {
    drawColor = color(random(255), random(255), random(255));
  }
  stroke(drawColor);
  strokeWeight(brushSize);
  
  line(px, py, x, y);
  
  // triggers
  let lt = gp.buttons[6].value;
  let rt = gp.buttons[7].value;
  
  // brushSize = map(rightTrigger - leftTrigger, -1, 1, 1, 30);
  brushSize = constrain(brushSize, 1, 30);
  
  handleButtons(gp);
}

function handleButtons(gp) {
  gp.buttons.forEach((button, index) => {
    let currPressed = button.pressed;
    let prevPressed = prevButtons[index] || false;
    
    // newly pressed
    if(currPressed && !prevPressed) {
      switch(index) {
        case 0: // A
          drawColor = color(random(255), random(255), random(255));
          rainbow = false;
          break;
        case 1: // B
          background(240);
          break;
        case 2: // Y
          rainbowMode = !rainbowMode;
          break
        case 3: // X
          saveCanvas('etcha_gp', "png");
          break;
      }
    }
    
    prevButtons[index] = currPressed;
  });
}

// function mousePressed() {
//   if(started) {
//     mic.disconnect();
//   }
//   else {
//     mic.connect();
//   }
//   // mic.start();let webcam;


// }

// let mic, delay, filter, fft;
// let size;

// function setup() {
//   createCanvas(750, 750);
//   background(220);
//   // WEBCAM SETUP
//   webcam = createCapture(VIDEO, {flipped:true});
//   webcam.size(640, 480);
//   webcam.hide();
  
//   //MIC SETUP
//   mic = new p5.AudioIn();
//   fft = new p5.FFT();
//   fft.setInput(mic);
//   mic.start();
//   // delay = new p5.Delay(0.74, 0.1);
//   // filter = new p5.Biquad(600, "bandpass");  
//   // mic.disconnect();
//   // mic.connect(delay);
//   // delay.connect(filter);
  
// }

// function draw() {
  
//   {
//     push();
    
//     // Scale the volume (0 - 1) to (10 - 300)
//     let size = map(vol, 0, 1, 10, 300);  
//     fill(color("black"));
//     ellipse(375, 375, size);
    
//     pop();
    
//   }
  
//   {
//     push();
    
//     let vol = mic.getLevel();  
//     let waveformD = fft.waveform();
//     stroke(225);
//     strokeWeight(5);
//     noFill();
//     beginShape();
//     for(let i = 0; i < waveformD.length; i++) {
//       let x = map(i, 0, waveformD.length, 0, width);
//       let y = map(waveformD[i], -1, 1, 0, height);  
//       // vertex(map(), waveformD.)
//     }
//     pop();
//   }
//   tint(255, vol * 50, vol + 100, vol * 10);
//   image(webcam, 0, 0);
//   filter(POSTERIZE);
  
// }


// // let circles = [];

// // function setup() {
// //   createCanvas(400, 400);
// // }


// // function draw() {
// //   for(let circle of circles) {
// //     fill(circle.color);
// //     ellipse(circle.x, circle.y, 50);
// //   }
  
// //   // check if mouse is pressed and draw circle while dragging
  
// //   if(mouseIsPressed) {
// //     let newCircle = {
// //       x: mouseX,
// //       y: mouseY,
// //       color: color(random(255), random(255), random(255))
      
// //     }
// //     circles.push(newCircle);
// //   }
// // }

// // function mousePressed() {
// //   //add a circle where cursor is
// //   // let new 
// // }

// // function draw() {
// //   background(220);
// //   line(mouseX, 0, mouseX, height);
// //   line(0, mouseY, width, mouseY);
// //   textAlign(CENTER);
// //   textSize(16);
// //   // Display mouseIsPressed variable
// //   text(textArray, 25, 60);
  
// //   if(mouseButton.right) {
// //     text("right clicked", 25, 70);
// //   }
// //   if(mouseButton.left) {
// //     circle(200, 200, 50);
// //   }
// //   if(mouseButton.middle) {
// //     triangle(150, 150, 200, 200, 100, 100);
// //   }
  
// //   // text(key, 200, 200);
// //   if(key === 'w') {
// //     rect(50, 50, 150, 150);
// //   }
  
// //   if(keyIsDown(LEFT_ARROW)) {
// //     fill('purple');
// //   }
// //   if(keyIsDown(SHIFT) && keyIsDown(w)) {
// //     fill('red');
// //   }
// // }

// // function mousePressed() {
// //   push();
// //   fill('purple');
// //   noStroke();
// //   triangle(0, 0, 400, 0, 200, 400);
// //   pop();
// // }
// // function keyPressed() {
// //   // textArray.push(key);
// // }
