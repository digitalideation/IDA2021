window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let image = document.getElementById('lilnasxright');
    image.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";}
    {let image = document.getElementById('lilnasxleft');
    image.style.transform = "rotate(" + window.pageYOffset/-2 + "deg)";
}

