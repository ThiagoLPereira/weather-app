const apiKey = "5cd55741d8270eb5a34055777f366621";
const URL = "http://api.openweathermap.org/data/2.5/forecast";

let weather = {};

let kelvin = 273;

const cities = [];
cities.push({
  name: "Barcelona",
  latitude: 41.41,
  longitude: 2.19,
});
cities.push({
  name: "Madrid",
  latitude: 40.41,
  longitude: -3.7,
});
cities.push({
  name: "Sevilla",
  latitude: 37.38,
  longitude: -5.98,
});
cities.push({
  name: "Valencia",
  latitude: 39.47,
  longitude: -0.38,
});

let lat;
let lon;

cities.forEach((city) => {
  lat = city.latitude;
  lon = city.longitude;
});

const get = (latitude, longitude) => {
  fetch(
    URL + "?" + "lat=" + latitude + "&lon=" + longitude + "&appid=" + apiKey
  )
    .then(function (response) {
      let data = response.json();
      return data;
    })
    .then(function (data) {
      weather.temperature = Math.floor(data.list[0].main.temp - kelvin);
      weather.description = data.list[0].weather[0].description;
      weather.iconId = data.list[0].weather[0].icon;
      weather.city = data.city.name;
    })
    .then(function () {
      displayWeather();
    });
};
for (var i = 0; i < cities.length; i++) {
  get(cities[i].latitude, cities[i].longitude);
}

var iconElement = document.querySelector("#weather-icon");
var temperatureElement = document.querySelector("#temperature-value p");
var descriptionElement = document.querySelector("#temperature-description p");
var locationElement = document.querySelector("#location p");

function displayWeather() {
  iconElement.innerHTML = `<img src="icons/${weather.iconId}.png"/>`;
  temperatureElement.innerHTML = `${weather.temperature}<span id="celsius">C</span></p>`;
  descriptionElement.innerHTML = weather.description;
  locationElement.innerHTML = weather.city;
}
let main = document.querySelector("#main");
const container = document.createElement("div");
container.id = name;
container.className = "container";
main.appendChild(container);

const weather2 = document.createElement("div");
weather2.className = "weather-container";
container.appendChild(weather2);

const weatherIcon = document.createElement("div");
weatherIcon.className = "weather-icon";
const icon = document.createElement("img");
icon.src = "icons/" + weather.temperature + ".png";
weatherIcon.appendChild(icon);
weather.appendChild(weatherIcon);