// Create a placeholder in memory for my original, untouched content
var originalContent;

// Define my function that will do something to each letter
function haveFun() {
    // Store the content in a variable
    const ALL_CONTENT = document.getElementById('content').innerHTML
    console.log('my content: ', ALL_CONTENT);
    // Store the number of letters in a variable
    const CHAR_COUNT = ALL_CONTENT.length
    console.log('how many chars?: ', CHAR_COUNT);
    // Save a place in memory for my new markup
    let newContent = ""

    // Cycle through all the letters and do stuff
    for (var i = 0; i < CHAR_COUNT; i++) {
        // get the current character and create a bunch of random numbers
        const CURRENT_CHARACTER = ALL_CONTENT[i]
        const RANDOM_SIZE = parseInt(Math.random() * 10)
        const RANDOM_ROTATION = parseInt(Math.random() * 30)
        const RANDOM_HUE = parseInt(Math.random() * 255)
        const PLUS_MINUS = Math.random() < 0.5 ? -1 : 1;
        // Wrap the current character in a span and use the random numbers
        const NEW_MARKUP = `<span class="letter" style="--letterSize: ${RANDOM_SIZE};--hue: ${RANDOM_HUE}; --letterRotation: ${RANDOM_ROTATION * PLUS_MINUS}deg;">${CURRENT_CHARACTER}</span>`
            // Add that new markup to the placeholder "newContent"
        newContent += NEW_MARKUP
    }
    // Once I'm done looping through all the letters, add all that new markup into the "content" div
    document.getElementById('content').innerHTML = newContent
}


function handleFun(e) {
    // Get the checkbox
    var checkBox = e.target;

    // If the checkbox is checked, display the output text
    if (checkBox.checked == true) {
        haveFun()
    } else {
        document.getElementById('content').innerHTML = originalContent
    }
}

// when the document is loaded store the current content in the variable above
window.addEventListener('load', function() {
    originalContent = document.getElementById('content').innerHTML
})