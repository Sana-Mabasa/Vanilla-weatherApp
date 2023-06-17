function formatDate(timestamp) {
  // calculate the date
  let date = new Date(timestamp);
  let hours = date.getHours();
  let minutes = date.getMinutes();
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  if (hours < 10) {
    hours = `0${hours}`;
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
  let day = days[date.getDay()];
  return `${day} ${hours}:${minutes}`;
}

function displayTemp(response) {
  let temperatureElement = document.querySelector("#temp");
  let city = document.querySelector("#city");
  city.innerHTML = response.data.name;
  temperatureElement.innerHTML = Math.round(response.data.main.temp);
  let description = document.querySelector("#discription");
  description.innerHTML = response.data.weather[0].description;
  let wind = document.querySelector("#wind");
  wind.innerHTML = Math.round(response.data.wind.speed);
  let humidity = document.querySelector("#humidity");
  humidity.innerHTML = Math.round(response.data.main.humidity);
  let dateElement = document.querySelector("#day");
  dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = `866a208a73eeff02182218e9441647a1`;
let city = `Pretoria`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemp);
