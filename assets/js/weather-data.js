// Pre-fetched weather data for Nepal cities
// This static data is used instead of making direct API calls with keys
// Data should be updated periodically by administrators

const weatherData = {
  "lastUpdated": "2024-07-05T08:00:00", // ISO format timestamp
  "cities": [
    {
      "name": "Kathmandu",
      "lat": 27.71,
      "lon": 85.32,
      "temp": 28.2,
      "humidity": 65,
      "description": "Partly cloudy",
      "icon": "04d"
    },
    {
      "name": "Pokhara",
      "lat": 28.20,
      "lon": 83.98,
      "temp": 27.5,
      "humidity": 72,
      "description": "Light rain",
      "icon": "10d"
    },
    {
      "name": "Biratnagar",
      "lat": 26.45,
      "lon": 87.27,
      "temp": 32.4,
      "humidity": 78,
      "description": "Mostly cloudy",
      "icon": "03d"
    },
    {
      "name": "Nepalgunj",
      "lat": 28.05,
      "lon": 81.61,
      "temp": 33.8,
      "humidity": 60,
      "description": "Clear sky",
      "icon": "01d"
    },
    {
      "name": "Dhangadhi",
      "lat": 28.69,
      "lon": 80.59,
      "temp": 34.1,
      "humidity": 62,
      "description": "Clear sky",
      "icon": "01d"
    },
    {
      "name": "Janakpur",
      "lat": 26.72,
      "lon": 85.92,
      "temp": 31.6,
      "humidity": 70,
      "description": "Light rain",
      "icon": "10d"
    },
    {
      "name": "Butwal",
      "lat": 27.69,
      "lon": 83.45,
      "temp": 30.2,
      "humidity": 68,
      "description": "Partly cloudy",
      "icon": "04d"
    }
  ]
}; 