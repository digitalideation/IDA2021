function changeContent() {

var elements = document.getElementsByTagName("article");

//2. laufzeitbedingung
//3. zaehlervariable zum hochzaehlen
//1. initialisierung

for(let n=0; n < elements.length; n=n+1) { //n++
    //console.log(n);
    elements[n].setAttribute("class", "myclass");
}



// console.log(elements);
// elements[0].setAttribute("class", "myclass")

}