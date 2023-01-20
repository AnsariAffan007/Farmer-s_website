const timeEl = document.getElementById("time");
const dateEl = document.getElementById("date");
const currentWeatherItemsEl = document.getElementById("current-weather-items");
const timezone = document.getElementById("timezone");
const weatherForecastEl = document.getElementById("weather-forecast");
const currentTempEl = document.getElementById("current-temp");
const cityEl = document.getElementById("place")

const days = ["Sunday", "Monday", "Tuesday", "wednesday", "Thursday", "Friday", "Saturday"];
const months = [
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
  "Dec",
];

const API_KEY = "721b4b58e784c18082550ae49e83e7fd";

setInterval(() => {
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hour = time.getHours();
  const HoursIn12HrFormat = hour >= 13 ? hour % 12 : hour;
  const minutes = time.getMinutes();
  const ampm = hour >= 12 ? "PM" : "AM";

  timeEl.innerHTML =
    HoursIn12HrFormat + ":" + minutes + " " + `<span id="am-pm">${ampm}</span>`;
  dateEl.innerHTML = days[day] + ", " + date + " " + months[month];
}, 1000);


getWeatherData()
function getWeatherData() {
  navigator.geolocation.getCurrentPosition((success) => {
    let { latitude, longitude } = success.coords;

    fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`).then(res => res.json()).then(data => {
      console.log(data.main);

      showWeatherData(data);

    })

  })
}

function showWeatherData(data) {
  let { humidity, pressure, temp_max, temp_min } = data.main;
  let { speed } = data.wind;
  let { name } = data
  currentWeatherItemsEl.innerHTML = ` <div class="weather-items-1">
<div class="value">HUMIDITY</div>
<div class="value">${humidity}</div>
</div>
<div class="weather-items-1">
<div class="value">PRESSURE</div>
<div class="value">${pressure}</div>
</div>
<div class="weather-items-1">
<div class="value">WIND SPEED</div>
<div class="value">${speed}</div>
</div>
<div class="weather-items-1">
<div class="value">MAX TEMP</div>
<div class="value">${temp_max}</div>
</div>
`
  cityEl.innerHTML = `<div class="time-zone" id="time-zone">
  <i class="fa-solid fa-location-dot"></i> ${name}
</div>`

}