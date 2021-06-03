


// --------------------- CURSOR --------------------->
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
// <--------------------- CURSOR ---------------------  

// <--------------------- SCROLL TO ---------------------  
function scrollMe() {
    document.querySelector('.menu').scrollIntoView({
        behavior: 'smooth'
    });
}

document.getElementsByTagName('h1')[0].addEventListener('click', scrollMe)

setTimeout(() => {
    scrollMe()
}, 10000);
// <--------------------- SCROLL TO ---------------------

// --------------------- MOVING MENU --------------------->
let $text = $(".rolling-text .rolling-text__text");
let $wrap = $(".rolling-text");

$text.clone().appendTo($wrap);

TweenMax.to($wrap, 10, {
    x: -$text.width(),
    ease: Linear.easeNone,
    repeat: -1
});
// --------------------- MOVING MENU --------------------->