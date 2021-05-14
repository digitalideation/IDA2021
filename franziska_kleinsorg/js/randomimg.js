
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