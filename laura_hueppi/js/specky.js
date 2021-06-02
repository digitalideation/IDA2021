/* get today's date, format it and render to .content h1 element */
var date_today = new Date(/*1970, 0, 1*/);

var day = date_today.getDate();
if (day < 10 ) day = '0' + day;

var month_str = '';
var month = date_today.getMonth();
switch(month) {
  case 0:
    month_str = 'Jan';
    break;
  case 1:
    month_str = 'Feb';
    break;
  case 2:
    month_str = 'Mar';
    break;
  case 3:
    month_str = 'Apr';
    break;
  case 4:
    month_str = 'May';
    break;
  case 5:
    month_str = 'Jun';
    break;
  case 6:
    month_str = 'Jul';
    break;
  case 7:
    month_str = 'Aug';
    break;
  case 8:
    month_str = 'Sep';
    break;
  case 9:
    month_str = 'Oct';
    break;
  case 10:
    month_str = 'Nov';
    break;
  case 11:
    month_str = 'Dec';
    break;
}

var year = date_today.getFullYear();

var rendered_date = day + ' ' + month_str + ' ' + year;
var date_area = document.querySelector('.content h1')
date_area.innerHTML = rendered_date;