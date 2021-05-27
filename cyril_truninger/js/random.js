
function getRandImgAPI() {

    let img = document.createElement('img');
    //get image from unsplash with the value from the form
    //simple: <img src="https://source.unsplash.com/random/?city,night" />
    //
    img.src = "https://source.unsplash.com/random/?" + document.getElementById("topic").value;
    
    let search = document.getElementById('topic').value;

    console.log(img.src);
    // remove old image
    let oldimages = document.getElementById('picture').getElementsByTagName('img');
    if (oldimages.length > 0) {
        document.getElementById('picture').removeChild(oldimages[0]);
    }
    // END remove old images
    //append new image to element with id platzhalter
    document.getElementById('picture').appendChild(img);
    document.getElementById('picture').firstChild.className = "picture";
    document.getElementById('search').innerHTML = search;
}
