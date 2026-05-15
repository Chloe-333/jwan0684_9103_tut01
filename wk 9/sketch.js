// This class will create and manage a random shape with noise.Part 4
class randomNoisyShape {
    // The constructor will take a type of shape as an argument - circle or square
    constructor(type) {
        this.type = type;
        // Randomise the x and y position of the shape. These are limited to 80% of the width and height
        this.x = random(0.8);
        this.y = random(0.8);

        // Randomise the size of the shape between 5% and 20% of the width
        this.size = random(0.05, 0.2);
        // Randomise the colour of the shape
        this.colour = [random(255), random(255), random(255)];
        // Randomise the noise scale between 0.1 and 0.35 - this will decide how much the shape will move. 
        // Try changing the range to see how it affects the shape's movement.
        this.noiseScale = random(0.1, 0.35);
        // Randomise the noise offset - this is where along the noise function the noise will start to be taken from.
        this.noiseLocation = random(10);
    }

    display() {
        // Use the instance colour to fill the shape.
        fill(this.colour);
        noStroke();
        // Get the smaller dimension of the canvas.
        let minDimension = min(width, height);  // Use the smaller dimension to maintain the aspect ratio.
        // Calculate the size of the shape based on the smaller dimension.
        // Remember the sizes were made in percentages, so this will scale correctly no matter what the width.
        let size = this.size * minDimension;

        // We have 2 noise values, one for the x and one for the y. We will sample the yNoise
        // from slightly further along the noise function by adding 10 to the x noise offset.
        let xNoise = noise(this.noiseLocation);
        let yNoise = noise(this.noiseLocation + 10);

        // The x position is the x value of the shape plus the xNoise value multiplied by the 
        // noise scale and the width of the canvas - same idea for the y position.
        let x = (this.x + xNoise * this.noiseScale) * width;
        let y = (this.y + yNoise * this.noiseScale) * height;

        // Draw the shape based on the type
        switch (this.type) {
            case 'circle':
                ellipse(x, y, size, size);
                break;
            case 'square':
                rect(x, y, size, size);
                break;
        }
        // Increment the noise offset each frame so we sample the next part of the noise function.
        this.noiseLocation += 0.01;
    }
}

// Create an array to hold the shapes.
let shapes = [];

function setup() {
    createCanvas(windowWidth, windowHeight);

    // Create 4 shapes and add them to the array.
    shapes.push(new randomNoisyShape('circle'));
    shapes.push(new randomNoisyShape('circle'));
    shapes.push(new randomNoisyShape('square'));
    shapes.push(new randomNoisyShape('square'));
}

function draw() {
    background(0);

    // Use a for-of loop to display the shapes.
    for (let shape of shapes) {
        shape.display();
    }
}

function windowResized() {
    // Resize the canvas when the window is resized. This will update the width and height variables 
    // that are used to calculate the size and position of the shapes.
    resizeCanvas(windowWidth, windowHeight);
}