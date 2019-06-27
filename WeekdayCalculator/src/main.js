import { myDate } from './calendar.js';
import './calendar.js';
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css'; //The order of css file is important tooverride bootstrap

$(document).ready(function() {
  $('#calendar-form').submit(function(event) {
    event.preventDefault();
    let day  = $('#inputtedDate').val();
    let month  = $('#inputtedMonth').val();
    let year  = $('#inputtedYear').val();
    let dayInfo = month + ' ' + day + ', ' + year;
    // document.write(dayInfo);
    let myDay = new myDate(dayInfo);
    $('#solution').text(myDay.getMyDay() + " is the day of your date!");
  });
});
