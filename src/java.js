// time variables
let now = new Date();
let date = now.getDate();
let month = now.getMonth();
let day = now.getDay();
let hour = now.getHours();
let min = now.getMinutes();
let week = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
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

//displays next five days of the week based on today

first.innerHTML= week[day+1];
second.innerHTML= week[day+2];
third.innerHTML= week[day+3];
fourth.innerHTML= week[day+4];
fifth.innerHTML= week[day+5];
// apiKey variable used multiple times in our code 
let apiKey = "31540d8a670db4f2eb62d972df6f873b";

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
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(tellsTemperature);

  let apiUrl2 = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl2).then(tellsForecast);
  }
function tellsTemperature(response) {
  document.querySelector("h1").innerHTML = response.data.name;

  celsiusTemperature = Math.round(response.data.main.temp)
  let temperatureElement = document.querySelector("#temperature");
function toFahrenheit(event) {
  event.preventDefault();
  temperatureElement.innerHTML = Math.round( celsiusTemperature* 1.8 + 32.0);}
function toCelcius(event) {
  event.preventDefault();
  temperatureElement.innerHTML = celsiusTemperature;
}
let fahrenheitLink = document.querySelector("#fahrenheit");
fahrenheitLink.addEventListener("click", toFahrenheit);

let celciusLink = document.querySelector("#celcius");
celciusLink.addEventListener("click", toCelcius);
  document.querySelector("#temperature").innerHTML = celsiusTemperature;
  document.querySelector("#clouds").innerHTML = Math.round(response.data.clouds.all);
  document.querySelector("#humidity").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(response.data.wind.speed);
  let iconElement = document.querySelector("#icon");
  iconElement.setAttribute(
    "src",
    `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`
  );
  let descriptionElement = response.data.weather[0].description;
  descriptionElement = descriptionElement.charAt(0).toUpperCase() + descriptionElement.slice(1);
  document.querySelector("#description").innerHTML = descriptionElement;
}

let searchForm = document.querySelector("#form");
searchForm.addEventListener("submit", tellsCity);

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

// default city showing
searchCity("Toulouse");

function tellsForecast(response) {
  console.log(response.data);
  //tomorrow
  let tomorrowTemp = Math.round(((response.data.list[0].main.temp)+(response.data.list[1].main.temp)+(response.data.list[2].main.temp)+(response.data.list[3].main.temp)+(response.data.list[4].main.temp)+(response.data.list[5].main.temp)+(response.data.list[6].main.temp)+(response.data.list[7].main.temp))/8);
  let tomorrowDisplay = document.querySelector("#temperature2");
  let tomorrowIcon = document.querySelector("#icon1");
  tomorrowDisplay.innerHTML = tomorrowTemp;
  tomorrowIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${response.data.list[3].weather[0].icon}@2x.png"/>`;
  
  let temperatureElement2 = document.querySelector("#temperature2");
function toFahrenheit2(event) {
  event.preventDefault();
  temperatureElement2.innerHTML = Math.round(tomorrowTemp * 1.8 + 32.0);}
function toCelcius2(event) {
  event.preventDefault();
  temperatureElement2.innerHTML = tomorrowTemp;;
}

let fahrenheitLink2 = document.querySelector("#fahrenheit2");
fahrenheitLink2.addEventListener("click", toFahrenheit2);
let celciusLink2 = document.querySelector("#celcius2");
celciusLink2.addEventListener("click", toCelcius2);
 //day after tomorrow
  let dayTwoTemp = Math.round(((response.data.list[8].main.temp)+(response.data.list[9].main.temp)+(response.data.list[10].main.temp)+(response.data.list[11].main.temp)+(response.data.list[12].main.temp)+(response.data.list[13].main.temp)+(response.data.list[14].main.temp)+(response.data.list[15].main.temp))/8);
  let dayTwoIcon = document.querySelector("#icon2");
  let dayTwoDisplay = document.querySelector("#temperature3");
  dayTwoDisplay.innerHTML = dayTwoTemp;
  dayTwoIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${response.data.list[11].weather[0].icon}@2x.png"/>`;

  let temperatureElement3 = document.querySelector("#temperature3");
  function toFahrenheit3(event) {
    event.preventDefault();
    temperatureElement3.innerHTML = Math.round(dayTwoTemp * 1.8 + 32.0);}
  function toCelcius3(event) {
    event.preventDefault();
    temperatureElement3.innerHTML = dayTwoTemp;
  }
  let fahrenheitLink3 = document.querySelector("#fahrenheit3");
  fahrenheitLink3.addEventListener("click", toFahrenheit3);
  let celciusLink3 = document.querySelector("#celcius3");
  celciusLink3.addEventListener("click", toCelcius3);
  
  //day three
  let dayThreeTemp = Math.round(((response.data.list[16].main.temp)+(response.data.list[17].main.temp)+(response.data.list[18].main.temp)+(response.data.list[19].main.temp)+(response.data.list[20].main.temp)+(response.data.list[21].main.temp)+(response.data.list[22].main.temp)+(response.data.list[23].main.temp))/8);
  let dayThreeIcon = document.querySelector("#icon3");
  let dayThreeDisplay = document.querySelector("#temperature4");
  dayThreeDisplay.innerHTML = dayThreeTemp;
  dayThreeIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${response.data.list[19].weather[0].icon}@2x.png"/>`;
  
 

let temperatureElement4 = document.querySelector("#temperature4");
function toFahrenheit4(event) {
  event.preventDefault();
  temperatureElement4.innerHTML = Math.round(dayThreeTemp * 1.8 + 32.0);}
function toCelcius4(event) {
  event.preventDefault();
  temperatureElement4.innerHTML = dayThreeTemp;
}
let fahrenheitLink4 = document.querySelector("#fahrenheit4");
fahrenheitLink4.addEventListener("click", toFahrenheit4);
let celciusLink4 = document.querySelector("#celcius4");
celciusLink4.addEventListener("click", toCelcius4);
  //day four
  let dayFourTemp = Math.round(((response.data.list[24].main.temp)+(response.data.list[25].main.temp)+(response.data.list[26].main.temp)+(response.data.list[27].main.temp)+(response.data.list[28].main.temp)+(response.data.list[29].main.temp)+(response.data.list[30].main.temp)+(response.data.list[31].main.temp))/8);
  let dayFourIcon = document.querySelector("#icon4");
  let dayFourDisplay = document.querySelector("#temperature5");
  dayFourDisplay.innerHTML = dayFourTemp;
  dayFourIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${response.data.list[27].weather[0].icon}@2x.png"/>`;
  
let temperatureElement5 = document.querySelector("#temperature5");
function toFahrenheit5(event) {
  event.preventDefault();
  temperatureElement5.innerHTML = Math.round(dayFourTemp * 1.8 + 32.0);}
function toCelcius5(event) {
  event.preventDefault();
  temperatureElement5.innerHTML = dayFourTemp;
}
let fahrenheitLink5 = document.querySelector("#fahrenheit5");
fahrenheitLink5.addEventListener("click", toFahrenheit5);
let celciusLink5 = document.querySelector("#celcius5");
celciusLink5.addEventListener("click", toCelcius5);
  //day five
  let dayFiveTemp = Math.round(((response.data.list[32].main.temp)+(response.data.list[33].main.temp)+(response.data.list[34].main.temp)+(response.data.list[35].main.temp)+(response.data.list[36].main.temp)+(response.data.list[37].main.temp)+(response.data.list[38].main.temp)+(response.data.list[39].main.temp))/8);
  let dayFiveIcon = document.querySelector("#icon5");
  let dayFiveDisplay = document.querySelector("#temperature6");
  dayFiveDisplay.innerHTML = dayFiveTemp;
  dayFiveIcon.innerHTML = `<img src="http://openweathermap.org/img/wn/${response.data.list[35].weather[0].icon}@2x.png"/>`;

  let temperatureElement6 = document.querySelector("#temperature6");
function toFahrenheit6(event) {
  event.preventDefault();
  temperatureElement6.innerHTML = Math.round(dayFiveTemp * 1.8 + 32.0);}
function toCelcius6(event) {
  event.preventDefault();
  temperatureElement6.innerHTML = dayFiveTemp;
}
let fahrenheitLink6 = document.querySelector("#fahrenheit6");
fahrenheitLink6.addEventListener("click", toFahrenheit6);
let celciusLink6 = document.querySelector("#celcius6");
celciusLink6.addEventListener("click", toCelcius6);

  
}

