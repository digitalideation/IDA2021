
// on start




window.onload = function () {

  var durationS = 3;

  var pathList = [
    document.getElementsByClassName('svg_head'),
    document.getElementsByClassName('svg_body'),
    document.getElementsByClassName('svg_arm_right'),
    document.getElementsByClassName('svg_arm_left'),
    document.getElementsByClassName('svg_leg_right'),
    document.getElementsByClassName('svg_leg_left')
    
  ]

for (let elem of pathList){
  animateLine(elem, durationS);
  //loop
  setInterval(animateLine, durationS*1000, elem, durationS);

}

}

function animateLine(paths, durationS) {

  for (path of paths) {
      var length = path.getTotalLength();

      // Clear any previous transition
      path.style.transition = path.style.WebkitTransition =
          'none';

      // Set up the starting positions
      path.style.strokeDasharray = length/4 + ' ' + length/4;
      path.style.strokeDashoffset = length;

      // Trigger a layout so styles are calculated & the browser 
      // picks up the starting position before animating
      path.getBoundingClientRect();

      // Define our transition
      path.style.transition = path.style.WebkitTransition = 'stroke-dashoffset ' + durationS + 's linear';

      // Go!
      path.style.strokeDashoffset = '-' + length;
  }
}