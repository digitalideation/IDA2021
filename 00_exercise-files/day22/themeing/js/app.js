function handleNight(thing) {

    // store the checkbox in a variable
    var checkBox = thing.target
    var myImg = document.getElementsByClassName('content')[0].getElementsByTagName('img')[0]
    console.log('Image?', myImg)
        // One way to handle the class:
        // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        document.body.classList.add('night');
        myImg.setAttribute('src', 'img/riding.jpeg')
        myImg.setAttribute('alt', 'Illustration of Red Riding Hood')
        myImg.setAttribute('title', 'Illustration of Red Riding Hood')
    } else {
        document.body.classList.remove('night');
        myImg.setAttribute('src', 'img/riding2.jpeg')
        myImg.setAttribute('title', 'Different Illustration of Red Riding Hood')
    }
}

// This is one way to listen for the click event
document.getElementById('nightcheck').onclick = handleNight;


// This is another way to listen for the event
// and toggle the class:
var nightButton = document.getElementById('nightbutton');

nightButton.addEventListener('click', function() {
    console.log('just toggling')
    console.log(this)
    document.body.classList.toggle('night')
});

function scrollMe(classname) {

}


document.getElementsByTagName('h1')[0].addEventListener('click', scrollMe(''))

setTimeout(() => {
    scrollMe()
}, 2000);