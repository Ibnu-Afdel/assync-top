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
  const apodImage = document.querySelector("#apod-image img");
  const apodTitle = document.querySelector("#apod-text h3");
  const apodDescription = document.querySelector("#apod-text p");

  apodImage.src = data.url;
  apodImage.alt = data.title;
  apodTitle.textContent = data.title;
  apodDescription.textContent = data.explanation;
}

document.getElementById("fetch-apod").addEventListener("click", async () => {
  const selectedDate = document.getElementById("apod-date").value;
  if (selectedDate) {
    const response = await fetch(
      `${ASTRO_PIC_OF_THE_DAY_ENDPOINT}&date=${selectedDate}`,
    );
    const data = await response.json();
    displayAPOD(data);
  } else {
    alert("Please select a date!");
  }
});

fetchAPOD();
