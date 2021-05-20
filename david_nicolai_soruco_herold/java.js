'use strict';

/*const anderename = document.getElementById("bild");*/
/*const irgenename = document.getElementById("sinput");*/
/*const bildsplash = document.getElementById("bildsplash");*/


//irgenename.addEventListener("change", funktion1);
//irgenename.addEventListener("keypress", updateImg);


const anzahlfelder = 11
for (var i = 1;i <= anzahlfelder;i++){
    console.log(i);
    var irgenename = document.getElementById("sinput"+i);
    irgenename.addEventListener("keypress", updateImg);
}
function updateImg(e) {
    if (e.key !== 'Enter') {
        return;
    }
    const mysinput = e.target;
    const mybild = document.getElementById(mysinput.id +"-bild");

    var rnd = getRandomIntInclusive(0, 2);
    console.log(rnd);

    if (rnd < 1) {
        fetchWikimedia(mysinput, mybild);
    } else if (rnd === 2) {
        fetchFlickr(mysinput, mybild);
    } else {
        fetchUnsplash(mysinput, mybild);
    }
}

async function fetchWikimedia(mysinput, mybild) {
    /*
     get_page_images.js
 
     MediaWiki API Demos
     Demo of `Images` module: Send a GET request to obtain a JSON
     object listing all of the image files embedded on a single page
 
     MIT License
     */

    var url = "https://commons.wikimedia.org/w/api.php";
    var imgs = [];

    var params = {
        action: "query",
        prop: "imageinfo",
        titles: mysinput.value,
        format: "json",
        redirects: "1",
        iiprop: "url",
        generator: "images"
    };

    url = url + "?origin=*";
    Object.keys(params).forEach(function (key) { url += "&" + key + "=" + params[key]; });

    try {
        const res = await fetch(url);
        console.log(res.status);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const jres = await res.json();
        for (var i in jres.query.pages) {
            imgs.push(jres.query.pages[i]);
        }
        const zufall = getRandomIntInclusive(1, imgs.length)
        var img = imgs[zufall-1].imageinfo[0].url;
        console.log(img);
        mybild.src = img;
    } catch (error) {
        console.warn(error);
        fetchFlickr(e);
    }
}

function fetchUnsplash(mysinput, mybild) {
    const unsplash = 'https://source.unsplash.com/random/900x700/?'
    mybild.src = unsplash + mysinput.value;
}

async function fetchFlickr(mysinput, mybild) {
    
    const flickrApikey = document.getElementById("apikey").value;

    const photosearch = "https://www.flickr.com/services/rest/?method=flickr.photos.search&api_key=" + flickrApikey + "&text=" + mysinput.value + "&license=1,2,3,4,5,6,7,8,9,10&accuracy=1&media=photos&format=json&nojsoncallback=1";
    var photos = [];

    var flickrPhotoId = 0;
    try {
        const res = await fetch(photosearch);
        console.log(res.status);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        const jres = await res.json();
        for (var i in jres.photos.photo) {
            photos.push(jres.photos.photo[i]);
        }
        const zufall = getRandomIntInclusive(1, photos.length)
        flickrPhotoId = photos[zufall - 1].id;
        console.log(flickrPhotoId);
    } catch (error) {
        console.warn(error);
        fetchUnsplash(e);
    }

    const photourl = "https://www.flickr.com/services/rest/?method=flickr.photos.getInfo&api_key=" + flickrApikey + "&photo_id=" + flickrPhotoId + "&format=json&nojsoncallback=1";
    var flickrPhotoInfo;
    try {
        const res = await fetch(photourl);
        console.log(res.status);
        if (!res.ok) {
            throw new Error('Network response was not ok');
        }
        flickrPhotoInfo = await res.json();
        console.log(flickrPhotoInfo);
        const flickrPhotoUrl = "https://live.staticflickr.com/" + flickrPhotoInfo.photo.server + "/" + flickrPhotoInfo.photo.id + "_" + flickrPhotoInfo.photo.originalsecret + "_o." + flickrPhotoInfo.photo.originalformat;
        mybild.src = flickrPhotoUrl;
    } catch (error) {
        console.warn(error);
        fetchUnsplash(e);
    }
}

/*quelle https://developer.mozilla.org/de/docs/Web/JavaScript/Reference/Global_Objects/Math/random*/
function getRandomInt(min, max) {
    var min = Math.ceil(min);
    var max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function getRandomIntInclusive(min, max) {
    // Create byte array and fill with 1 random number
    var byteArray = new Uint8Array(1);
    window.crypto.getRandomValues(byteArray);

    var range = max - min + 1;
    var max_range = 256;
    if (range === 0)
        return getRandomInt(min, max);
    if (byteArray[0] >= Math.floor(max_range / range) * range)
        return getRandomInt(min, max);
    return min + (byteArray[0] % range);
}