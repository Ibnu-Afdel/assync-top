document.addEventListener("DOMContentLoaded", () => {
  const cityInput = document.getElementById("city-input");
  const searchBtn = document.getElementById("search-btn");

  searchBtn.addEventListener("click", () => {
    const cityName = cityInput.value.trim();
    console.log(`City Name : ${cityName}`);
  });
});
