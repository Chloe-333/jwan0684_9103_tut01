// We need variables to store the current square size between frames
// as well as the target square size based on the current y-posistion
// of the mouse
let squareSize;
let targetSquareSize;

// Set the easing value to a constant
// Try changing this value to see how it affects the transition
const easing = 0.05;
  
function setup() {
  createCanvas(windowWidth, windowHeight);
  background(230);

  // We want the squares drawn to fade over time, so use a semi-transparent fill
  fill(20, 20); 
  stroke(170);
  
  // We want to draw the square in the middle of the canvas, 
  // which is easier to achieve using rectMode(CENTER)
  rectMode(CENTER); 

  // Start with a random square size as the nominated current size
  squareSize = random(height);
}

function draw() {
  // Try uncomment the following line to see what this looks like without
  // accumulating the squares.
  //background(230) 

  // The target square size is based on the y-position of the mouse
  // By using the abs() function, we calculate the same size of the square 
  // regardless whether the mouse cursor is above or below the canvas midpoint. 
  targetSquareSize = 2 * abs(mouseY - height / 2);
  
  // The new square size is calculated by linearly interpolating between the 
  // last square size drawn and the target square size as determined using the 
  // mouse's y-position.
  squareSize = lerp(squareSize, targetSquareSize, easing);

  // Draw the square using the updated size in the middle of the canvas
  square(width / 2, height / 2, squareSize);
}