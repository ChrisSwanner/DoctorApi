import $ from 'jquery';
import { ApiCalls } from './../src/doctor.js';

import './styles.css';
let ApiCall = new ApiCalls();
let doctorDisplay = function(response) {
  if (response.data.length > 0) {
   for (let i = 0; i < response.data.length; i++) {
     if (response.data[i].practices[0].accepts_new_patients === true) {
       $('#docDisplay').append("<li>" + "Doctor: " + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "<br>Phone Number: " + response.data[i].practices[0].phones[0].number + "<br>Address: " + response.data[i].practices[0].visit_address.street + "<br>Now Accepting Patients" + "</li><hr>")
     } else if(response.data[i].practices[0].accepts_new_patients === false) {
       $('#docDisplay').append("<li>" + "Doctor: " + response.data[i].profile.first_name + " " + response.data[i].profile.last_name + "<br>Phone Number: " + response.data[i].practices[0].phones[0].number + "<br>Address: " + response.data[i].practices[0].visit_address.street + "<br>Not Accepting Patients" + "</li><hr>")
     }
   }
 } else if (response.data.length <= 0) {
       $('#docDisplay').append("No doctors available")
     }
  }

  let doctorLookUpDisplay = function(response) {
    for (let i = 0; i < 20; i++) {
      $('#docDisplay').append(response.data[i].profile.first_name + " "  + response.data[i].profile.last_name + "<hr>");
    }
  }



$(document).ready(function(){
  $('#medForm').submit(function(event){
    $('#docDisplay').empty();
    event.preventDefault();
  ApiCall.doctorAjaxCall(doctorDisplay);
  })
  $('#docButton').click(function(){
    event.preventDefault();
    ApiCall.doctorLookUp(doctorLookUpDisplay);
  })


})
