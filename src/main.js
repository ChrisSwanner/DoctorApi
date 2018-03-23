import $ from 'jquery';
import { doctorAjaxCall } from './../src/doctor.js';

var doctorDisplay = function(response) {
  console.log(response);
   for (let i = 0; i < 10; i++) {
     $('#docDisplay').append("<li>" + "<br>Doctor: " + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "<br>Phone Number " + response.data[i].practices[i].phones[i].number + "</li>")
  }
}


$(document).ready(function(){
  $('#docForm').submit(function(event){
    event.preventDefault();
  doctorAjaxCall(doctorDisplay);

  })
})
