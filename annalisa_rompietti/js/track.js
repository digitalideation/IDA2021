// const MouseEvents = document.getElementById('MouseEvents');
// var lyric = [document.getElementById("lyric1, lyric2, lyric3, lyric4")]



// for ( var i=1; i<=lyric.length; i++) {
// console.log(lyric[i]);
// }




// function mouseOver() {
//     document.getElementById("lyric1").style.color = "white";
//   }
    
// function mouseOut() {
//     document.getElementById("lyric2").style.color = "white";
// }


var z=1;

function mouseOver() {
    if(z < 19){
        //lyric[z].style.color = "white";
        document.getElementById("lyric"+z).style.display = "inline";
        z = z+1;
    }

  }
    
function mouseOut() {
    if(z < 19){
        document.getElementById("lyric"+z).style.display= "inline";
        z = z+1;
    }
}