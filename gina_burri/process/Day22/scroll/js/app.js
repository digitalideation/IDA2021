// create a placeholder for the maximum scroll value
var _maxScroll, _scrollPercent;

let root = document.documentElement;

// Listen for the "scroll" event and do something everytime it happens
document.addEventListener('scroll', function() {
    // store a nickname for the div where we'll output the scroll info
    var OUTPUT_SELECTOR = document.querySelector('#output');
    _scrollPercent = Math.round(window.scrollY / _maxScroll * 100)
        // change the text of the output div every scroll
    OUTPUT_SELECTOR.innerHTML = 'Scroll ' + window.scrollY + ' / ' + _maxScroll + ': ' + _scrollPercent + '%'
    root.style.setProperty('--hue', (_scrollPercent / 100) * 360);
    root.style.setProperty('--circleSize', (_scrollPercent / 100) + 1);
})

// when the document is loaded, measure the document height and store it in the placeholder
window.addEventListener('load', function() {
    _maxScroll = document.documentElement.scrollHeight - window.innerHeight
})