// We will make some arrays to hold different kinds of random numbers.
let randomNumberArray = [];
let perlinNoiseArray = [];

// We will define the length of the array here so we can change it easily.
// We will use this in our for loops.
let valueArrayLength = 50;

// And now a variable to control how close together the perlin noise values are taken from
// the noise function.
// Try to change this and watch what happens to the noise values.
// It is like zooming in and out of the noise function.
let perlinNoiseStep = 0.1;

function setup() {
  createCanvas(1000, 500);

  // We will fill our array with random numbers between 0 and 1.
  for (let i = 0; i < valueArrayLength; i++) {
    randomNumberArray.push(random(0, 1));
  }

  // Perlin noise, through the noise function, creates a smooth gradient of values, kind of
  // like a waveform.
  // Now let's fill our perlin noise array with values close by each other from the noise
  // function.
  for (let i = 0; i < valueArrayLength; i += perlinNoiseStep) {
    perlinNoiseArray.push(noise(i));
  }

  // We will draw some text so we set the font size once here because it will be the same
  // for all text.
  textSize(20);
}

function draw() {
  // Set up our drawing environment
  background(255);
  noStroke();
  fill(0);

  drawValues("Random values", 50, 70, randomNumberArray);
  drawValues("Perlin noise values", 50, 280, perlinNoiseArray);
}

// A function to draw our array values as rectangles where the height is derived from each
// value of the array.
// This function takes a title, an x and y position, and an array of values to draw.
function drawValues(title, x, y, randomOrNoiseArray) {
  // Let's draw a text title
  text(title, x, y);

  // We will make all the rectangles fit into 200 pixels so the width of each rectangle 
  // will be calculated as 200 divided by the number of values in the array.
  // Note the negative sign in the height calculation - this is because the y-axis is 
  // inverted in p5.js so we need to multiply by -1 to make the rectangles draw upwards
  for (let i = 0; i < valueArrayLength; i++) {
    rect(x + (i * 200) / valueArrayLength, y + 130, 200 / valueArrayLength, randomOrNoiseArray[i] * -100);
  }
}