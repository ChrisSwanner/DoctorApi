const apiKey = process.env.exports.apiKey;
import $ from 'jquery';

 export class ApiCalls {
   constructor(){}

   doctorAjaxCall(doctorDisplay, medIssueDisplay) {
    let medIssue = $('#medIssue').val();
    $.ajax({
      url: "https://api.betterdoctor.com/2016-03-01/doctors?query='" + medIssue + '&location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=' + apiKey,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(response) {

          doctorDisplay(response);
        },
        error: function() {
          $('#error').text("error");
        }
    })
  }
  doctorLookUp(doctorLookUpDisplay) {
    $.ajax({

      url: "https://api.betterdoctor.com/2016-03-01/doctors?location=45.5231%2C-122.6765%2C%205&user_location=45.5231%2C-122.6765&skip=0&limit=20&user_key=" + apiKey,
      type: 'GET',
      data: {
        format: 'json'
      },
      success: function(doctors) {

          doctorLookUpDisplay(doctors);
        },
        error: function() {
          $('#error').text("error");
        }
    })
  }

}
