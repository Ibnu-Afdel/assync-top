const NASA_API_KEY = "8pllziuhQg6lz7L7vOkmw8rWbjF0OfAzTgcTCRLu";
const ASTRO_PIC_OF_THE_DAY_ENDPOINT = `https://api.nasa.gov/planetary/apod?api_key=${NASA_API_KEY}`;

async function fetchAPOD() {
  try {
    const response = await fetch(ASTRO_PIC_OF_THE_DAY_ENDPOINT);
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    const data = await response.json();
    displayAPOD(data);
  } catch (error) {
    console.error("Error:", error.message);
  }
}

function displayAPOD(data) {
  const apodContainer = document.getElementById("apod-container");
  apodContainer.innerHTML = `
          <img src="${data.url}" alt="${data.title}">
          <h3>${data.title}</h3>
          <p>${data.explanation}</p>
      `;
}
fetchAPOD();
