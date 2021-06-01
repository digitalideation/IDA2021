// Here we can store the divs of the 4 main windows, to cycle through later...
var myWindowIDs = ['mydiv', 'myDIVextra2', 'myDIVextra3', 'myDIVextra4'];


// One function for all the window toggles
// you just need to pass in which ID to handle...
function toggleMe(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";    
    } else {
        x.style.display = "none";
    }
  }

// ____________________________________________


// Live Time
function showTime() {

    let date = new Date();
    let hours = date.getHours(); //0-23
    let minutes = date.getMinutes(); //0 - 59
    let seconds = date.getSeconds(); //0-59

    let formatHours = convertFormat(hours)

    hours = checkTime(hours)

    hours = addZero(hours)
    minutes = addZero(minutes)
    seconds = addZero(seconds)

    document.getElementById('clock').innerHTML = `${hours}:${minutes}:${seconds} ${formatHours}`

}

function convertFormat(time) {
    console.log(time)
    let format = 'AM'
    if (time >= 12) {
        format = 'PM'
    }
    return format;
}

function checkTime(time) {
    if (time > 12) {
        time = time - 12;
    }
    if (time === 0) {
        time = 12;
    }
    return time
}

function addZero(time) {
    if (time < 10) {
        time = "0" + time;
    }
    return time
}

showTime()
setInterval(showTime, 1000)


// ____________________________________________

// Window Drag n dop
dragElement(document.getElementById(("mydiv")));


// Drag n drop Element 2
dragElement(document.getElementById(("mydiv2")));


// Drag n drop Element 3
dragElement(document.getElementById(("mydiv3")));


// Drag n drop Element 4
dragElement(document.getElementById(("mydiv4")));

// You can only have one of these functions, because they were all named the same
// and they all do the same thing.

function dragElement(elmnt) {
    console.log('Function 4')
    var pos1 = 0,
        pos2 = 0,
        pos3 = 0,
        pos4 = 0;
    if (document.getElementById(elmnt.id + "header4")) {
        document.getElementById(elmnt.id + "header4").onmousedown = dragMouseDown;
    } else {
        elmnt.onmousedown = dragMouseDown;
    }

// As soon as the mouse button goes down, this happens...

    function dragMouseDown(e) {
        e = e || window.event;
        pos3 = e.clientX;
        pos4 = e.clientY;
// here we cycle through the window IDs and reset each z-index to 0
        myWindowIDs.forEach(id => {
            document.querySelector(`#${id}`).style.zIndex = '0'
        })
// Then we can set the PARENT of the clicked one to 99 
// (because it's the parents that are on the same stacking order)
    elmnt.parentElement.style.zIndex = '99'
// Except for the 1st one, which doesn't have a parent :)...
    elmnt.style.zIndex = '99'
        document.onmouseup = closeDragElement;
        document.onmousemove = elementDrag;
    }

    function elementDrag(e) {
        e = e || window.event;
        pos1 = pos3 - e.clientX;
        pos2 = pos4 - e.clientY;
        pos3 = e.clientX;
        pos4 = e.clientY;
        elmnt.style.top = (elmnt.offsetTop - pos2) + "px";
        elmnt.style.left = (elmnt.offsetLeft - pos1) + "px";
    }

    function closeDragElement() {
        document.onmouseup = null;
        document.onmousemove = null;
    }
}
// ____________________________________________

// Play Song
var aud = document.getElementById("ASong").children[0];
var isPlaying = false;
aud.pause();

function playPause() {
    if (isPlaying) {
        aud.pause();
    } else {
        aud.play();
    }
    isPlaying = !isPlaying;
}


// ____________________________________________
 