//Multiple Paths

const paths = new Array();
paths[0] = 'handleftID';
paths[1] = 'handrightID';
paths[2] = 'angel1ID';
paths[3] = 'angel2ID';
paths[4] = 'angel3ID';
paths[5] = 'angel4ID';
paths[6] = 'angel5ID';
paths[7] = 'angel6ID';
paths[8] = 'snake1ID';
paths[9] = 'snake2ID';
paths[10] = 'applehalfID';



//SVG ANIMATION
var SVGElement;
var SVGLength;

for(let n=0;n<paths.length;n++){
    SVGElement = document.getElementById(paths[n]);

    SVGLength = SVGElement.getTotalLength(paths[n]);
    SVGElement.style.strokeDasharray = SVGLength;
    SVGElement.style.strokeDashoffset = SVGLength;
}



const drawWhenScroll = () => {

    let scrollpercent = calcScrollPercent();

    for(let n=0;n<paths.length;n++){
        SVGElement = document.getElementById(paths[n]);
        SVGLength = SVGElement.getTotalLength(paths[n]);
        let draw = SVGLength * scrollpercent;
        let factor = SVGElement.getAttribute('attr-factor');
        let wait = SVGElement.getAttribute('attr-wait');

        if(SVGLength - factor*draw > 0 && scrollpercent > wait){
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
    window.scrollBy(0,7.5); 
    scrolldelay = setTimeout('pageScroll()',50); 
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