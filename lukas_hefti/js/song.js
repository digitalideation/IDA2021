
// Braucht jQuery

$(document).ready(function () {

  let siteDivTriggers = $(".scrollTrigger")


  $(window).scroll(function () {
    // search for elements in viewport
    for (let i = 0; i < siteDivTriggers.length; i++) {
      let domRect = siteDivTriggers[i].getBoundingClientRect();

      if ((domRect.top < window.innerHeight) && (domRect.bottom > 0)) {
      // if in viewport; get Id of parent "site" and attach "visible" class to all childs and itself.
        console.log("ich bin im viewport", siteDivTriggers[i]);

        let parentDiv = $(siteDivTriggers[i]).parent();
        parentDiv.addClass("visible");

        let kidsOfSite = parentDiv.children();
        for (let kid of kidsOfSite) {
          $(kid).addClass("visible");
        }

        // if secondary trigger active, add class n2, not to the trigger though
        if ($(siteDivTriggers[i]).hasClass("n2")) {
          for (let kid of kidsOfSite) {
            if (!$(kid).hasClass("scrollTrigger"))
            $(kid).addClass("n2");
          }
        }


      } else {
        //remove class if not visible ------ not yet implemented -------
        console.log("ich bin noch nicht im viewport", siteDivTriggers[i]);

      }
    }

  });





})