// Map initialization for Nepal
const map = L.map("map").setView([28.3949, 84.124], 7); // Center of Nepal
L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution: "&copy; OpenStreetMap contributors",
}).addTo(map);

const nepalBoundary = [
  [30.418, 80.058],
  [30.422, 88.201],
  [26.347, 88.174],
  [26.397, 80.056]
];

// Mask: Big polygon covering the whole world, with a hole for Nepal
const worldMask = [
  [
    [-90, -360],
    [90, -360],
    [90, 360],
    [-90, 360],
    [-90, -360]
  ],
  nepalBoundary  // "hole" for Nepal
];

// Add masking polygon
L.polygon(worldMask, {
  color: "#000",
  fillColor: "#fff",
  fillOpacity: 0.9,
  stroke: false
}).addTo(map);

// Add Nepal border outline
L.polygon(nepalBoundary, {
  color: "#000",
  fillOpacity: 0,
  weight: 2
}).addTo(map);

// Fit map to Nepal and prevent panning out
const bounds = L.latLngBounds(nepalBoundary);
map.fitBounds(bounds);
map.setMaxBounds(bounds);

// Display last update time
document.addEventListener('DOMContentLoaded', function() {
  const mapContainer = document.getElementById('map').parentElement;
  const lastUpdated = document.createElement('div');
  lastUpdated.className = 'weather-last-updated';
  
  // Format the date for display
  const updatedDate = new Date(weatherData.lastUpdated);
  const formattedDate = updatedDate.toLocaleString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit'
  });
  
  lastUpdated.innerHTML = `<small>Weather data last updated: ${formattedDate}</small>`;
  mapContainer.appendChild(lastUpdated);
});

// Use pre-fetched weather data instead of API calls
weatherData.cities.forEach((city) => {
  // Create a text label with temperature
  const tempLabel = L.marker([city.lat, city.lon], {
    icon: L.divIcon({
      className: 'temp-label',
      html: `<div style="font-size: 14px; color: red; font-weight: bold;">
               ${city.temp.toFixed(1)}°C
             </div>`,
      iconAnchor: [15, 0]
    })
  }).addTo(map);

  // Add marker with popup
  const marker = L.marker([city.lat, city.lon]).addTo(map);
  marker.bindPopup(`
    <b>${city.name}</b><br>
    Temperature: ${city.temp}°C<br>
    Humidity: ${city.humidity}%<br>
    Conditions: ${city.description}
  `);
});
