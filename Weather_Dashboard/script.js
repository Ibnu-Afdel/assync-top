document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const searchBtn = document.getElementById("search-btn");
  const errorMessage = document.getElementById("error-message");
  const weatherResult = document.getElementById("weather-result");

  searchBtn.addEventListener("click", async () => {
    const cityName = cityInput.value.trim();

    if (!cityName) {
      errorMessage.textContent = "Please enter a city name.";
      errorMessage.classList.remove("hidden");
      weatherResult.classList.add("hidden");
      return;
    }

    errorMessage.classList.add("hidden"); // not working

    weatherResult.classList.add("hidden");
    const weatheResult = document.createElement("p");
    weatheResult.textContent = "Loading...";
    // console.log(`City Name : ${cityName}`);

    try {
      const apiKey = "10894d405d2c8a356439fe6d3c557053";
      const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;
      const response = await fetch(apiUrl);

      if (!response.ok) {
        throw new Error(`HTTP error! status : ${response.status}`);
      }

      const data = await response.json();

      if (data.cod === 200) {
        const weatherResult = document.getElementById("weather-result");

        const weatherName = document.createElement("h2");
        weatherName.textContent = `Weather in ${data.name}`;
        weatherResult.appendChild(weatherName);
        document.body.appendChild(weatherResult);
        // leme use innerhtml for time sake, not recommended so will remove it
        weatherResult.innerHTML = `
          <p>Temperature: ${data.main.temp}°C</p>
          <p>Feels Like: ${data.main.feels_like}°C</p>
          <p>Condition: ${data.weather[0].description}</p>
          <p>Humidity: ${data.main.humidity}%</p>
          <p>Wind Speed: ${data.wind.speed} m/s</p>
          <p>Pressure: ${data.main.pressure} hPa</p>
          <p>Sunrise: ${new Date(data.sys.sunrise * 1000).toLocaleTimeString()}</p>
          <p>Sunset: ${new Date(data.sys.sunset * 1000).toLocaleTimeString()}</p>
          <img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png" alt="${data.weather[0].description}">
        `;
        weatherResult.classList.remove("hidden");
      } else {
        throw new Error(data.message);
      }
    } catch (error) {
      errorMessage.textContent = `Error: ${error.message}`;
      errorMessage.classList.remove("hidden");
      weatherResult.classList.add("hidden");
    }
  });
});
