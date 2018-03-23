import $ from 'jquery';
import { doctorAjaxCall } from './../src/doctor.js';

var doctorDisplay = function(response) {

   for (let i = 0; i < 10; i++) {
     console.log(response
    );
     $('#docDisplay').append("<li>" + "<br>Doctor: " + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "<br>Phone Number " + response.data[i].practices[i].phones[i].number + "<br>Address: " + response.data[i].practices[i].visit_address.street + "</li>")
  }
}


$(document).ready(function(){
  $('#medForm').submit(function(event){
    event.preventDefault();
  doctorAjaxCall(doctorDisplay);

  $('#docForm').submit(function(event){
    event.preventDefaault
  })
  })
})
