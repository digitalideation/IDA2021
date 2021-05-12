
//alert ("Hallo");s
function changeFarbe() {

    
    // alert ("Hallo"); zum schauen ob die verknüpfung funktioniert
    var elements = document.getElementsByTagName ("article");

    // 2.Laufzeitbedingung
    // 3.Zaehlervariable zum hochzaehlen
    // 1.initialisierung

    for (let n = 0; n < elements.length; n = n + 1) {  //+n++
        // console.log(n);
        elements[n].setAttribute("class", "myclass");

    }

    // let articles = document.getElmentsByTagName ("article")
    // console. log(elements);
    // elments [0] .setAttribute ("calss", "myclass");

    // console.log (articles)
    // articles 

    

}