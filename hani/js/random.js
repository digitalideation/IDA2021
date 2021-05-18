let images = new Array();
/* Pfade sind vom HTML File her gesehen! */
images[0] = "images/night.jpg";
images[1] = "images/nighstar.jpg";
images[2] = "images/nighte.jpg";




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

function getRandImgAPI() {

    let img = document.createElement('img');
    //get image from unsplash with the value from the form
    //simple: <img src="https://source.unsplash.com/random/?city,night" />
    //
    img.src = "https://source.unsplash.com/random/?" + document.getElementById("topic").value;

    // remove old image
    let oldimages = document.getElementById("platzhalter").getElementsByTagName('img');
    if (oldimages.length > 0) {
        document.getElementById("platzhalter").removeChild(oldimages[0]);
    }
    // END remove old images

    //append new image to element with id platzhalter
    document.getElementById("platzhalter").appendChild(img);
}