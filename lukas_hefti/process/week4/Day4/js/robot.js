
// on start

$(document).ready(function () {

  // random body image
  let img = document.createElement("img");
  img.src = "https://source.unsplash.com/random/?" + "electronic_chip";

  $(".body")[0].getElementsByTagName('img');
  let oldimages = $(".body")[0].getElementsByTagName("img");
  if (oldimages.length > 0) {
    $(".body").removeChild(oldimages[0]);
  }
  $(".body")[0].append(img);

})