const searchInput = document.getElementById('searchInput');
const planets = document.querySelectorAll('.planet'); // Välj alla planeter
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
      planet.style.display = 'flex'; // visa alla planeters namn efter sök
      planet.querySelector('.planet-name').style.opacity = '1'; // visa planetens namn
    });
    return;
  }

  planets.forEach(function (planet) {
    const planetClass = planet.classList[1]; // Få planetens klass
    const swedishPlanetName = planetSwedishNames[planetClass];

    // Visa eller dölj planeten baserat på sökfrågan
    if (swedishPlanetName && swedishPlanetName.toLowerCase().includes(query)) {
      planet.style.display = 'flex'; // visa planeten
      planet.querySelector('.planet-name').style.opacity = '1'; // Gör namnet synligt
    } else {
      planet.style.display = 'none'; // Göm planeten om den inte matchar
    }
  });
});
