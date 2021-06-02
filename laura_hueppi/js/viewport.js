var viewedElements = []
var currentElement = ''
var myName = ''

window.onscroll = function() {
    //alle Elemente mit dem Tag article werden in die Variable articles geschrieben, diese ist ein Array mit allenfalls mehreren Einträgen
    let articles = document.getElementsByClassName("scrollelement");
    // console.log('articles', articles)


    //hier wird durch alle Einträge im Array durchgeloopt
    //
    for (let i = 0; i < articles.length; i++) {
        // bei jedem einzelnen wird abgetragt, wo er sich im Moment in Bezug auf den Viewport befindet
        let domRect = articles[i].getBoundingClientRect();
        /* https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect*/

        //falls die Distanz der oberen Ecke zum viewport kleiner ist als die Höhe des viewports
        // ist das Element entweder im viewport oder bereits oben wieder rausgerutscht 
        if (domRect.top < window.innerHeight) {
            viewedElements = []
            viewedElements.push(articles[i])
            myName = viewedElements[viewedElements.length - 1].getAttribute('data-name');
            // console.log("ich bin im viewport", myName);
        }
    }
    if (currentElement !== myName) {
        document.getElementsByClassName('kopf')[0].classList = 'kopf';
        document.getElementsByClassName('kopf')[0].classList.add(myName);
        currentElement = myName
    }
};