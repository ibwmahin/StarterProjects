const apiKey = "(your api key here)";
const apiUrl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const searchBox = document.querySelector("#input");
const searchBtn = document.querySelector("#button");
const weatherIcon = document.querySelector(".weather-icon");

async function checkWeather(city) {
  const response = await fetch(`${apiUrl}${city}&appid=${apiKey}`);

  if (response.status === 404) {
    document.querySelector(".error").style.display = "block";
    document.querySelector(".weather").style.display = "none";
  } else {
    const data = await response.json();
    console.log(data);
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML =
      Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML =
      Math.round(data.wind.speed) + " km/h";

    switch (data.weather[0].main) {
      case "Clouds":
        weatherIcon.src = "assets/img/clouds.png";
        break;
      case "Clear":
        weatherIcon.src = "assets/img/clear.png";
        break;
      case "Rain":
        weatherIcon.src = "assets/img/rain.png";
        break;
      case "Drizzle":
        weatherIcon.src = "assets/img/drizzle.png";
        break;
      case "Mist":
        weatherIcon.src = "assets/img/mist.png";
        break;
      default:
        break;
    }
    searchBox.value = "";

    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
  }
}

searchBtn.addEventListener("click", (e) => {
  e.preventDefault();
  checkWeather(searchBox.value);
});
