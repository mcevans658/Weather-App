let dayTime = document.querySelector("#time");
let now = new Date();
let day = now.getDay();
let hours = now.getHours();
if (hours < 10) {
  hours = `0${hours}`;
}
let minutes = now.getMinutes();
if (minutes < 10) {
  minutes = `0${minutes};`;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
dayTime.innerHTML = `${days[day]}, ${hours}:${minutes}`;

function displayWeather(response) {
  document.querySelector("#city").innerHTML = response.data.name;
  document.querySelector("#temp").innerHTML =
    Math.round(response.data.main.temp) + "°F";
  document.querySelector("#humid").innerHTML = response.data.main.humidity;
  document.querySelector("#wind").innerHTML = Math.round(
    response.data.wind.speed
  );
}

function search(event) {
  event.preventDefault();
  let city = document.querySelector("#city-input").value;
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=842b36d55cb28eba74a018029d56b04c&units=imperial`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayWeather);
}
let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", search);
