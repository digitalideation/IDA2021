
let images = new Array();
/* Pfade sind vom HTML File her gesehen! */
images[0] = "../img/DSCN9041.JPG";
images[1] = "../img/DSCN8975.JPG";
images[2] = "../img/DSC04698.JPG";
images[3] = "../img/DSC04639.JPG";
images[4] = "../img/DSC04507.JPG";
images[5] = "../img/DSC04431.JPG";
images[6] = "../img/DSC04341.JPG";
images[7] = "../img/DSC04302.JPG";
images[8] = "../img/DSC04293.JPG";
images[9] = "../img/DSC04199.JPG";
images[10] = "../img/DSC04164.JPG";
images[11] = "../img/DSC03998.JPG";
images[12] = "../img/DSC03991.JPG";
images[13] = "../img/DSC04467.JPG";
images[14] = "../img/30072018_050.JPG";
images[15] = "../img/03082018_125a.JPG";
images[16] = "../img/02082018_327.JPG";
images[17] = "../img/02082018_316.JPG";
images[18] = "../img/02082018_282.JPG";
images[19] = "../img/DSC05464.JPG";
images[20] = "../img/DSC05041.JPG";
images[21] = "../img/DSC04811.JPG";
images[22] = "../img/DSC04703.JPG";
images[23] = "../img/DSC04625.JPG";
images[24] = "../img/DSC04609.JPG";
images[25] = "../img/31072018_198.JPG";
images[26] = "../img/IMG-20180806-WA0022.jpg";
images[27] = "../img/IMG_20180805_215538.jpg";




function getRandImg() {
    //get random number within 0 and amount of entries in array
    let wuerfel = Math.floor(Math.random() * images.length);
    let img = document.createElement('img');
    img.src = images[wuerfel];

    // remove old image
    let oldimages = document.getElementById("platzhalter").getElementsByTagName('img');
    if (oldimages.length > 0) {
        document.getElementById("platzhalter").removeChild(oldimages[0]);
    }
    // END remove old images

    //append new image to element with id platzhalter
    document.getElementById("platzhalter").appendChild(img);
}