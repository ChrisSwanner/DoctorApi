import $ from 'jquery';
import { doctorAjaxCall } from './../src/doctor.js';

var doctorDisplay = function(response) {
  console.log(response);
  // for (let i = 0; i < response.length; i++) {
  //   $('#doctorDisplay').append("<li>" + "<br>Doctor: " + response.data.practices.name)
  //}
}


$(document).ready(function(){
  doctorAjaxCall(doctorDisplay);
  //$('#medIssueForm').submit(function(event){

//  })
})
