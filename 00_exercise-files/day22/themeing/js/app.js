function handleNight() {
    // Get the checkbox
    var checkBox = document.getElementById("nightmode");
    console.log('handle night', checkBox.checked);

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        document.body.classList.add('night');
    } else {
        document.body.classList.remove('night');
    }
}