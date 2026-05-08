class Head {
  display(x, y, angle, diameter, colour) {
    
    // your transformations go here
    translate(x, y);
    rotate(angle);
    scale(diameter);

    // Circular outline
    strokeWeight(0.01);
    ellipse(0, 0, 1);

    // Style for head
    fill(20);
    stroke(20);

    // Eye
    rect(-0.17, -0.33, 0.15, 0.15);
    line(-0.26, -0.33, -0.17, -0.33);
    line(-0.02, -0.18, -0.02, -0.09);

    // Nose
    rect(0.11, -0.48, 0.01, 0.59);
    line(0.02, 0.11, 0.11, 0.11);

    // Mouth
    rect(0.07, 0.11, 0.03, 0.27);
    rect(0.02, 0.22, 0.04, 0.01);

    // Chin
    rect(-0.05, 0.38, 0.11, 0.11);
    line(-0.12, 0.38, -0.05, 0.38);


  }
}
let head = null;

function setup() {
  createCanvas(500, 500);
  angleMode(DEGREES);

  // Instantiate a single head object 
  head = new Head();
}

function draw() {
  background(225);

  // Draw the head so that it:
  // - moves from left to right across the canvas,
  // - is centred vertically, 
  // - and rotates and grows over time.
  head.display(
    (frameCount % width), // frameCount % width will make sure the shapre moves to the right and resetsonce it reaches the end of the frame
    height / 2, // Stays at the vertical centre of the canvas
    frameCount, // rotate 1 degree every frame
    (frameCount % width) / width * 200, // alternative to map((frameCount % width), 0, width, 0, 200);
    color(245));
}

// Bauhaus Head Class
// The class has no constructor and a single display() method
// used to draw the Bauhaus emblem
class Head {
  display(x, y, angle, diameter, colour) {
    // The push() function saves any transformations and style settings
    // that might proceed a call to this method
    push();

    fill(colour);

    // Perform all transforms in the order: translate, rotate and scale
    translate(x, y);
    rotate(angle);
    scale(diameter);
    
    // Circular outline
    strokeWeight(0.01);
    ellipse(0, 0, 1);

    // Style for head
    fill(20);
    stroke(20);

    // Eye
    rect(-0.17, -0.33, 0.15, 0.15);
    line(-0.26, -0.33, -0.17, -0.33);
    line(-0.02, -0.18, -0.02, -0.09);

    // Nose
    rect(0.11, -0.48, 0.01, 0.59);
    line(0.02, 0.11, 0.11, 0.11);

    // Mouth
    rect(0.07, 0.11, 0.03, 0.27);
    rect(0.02, 0.22, 0.04, 0.01);

    // Chin
    rect(-0.05, 0.38, 0.11, 0.11);
    line(-0.12, 0.38, -0.05, 0.38);

    // The pop() function restores any transformations and style settings
    // that were saved by the earlier call to push()
    pop();
  }
}