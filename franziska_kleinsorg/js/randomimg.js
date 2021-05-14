
let images = new Array();
/* Pfade sind vom HTML File her gesehen! */
images[0] = "../img/scan0026.jpg";
images[1] = "../img/scan0027.jpg";
images[2] = "../img/scan0028.jpg";
images[3] = "../img/scan0030.jpg";
images[4] = "../img/scan0032.jpg";



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