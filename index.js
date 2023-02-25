// Date Countdown
var countdownDate = new Date("01/20/24")
var todaysDate = new Date();
var difference = countdownDate - todaysDate;
var days = Math.floor(difference / (1000 * 60 * 60 * 24));
document.getElementById("countdown").innerHTML = days + " days to go!";

