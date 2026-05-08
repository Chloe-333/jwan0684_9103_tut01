function setup() {
  createCanvas(400, 400);
  background(0);
  angleMode(DEGREES);
}
  
function draw() {
  // Set the background to black with an alpha value of 1,
  // so that the dot drawn has a visible trail
  background(0, 1);
  
  // Move the origin position to the centre of the canvas
  translate(width / 2, height / 2);

  // Slowly rotate the co-ordinate system
  // (effectively rotating the canvas around the origin)
  // Try changing the number 1600 to see what patterns you can make
  rotate(frameCount * 0.25); // rotate 0.25 degrees per frame
  
  // Calculate translateX and translate Y, 
  // so that the dot follows an elliptical pattern
  let translateX = sin(frameCount) * width / 8;
  let translateY = cos(frameCount) * height / 4; 
  
  // Move the origin position again using translateX and translateY
  translate(translateX, translateY);
  
  // Draw the dot by drawing a circle with diameter 5 
  // at the current origin (0,0) position, which has 
  // been manipulated by the two calls to translate() above
  noStroke();
  fill(255);
  circle(0, 0, 5);

  // Draw another dot orbiting the first dot
  // You can adjust the following value to change the speed of the second dot
  let angle = frameCount * 5; // move 5 degrees every frame
  let orbitDistance = 5; // Distance from the first dot
  let orbitX = cos(angle) * orbitDistance;
  let orbitY = sin(angle) * orbitDistance;

  translate(orbitX, orbitY);
  fill(255, 0, 0); // Make the second dot red
  circle(0, 0, 3); // And slightly smaller than the first dot
}