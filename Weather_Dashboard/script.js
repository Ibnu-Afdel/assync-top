document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const searchBtn = document.getElementById("search-btn");
  const errorMessage = document.getElementById("error-message");

  searchBtn.addEventListener("click", () => {
    const cityName = cityInput.value.trim();

    if (!cityName) {
      errorMessage.textContent = "Please enter a city name.";
      errorMessage.classList.remove("hidden");
      return;
    }

    errorMessage.classList.add("hidden"); // not working

    console.log(`City Name : ${cityName}`);
  });
});
