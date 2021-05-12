window.onscroll = function() {
    let articles = document.getElementsByTagName("article");

    let i;
    for (i = 0; i < articles.length; i++) {
        let domRect = articles[i].getBoundingClientRect();
        /* https://developer.mozilla.org/en-US/docs/Web/API/Element/getBoundingClientRect*/
        
    }
};