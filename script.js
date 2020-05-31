var cities = ["New York", "Orlando", "Los Angeles", "Charlotte"];
var apiKey = "";
var lati = "latitude";
var long = "longitude";
var uvIndex = (lat + lon)

cities.forEach(function (city, index, originalArr) {
    renderButtons(city);

    if (index === originalArr.length - 1) {
        displayWeatherInfo(city);
    }
})

