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
  
  // Let's set the colour mode to HSB. This means that we use Hue, Saturation and Brightness  
  // to define colours, not RGB. 
  // Hue is the colour, saturation is how much of the colour is in the mix and brightness 
  // is how bright the colour is. 
  colorMode(HSB);

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
  background(0, 0, 100);
  noStroke();
  fill(0);

  drawValues("Random values", 50, 70, randomNumberArray);
  drawValues("Perlin noise values", 50, 280, perlinNoiseArray);

  drawNumbersAsColours("Random numbers as hue", 300, 70, randomNumberArray);
  drawNumbersAsColours("Perlin noise as hue", 300, 280, perlinNoiseArray);

  drawNumbersAsCircleSize("Random numbers as circle size", 600, 70, randomNumberArray);
  drawNumbersAsCircleSize("Perlin noise as circle size", 600, 280, perlinNoiseArray);
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

// A function to draw the array values as rectangles where the fill is derived from each
// value of the array. 
// This function takes a title, an x and y positio,n and an array of values to draw.
function drawNumbersAsColours(title, x, y, randomOrNoiseArray) {
  // Let's draw a text title
  text(title, x, y);

  // We use push here to save the current fill style so we can pop it back after we have
  // drawn the rectangles.
  push();
  for (let i = 0; i < valueArrayLength; i++) {
    // We will make an HSB colour where the hue is derived from each value of the array. 
    // And the saturation and brightness are both set to 100 (maximum).       
    fill(randomOrNoiseArray[i] * 360, 100, 100);
    rect(x + (i * 200) / valueArrayLength, y + 130, 200 / valueArrayLength, -100);
  }
  
  // Pop will restore the fill style to what it was before the push.
  pop();
}

// A function to draw a circle where the size is derived from the array values moving along
// the array each frame.
// This function takes a title, an x and y position and an array of values to draw.
function drawNumbersAsCircleSize(title, x, y, randomOrNoiseArray) {
  // Let's draw a text title
  text(title, x, y);

  // frameCount is a variable that is built into p5.js that increments each frame.
  // We will use the remainder operator to loop through the array each frame.
  // It will give us the remainder of the division of frameCount by the length of the array.
  // This will give us a value between 0 and the length of the array no matter how many 
  // frames have passed.
  ellipse(x + 150, y + 80, 50 + randomOrNoiseArray[frameCount % valueArrayLength] * 50);
}