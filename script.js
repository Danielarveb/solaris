const searchInput = document.getElementById('searchInput');
const planets = document.querySelectorAll('.planet'); // Select all planets
const planetNames = document.querySelectorAll('.planet-name');

const planetSwedishNames = {
  sun: "Solen",
  mercury: "Merkurius",
  venus: "Venus",
  earth: "Jorden",
  mars: "Mars",
  jupiter: "Jupiter",
  saturn: "Saturnus",
  uranus: "Uranus",
  neptune: "Neptunus"
};

searchInput.addEventListener('input', function () {
  const query = searchInput.value.toLowerCase().trim();

  if (query === '') {
    planets.forEach(function (planet) {
      planet.style.display = 'flex'; // Show all planets when search is cleared
      planet.querySelector('.planet-name').style.opacity = '1'; // Show the planet names
    });
    return;
  }

  planets.forEach(function (planet) {
    const planetClass = planet.classList[1]; // Get the planet's class
    const swedishPlanetName = planetSwedishNames[planetClass];

    // Show or hide the planet based on the search query
    if (swedishPlanetName && swedishPlanetName.toLowerCase().includes(query)) {
      planet.style.display = 'flex'; // Show the planet
      planet.querySelector('.planet-name').style.opacity = '1'; // Make the name visible
    } else {
      planet.style.display = 'none'; // Hide the planet if it doesn't match
    }
  });
});