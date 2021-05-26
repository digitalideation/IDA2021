function handleNight(event) {
    // store the checkbox in a variable
    var checkBox = event.target

    // One way to handle the class:
    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        document.body.classList.add('night');
    } else {
        document.body.classList.remove('night');
    }
}

// This is one way to listen for the click event
document.getElementById('nightcheck').onclick = handleNight;

// This is another way to listen for the event
// and toggle the class:
var nightButton = document.getElementById('nightbutton');
nightButton.addEventListener('click', function() {
    console.log('just toggling')
    document.body.classList.toggle('night')
});