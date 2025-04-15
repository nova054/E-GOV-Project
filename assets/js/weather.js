const OPEN_WEATHER_API_KEY = "b4d1def1d9092457bd5c809d70cb3f14";

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

const cities = [
  { name: "Kathmandu", lat: 27.71, lon: 85.32 },
  { name: "Pokhara", lat: 28.20, lon: 83.98 },
  { name: "Biratnagar", lat: 26.45, lon: 87.27 },
  { name: "Nepalgunj", lat: 28.05, lon: 81.61 },
  { name: "Dhangadhi", lat: 28.69, lon: 80.59 },
  { name: "Janakpur", lat: 26.72, lon: 85.92 },
  { name: "Butwal", lat: 27.69, lon: 83.45 },
];

cities.forEach((city) => {
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${city.lat}&lon=${city.lon}&units=metric&appid=${OPEN_WEATHER_API_KEY}`;
  fetch(url)
    .then((response) => response.json())
    .then((data) => {
        const temp = data.main.temp;

        // Create a text label with temperature
        const tempLabel = L.marker([city.lat, city.lon], {
          icon: L.divIcon({
            className: 'temp-label',
            html: `<div style="font-size: 14px; color: red; font-weight: bold;">
                     ${temp.toFixed(1)}°C
                   </div>`,
            iconAnchor: [15, 0]
          })
        }).addTo(map);
  
        // Optional: Add marker with popup
        const marker = L.marker([city.lat, city.lon]).addTo(map);
        marker.bindPopup(`<b>${city.name}</b><br>Temperature: ${temp}°C`);
    })
    .catch((err) => console.error(`Error fetching data for ${city.name}`, err));
});
