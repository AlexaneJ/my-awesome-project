let now = new Date();
let date = now.getDate();
let month = now.getMonth();
let day = now.getDay();
let hour = now.getHours();
let min = now.getMinutes();
let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let currentDay = week[day];
let currentMonth = months[month];

let currentDate = document.querySelector("#currentDate");
if (hour < 10) {
  hour = `0${hour}`;
}
if (min < 10) {
  min = `0${min}`;
}
if (date === 1 || date === 21 || date === 31) {
  date = `${date}st`;
} else if (date === 2 || date === 22) {
  date = `${date}nd`;
} else if (date === 3 || date === 23) {
  date = `${date}rd`;
} else {
  date = `${date}th`;
}
currentDate.innerHTML = `${currentMonth}, ${currentDay} ${date} ${hour}:${min}`;

function tellsCity(event) {
  event.preventDefault();
  let h1 = document.querySelector("h1");
  let other = document.querySelector("#place");
  let namePlace = other.value;
  namePlace = namePlace.toLowerCase();
  namePlace = namePlace.trim();
  namePlace = namePlace.charAt(0).toUpperCase() + namePlace.slice(1);
  h1.innerHTML = namePlace;

  searchCity(namePlace);
}

function searchCity(city) {
  let apiKey = "31540d8a670db4f2eb62d972df6f873b";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(tellsTemperature);
}

function tellsTemperature(response) {
  let tempy = document.querySelector("#temperature");
  let temperature = Math.round(response.data.main.temp);
  tempy.innerHTML = temperature;
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", tellsCity);

let temperature = 12;

function toFahrenheit(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = temperature * 1.8 + 32.0;
}

function toCelcius(event) {
  event.preventDefault();
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = temperature;
}

let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", toFahrenheit);

let celciusLink = document.querySelector("#celcius");
celciusLink.addEventListener("click", toCelcius);

function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp
  );
}

function searchLocation(position) {
  let apiKey = "5f472b7acba333cd8a035ea85a0d4d4c";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${position.coords.latitude}&lon=${position.coords.longitude}&appid=${apiKey}&units=metric`;

  axios.get(apiUrl).then(displayWeatherCondition);
}

function getCurrentLocation(event) {
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
}

let currentLocationButton = document.querySelector("#location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);
