//Multiple Paths

const paths = new Array();
paths[0] = 'snakeID';
paths[1] = 'treeID';




//SVG ANIMATION
var SVGElement;
var SVGLength;

for(let n=0;n<paths.length;n++){
    SVGElement = document.getElementById(paths[n]);

    SVGLength = SVGElement.getTotalLength();
    SVGElement.style.strokeDasharray = SVGLength;
    SVGElement.style.strokeDashoffset = SVGLength;
}



const drawWhenScroll = () => {

    let scrollpercent = calcScrollPercent();

    for(let n=0;n<paths.length;n++){
        SVGElement = document.getElementById(paths[n]);
        SVGLength = SVGElement.getTotalLength();
        let draw = SVGLength * scrollpercent;
        let factor = SVGElement.getAttribute('attr-factor');

        if(SVGLength - 10*draw > 0 ){
            SVGElement.style.strokeDashoffset = (SVGLength - factor*draw );
        }

    }




}

const calcScrollPercent = () => {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;

    //console.log(document.documentElement.scrollTop / height);
    //return (document.documentElement.scrollTop % sectionheight) ;
    return document.documentElement.scrollTop / height;
}
    
window.addEventListener('scroll', drawWhenScroll);



//AUTOMATIC SCROLLING
function pageScroll() {
    window.scrollBy(0,50); 
    scrolldelay = setTimeout('pageScroll()',200); 
}

//JUMP TO TOP 
function jumpScroll() {
    window.scroll(0,0); 
}

//STOP SCROLLING DOWN (ONLY)
function stopScroll() {
    clearTimeout(scrolldelay);
}

//AUDIO
var myAudio = document.getElementById("myAudio");
        var isPlaying = false;

        function togglePlay() {
            isPlaying ? myAudio.pause() : myAudio.play();
        };

        myAudio.onplaying = function () {
            isPlaying = true;
            document.body.classList.remove('paused')
            document.body.classList.add('playing')
        };

        myAudio.onpause = function () {
            isPlaying = false;
            document.body.classList.remove('playing')
            document.body.classList.add('paused')
        };