//Appending Canvas
let box = window.document.getElementById('container');
let width = box.offsetWidth;
let height = box.offsetHeight;

function setup() {
    let cvs = createCanvas(width,height);
    cvs.parent("container");
   
}

function draw() {
    if (mouseIsPressed) {
        fill(0);
    } else {
        fill(255);
    }
    ellipse(mouseX, mouseY, 80, 80);
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