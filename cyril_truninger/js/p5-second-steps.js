//Appending Canvas
let box = window.document.getElementById('container');
let width = box.offsetWidth;
let height = box.offsetHeight;

color c = color(0);
float x = 0;
float y = 100;
float speed = 1;

function setup() {
    let cvs = createCanvas(width,height);
    cvs.parent("container");
   
}

function draw() {
    rectMode(CENTER);
    rect(200,200,50,120);
    ellipse(200,140,80,80);
    ellipse(180,140,12,12);
    ellipse(220, 140,12,12);
    line(225,200,240,220);
    line(175,200,160,220);
    line(175,260,160,300);
    line(225, 260,240,300);
    stroke(166);
}

function move() {
    x = x + speed;
    if (x > width) {
        x = 0;
    }
}


function display() {
    fill(c);
    rect(x, y, 30, 10);
}


// console.log(width, height);
// let sketch = function (container) {
//     container.setup = function () {
//         container.createCanvas(width, height);
//         container.background(0);
//         }
//     }

// new p5(sketch, window.document.getElementById('container'));



// let sketch.drawsome = function() {
//     if (mouseIsPressed) {
//         sketch.fill(0);
//     } else {
//         sketch.fill(255);
//     }
//     sketch.ellipse(mouseX, mouseY, 80, 80);
// }

// new p5(sketch, window.document.getElementById('container'));




// Defining Variables

// J5 Set Up



// let mic, fft;

// function setup() {

//     noFill();

//     mic = new p5.AudioIn();
//     mic.start();
//     fft = new p5.FFT();
//     fft.setInput(mic);
// }

// function draw() {
//     background(200);

//     let spectrum = fft.analyze();

//     beginShape();
//     for (i = 0; i < spectrum.length; i++) {
//         vertex(i, map(spectrum[i], 0, 255, height, 0));
//     }
//     endShape();
// }