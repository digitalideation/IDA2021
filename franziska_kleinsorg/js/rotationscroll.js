window.onscroll = function () {
    scrollRotate();
};

function scrollRotate() {
    let imageright = document.getElementById('lilnasxright');
    imageright.style.transform = "rotate(" + window.pageYOffset/2 + "deg)";
    let imageleft = document.getElementById('lilnasxleft');
    imageleft.style.transform = "rotate(" + window.pageYOffset/-2 + "deg)";
}

