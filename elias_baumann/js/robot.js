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


// ----------------------------

// Drag n Drop

dragElement(document.getElementById(("mydiv")));

dragElement(document.getElementById(("mydiv2")));

        function dragElement(elmnt) {
            var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
            if (document.getElementById(elmnt.id + "header")) {
                document.getElementById(elmnt.id + "header").onmousedown = dragMouseDown;
            } else {
                elmnt.onmousedown = dragMouseDown;
            }

            function dragMouseDown(e) {
                e = e || window.event;
                pos3 = e.clientX;
                pos4 = e.clientY;
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


// --------------------------

// Music
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

// -----------------------

// Window Popup

var myWindowIDs = ['mydiv', 'myDIVextra2', 'myDIVextra3', 'myDIVextra4'];

function toggleMe(id) {
    var x = document.getElementById(id);
    if (x.style.display === "none") {
        x.style.display = "block";    
    } else {
        x.style.display = "none";
    }
  }


// -------------------------

