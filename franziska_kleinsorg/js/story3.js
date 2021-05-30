// DEFINITION UNSERER ELEMENTE
const SVGSNAKE = document.getElementById('snakeID')

// DEFINITION VON VARIABLEN
const SNAKELENGTH = SVGSNAKE.getTotalLength();

// GRUNDLEGENDES SETTING
SVGSNAKE.style.strokeDasharray = SNAKELENGTH;
SVGSNAKE.style.strokeDashoffset = SNAKELENGTH;

// ZEICHNEN UNSERES SVG GRAFEN
const drawWhenScroll = () => {
    const DRAWSNAKE = SNAKELENGTH * calcScrollPercent();
    SVGSNAKE.style.strokeDashoffset = SNAKELENGTH - DRAWSNAKE;
}

// FUNKTION UM EINEN % WERT DES SCROLLS ZU BERECHNEN
const calcScrollPercent = () => {
    let height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    return document.documentElement.scrollTop / height;
}
    
// FUNKTION FÜR DAS TRIGGERS DES SCROLL EVENTS
window.addEventListener('scroll', drawWhenScroll);