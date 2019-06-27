import { haiku } from "./haiku.js"
import $ from 'jquery';
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';

$(document).ready(function(){
  $("#Haiku").submit(function(event){
    event.preventDefault();

    let line1 = $("#line1").val();
    let line2 = $("#line2").val();
    let line3 = $("#line3").val();
    let myHaiku = new haiku(line1, line2, line3);
    let myLine = myHaiku.lineCombine();
    $("#display").html(myLine);

  })
})
