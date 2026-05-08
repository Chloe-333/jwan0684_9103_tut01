// We need variables to store the current square size between frames
// as well as the target square size based on a random value calculated
// every 120 frames
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

  // The initial target square size is set to half the current square size
  targetSquareSize = squareSize / 2;
}

function draw() {
  // Every 120 frames (or 2 seconds assuming the sketch is running at 
  // 60 frames per second) a new target size is calculated at random
  if (frameCount % 120 == 0) {
    targetSquareSize = random(height / 2);
  }

  // The new square size is calculated by linearly interpolating between the 
  // last square size drawn and the target square size that gets updated
  // every 120 frames
  squareSize = lerp(squareSize, targetSquareSize, easing);

  // Draw the square using the updated size in the middle of the canvas
  square(width / 2, height / 2, squareSize);
}