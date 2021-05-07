// Braucht jQuery

$(document).ready(function () {

  // Vars
  let showDropdownWeek = true;
  let showDropdownDay;


  let navMainDict = {
    "Home": "index.html",
    "My Robot": "robotworld.html",
    "My Song": "song.html",
  }
  let linkToProcess = '<li><a id="processbtn" onmouseover="" style="cursor: pointer;">Process</a></li>'

  let navWeekDict = {
    "Week 1": "week1/day1/day1.html",
    "Week 2": "week2/day1/day1.html",
    "Week 3": "week3/day1/day1.html",

  }

  let week = "week" + GlobalWeek
  let navDayDict = {
    "Day 1": "../../" + week + "/day1/day1.html",
    "Day 2": "../../" + week + "/day2/day2.html",
    "Day 3": "../../" + week + "/day3/day3.html",
    "Day 4": "../../" + week + "/day4/day4.html",

  }

  // get the name of the file
  var path = window.location.pathname;
  nameList = path.split("/");
  var pageName = nameList.pop();
  var weekName = path.split('/').slice(-3, -1)[0];
  console.log(weekName);


  // -------- Main Nav -------------------
  // get the right Path for the Week Nav
  let inMainPath = "./";
  let outMainPath = "../../../";
  let preFolderMain;
  if (GlobalIsInProcessPath) {
    preFolderMain = outMainPath;
  } else {
    preFolderMain = inMainPath;
  }
  // create the Main Nav
  for (let i = 1; i < Object.keys(navMainDict).length + 1; i++) {
    let newLi = document.createElement("li");
    // create link "a"
    let newLink = document.createElement("a");
    $(newLink).attr("href", preFolderMain + navMainDict[Object.keys(navMainDict)[i-1]])
    // add Text to link
    newLink.innerHTML = Object.keys(navMainDict)[i - 1];
    // apend it to the ul
    $("#mainNavUl").append(newLi);
    $("#mainNavUl li:last-child").append(newLink);
  }
  // add the Process Btn
  $("#mainNavUl").append(linkToProcess);



  // -------- WeekNav -------------------
  // get the right Path for the Week Nav
  let inProcessPath = "process/"
  let outProcessPath = "../../"
  let preFolderWeek;
  if (GlobalIsInProcessPath) {
    preFolderWeek = outProcessPath;
  } else {
    preFolderWeek = inProcessPath;
  }
  // create the Week Nav
  for (let i = 1; i < Object.keys(navWeekDict).length + 1; i++) {
    let newLi = document.createElement("li");
    // create link "a"
    let newLink = document.createElement("a");
    $(newLink).attr("href", preFolderWeek + navWeekDict["Week " + i]);
    // if link is the same as Page:
    if (weekName === navWeekDict["Week " + i].split('/').slice(-3, -1)[0]) {
      $(newLink).css("background-color", "#CBCBCB");
      $(newLink).css("color", "#000000");
    }
    // add Text to link
    newLink.innerHTML = Object.keys(navWeekDict)[i - 1];
    // apend it to the ul
    $("#dropNavWeekUL").append(newLi);
    $("#dropNavWeekUL li:last-child").append(newLink);
  }

  // -------- DayNav -------------------
  

  showDropdownDay = true;
  if (GlobalWeek != 0) {
    // show the bar:
    $("#dropNavDay").css("display", "block");
    showDropdownDay = false;
    for (let i = 1; i < Object.keys(navDayDict).length + 1; i++) {
      let newLi = document.createElement("li");
      // create link "a"
      let newLink = document.createElement("a");
      $(newLink).attr("href", navDayDict["Day " + i]);
      // if link is the same as Page:
      if (pageName === navDayDict["Day " + i].split("/").pop()) {
        $(newLink).css("background-color", "#CBCBCB");
        $(newLink).css("color", "#000000");
      }
      // add Text to link
      newLink.innerHTML = Object.keys(navDayDict)[i - 1];
      // apend it to the ul
      $("#dropNavDayUL").append(newLi);
      $("#dropNavDayUL li:last-child").append(newLink);


    }
    

  }

  // Functions 

  $("#processbtn").click(function () {
    $("#dropNavWeek").css("display", showDropdownWeek ? "block" : "none");
    showDropdownWeek = !showDropdownWeek;
    if (GlobalWeek != 0) {
      $("#dropNavDay").css("display", showDropdownDay ? "block" : "none");
      showDropdownDay = !showDropdownDay;
    }

  });



})