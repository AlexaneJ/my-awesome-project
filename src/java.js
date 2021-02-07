// time variables
let now = new Date();
let date = now.getDate();
let month = now.getMonth();
let day = now.getDay();
let hour = now.getHours();
let min = now.getMinutes();
let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
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


// these functions allow you to enter a city and stores it in order to display weather
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
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(response.data.main.temp);
  document.querySelector("#clouds").innerHTML = Math.round(response.data.clouds.all);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", tellsCity);

// tells temperature in Celsius and Fahrenheit
let temperatureElement = document.querySelector("#temperature");
function toFahrenheit(event) {
  event.preventDefault();
  temperatureElement.innerHTML = temperatureElement.innerHTML * 1.8 + 32.0;}
function toCelcius(event) {
  event.preventDefault();
  temperatureElement.innerHTML = (temperatureElement.innerHTML - 32.0)/1.8;
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", toFahrenheit);
let celciusLink = document.querySelector("#celcius");
celciusLink.addEventListener("click", toCelcius);

//Day2 (same than before)
let temperatureElement2 = document.querySelector("#temperature2");
function toFahrenheit2(event) {
  event.preventDefault();
  temperatureElement2.innerHTML = temperatureElement2.innerHTML * 1.8 + 32.0;}
function toCelcius2(event) {
  event.preventDefault();
  temperatureElement2.innerHTML = (temperatureElement2.innerHTML - 32.0)/1.8;
}
let fahrenheitLink2 = document.querySelector("#fahrenheit2");
fahrenheitLink2.addEventListener("click", toFahrenheit2);
let celciusLink2 = document.querySelector("#celcius2");
celciusLink2.addEventListener("click", toCelcius2);

//Day3 (same than before)
let temperatureElement3 = document.querySelector("#temperature3");
function toFahrenheit3(event) {
  event.preventDefault();
  temperatureElement3.innerHTML = temperatureElement3.innerHTML * 1.8 + 32.0;}
function toCelcius3(event) {
  event.preventDefault();
  temperatureElement3.innerHTML = (temperatureElement3.innerHTML - 32.0)/1.8;
}
let fahrenheitLink3 = document.querySelector("#fahrenheit3");
fahrenheitLink3.addEventListener("click", toFahrenheit3);
let celciusLink3 = document.querySelector("#celcius3");
celciusLink3.addEventListener("click", toCelcius3);

//Day4(same than before)
let temperatureElement4 = document.querySelector("#temperature4");
function toFahrenheit4(event) {
  event.preventDefault();
  temperatureElement4.innerHTML = temperatureElement4.innerHTML * 1.8 + 32.0;}
function toCelcius4(event) {
  event.preventDefault();
  temperatureElement4.innerHTML = (temperatureElement4.innerHTML - 32.0)/1.8;
}
let fahrenheitLink4 = document.querySelector("#fahrenheit4");
fahrenheitLink4.addEventListener("click", toFahrenheit4);
let celciusLink4 = document.querySelector("#celcius4");
celciusLink4.addEventListener("click", toCelcius4);

//Day5 (same than before)
let temperatureElement5 = document.querySelector("#temperature5");
function toFahrenheit5(event) {
  event.preventDefault();
  temperatureElement5.innerHTML = temperatureElement5.innerHTML * 1.8 + 32.0;}
function toCelcius5(event) {
  event.preventDefault();
  temperatureElement5.innerHTML = (temperatureElement5.innerHTML - 32.0)/1.8;
}
let fahrenheitLink5 = document.querySelector("#fahrenheit5");
fahrenheitLink5.addEventListener("click", toFahrenheit5);
let celciusLink5 = document.querySelector("#celcius5");
celciusLink5.addEventListener("click", toCelcius5);

//Day6 (same than before)
let temperatureElement6 = document.querySelector("#temperature6");
function toFahrenheit6(event) {
  event.preventDefault();
  temperatureElement6.innerHTML = temperatureElement6.innerHTML * 1.8 + 32.0;}
function toCelcius6(event) {
  event.preventDefault();
  temperatureElement6.innerHTML = (temperatureElement6.innerHTML - 32.0)/1.8;
}
let fahrenheitLink6 = document.querySelector("#fahrenheit6");
fahrenheitLink6.addEventListener("click", toFahrenheit6);
let celciusLink6 = document.querySelector("#celcius6");
celciusLink6.addEventListener("click", toCelcius6);


// tells temperature depending on where is your computer
function displayWeatherCondition(response) {
  document.querySelector("h1").innerHTML = response.data.name;
  document.querySelector("#temperature").innerHTML = Math.round(
    response.data.main.temp);
  document.querySelector("#clouds").innerHTML = Math.round(response.data.clouds.all);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
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

// tells days coming after current day
let first = document.querySelector("#first");
let second = document.querySelector("#second");
let third = document.querySelector("#third");
let fourth = document.querySelector("#fourth");
let fifth = document.querySelector("#fifth");

first.innerHTML=week[day+1];
second.innerHTML=week[day+2];
third.innerHTML=week[day+3];
fourth.innerHTML=week[day+4];
fifth.innerHTML=week[day+5];
