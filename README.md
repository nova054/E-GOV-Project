# DHM - Department of Hydrology and Meteorology Website

This is an improved version of the Department of Hydrology and Meteorology website for Nepal.

## Website Features

- Modern, responsive design with improved visuals
- Real-time hydrological data display
- Weather monitoring for major cities
- Publications and resources
- Contact information and form

## Weather Data Security

For security reasons, the website uses a static data approach instead of embedding API keys in the client-side code. To update the weather data:

### Option 1: Manual Update (Recommended)

1. Edit the `assets/js/weather-data.js` file
2. Update the `lastUpdated` timestamp to the current time in ISO format
3. Update temperature and weather conditions for each city
4. Commit and push the changes to GitHub

### Option 2: Automated Update (For Developers)

For a more automated approach, set up a separate private repository with a GitHub Action that:

1. Runs on a schedule (e.g., every 3 hours)
2. Makes API calls to OpenWeatherMap using a securely stored API key
3. Generates a new `weather-data.js` file
4. Commits the updated file to this repository

This approach keeps the API key secure while still providing regularly updated weather data.

## Development

To run this website locally:

1. Clone the repository
2. Open `index.html` in your browser

## Deployment

The website is deployed using GitHub Pages and can be accessed at:
https://nova054.github.io/E-GOV-Project/ 