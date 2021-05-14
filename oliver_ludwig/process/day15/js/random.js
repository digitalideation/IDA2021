let images = new Array();
/* Pfade sind vom HTML File her gesehen! */
images[0] = "img/astronaut_2_web.jpg";
images[1] = "img/astronaut_3_web.jpg";
images[2] = "img/astronaut_web.jpg";
images[3] = "img/astronaut_2_web.jpg";
images[4] = "img/astronaut_2_web.jpg";



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

    document.getElementById('unsplash_random').style.display='hide';
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