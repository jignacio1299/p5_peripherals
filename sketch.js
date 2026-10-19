let webcam;

function setup() {
  createCanvas(750, 750);
  background(220);
  webcam = createCapture(VIDEO, {flipped:true});
  webcam.size(640, 480);
  webcam.hide();
}

function draw() {
  background(220);
  image(webcam, 0, 0);
  filter(POSTERIZE);
}


// let circles = [];

// function setup() {
//   createCanvas(400, 400);
// }


// function draw() {
//   for(let circle of circles) {
//     fill(circle.color);
//     ellipse(circle.x, circle.y, 50);
//   }
  
//   // check if mouse is pressed and draw circle while dragging
  
//   if(mouseIsPressed) {
//     let newCircle = {
//       x: mouseX,
//       y: mouseY,
//       color: color(random(255), random(255), random(255))
      
//     }
//     circles.push(newCircle);
//   }
// }

// function mousePressed() {
//   //add a circle where cursor is
//   // let new 
// }

// function draw() {
//   background(220);
//   line(mouseX, 0, mouseX, height);
//   line(0, mouseY, width, mouseY);
//   textAlign(CENTER);
//   textSize(16);
//   // Display mouseIsPressed variable
//   text(textArray, 25, 60);
  
//   if(mouseButton.right) {
//     text("right clicked", 25, 70);
//   }
//   if(mouseButton.left) {
//     circle(200, 200, 50);
//   }
//   if(mouseButton.middle) {
//     triangle(150, 150, 200, 200, 100, 100);
//   }
  
//   // text(key, 200, 200);
//   if(key === 'w') {
//     rect(50, 50, 150, 150);
//   }
  
//   if(keyIsDown(LEFT_ARROW)) {
//     fill('purple');
//   }
//   if(keyIsDown(SHIFT) && keyIsDown(w)) {
//     fill('red');
//   }
// }

// function mousePressed() {
//   push();
//   fill('purple');
//   noStroke();
//   triangle(0, 0, 400, 0, 200, 400);
//   pop();
// }
// function keyPressed() {
//   // textArray.push(key);
// }
