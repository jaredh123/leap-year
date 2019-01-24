$(document).ready(function() {


  $("#run").submit(function(event) {
    event.preventDefault();
    var year = parseInt($("#input").val());
    var leapYear = function(year) {
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {
        return " is a leap year.";
      }
      else {
        return " is not a leap year.";
      }
    };

    var result = leapYear(year);


    $("#result").text(year + result);



  });
});
