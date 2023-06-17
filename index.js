function displayTemp(response) {
  console.log(response.data);
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
}

let apiKey = `866a208a73eeff02182218e9441647a1`;
let city = `Tokyo`;
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

console.log(apiUrl);

axios.get(apiUrl).then(displayTemp);
