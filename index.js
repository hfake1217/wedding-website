// Date Countdown
var countdownDate = new Date("01/20/24")
var todaysDate = new Date();
var difference = countdownDate - todaysDate;
var days = Math.floor(difference / (1000 * 60 * 60 * 24));
document.getElementById("countdown").innerHTML = days + " days to go!";


// Weather Data
$.getJSON("https://api.openweathermap.org/data/2.5/weather?lat=27.7692&lon=-82.7690&appid=6a24a31d2adbd4800709f287473b1f78&units=imperial", function(data) {
    console.log(data);
    var icon = "https://openweathermap.org/img/w/" + data.weather[0].icon + ".png";
    var weather = data.weather[0].main;
    var desc = data.weather[0].description;
    var temp = data.main.temp;
    var temp1 = temp + " F"
    var wind = data.wind.speed + " mph";
    var sunset = data.sys.sunset + " PM";
    var humid = data.main.humidity + "%";
    $("#icon").attr("src", icon);
    document.getElementById('weather').innerHTML = weather;
    document.getElementById('desc').innerHTML = desc;
    document.getElementById('temp').innerHTML = temp1;
    document.getElementById("wind").innerHTML = wind;
    document.getElementById("sunset").innerHTML = sunset;
    document.getElementById("humid").innerHTML = humid;
});