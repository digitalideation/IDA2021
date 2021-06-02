$('#power').click(function() {
    $('#container').addClass('shutdown');
});

// ____________________________________________

$('#power').click(function() {
  $('#after').addClass('text-after-effect');
});

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


// -----------------------

// Play Song$

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
