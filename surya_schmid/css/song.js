


// ------------------------ THE OVERLAY ------------------------------->
/* Open when someone clicks on the span element */
function openNav() {
    document.getElementById("myNav").style.width = "40%";
}

/* Close when someone clicks on the "x" symbol inside the overlay */
function closeNav() {
    document.getElementById("myNav").style.width = "0%";
}
// ------------------------ THE OVERLAY ------------------------------->


// ------------------------ CURSOR ------------------------------->
var cursor = document.getElementById('cursor');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    cursor.style.left = x + "px";
    cursor.style.top = y + "px";
});

var outerCursor = document.getElementById('outerCursor');
document.addEventListener('mousemove', function (e) {
    var x = e.clientX;
    var y = e.clientY;
    outerCursor.style.left = x + "px";
    outerCursor.style.top = y + "px";
});

// ------------------------ CURSOR ------------------------------->



// ------------------------ MUSIC ------------------------------->
var myAudio = document.getElementById("myAudio");
var isPlaying = false;

function togglePlay() {
    isPlaying ? myAudio.pause() : myAudio.play();
};

myAudio.onplaying = function () {
    isPlaying = true;
    document.body.classList.remove('paused')
    document.body.classList.add('playing')
};

myAudio.onpause = function () {
    isPlaying = false;
    document.body.classList.remove('playing')
    document.body.classList.add('paused')
};
// ------------------------ MUSIC ------------------------------->

// <--------------------- SCROLL TO ---------------------  
function scrollMe() {
    document.querySelector('.start').scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementsByClassName('bottom')[0].addEventListener('click', scrollMe)

// <--------------------- SCROLL TO ---------------------