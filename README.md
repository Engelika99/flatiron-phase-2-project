# Fashionable In Any Weather

Fashionable In Any Weather is a weather app that provides weather information to help you plan your fashionable outfits in advance.

## Features

* View a weather calendar with temperature and precipitation information for each day.
* Add weather details including date, weather conditions, clothing recommendations, and an optional image.
* View detailed weather information for specific dates.

### Code Structure

The code for the Fashionable In Any Weather app is organized into six components:

* ***App.js***: The main component that sets up the routing for different pages.
* ***Home.js***: The home page component with a welcome message and a link to the weather calendar.
* ***NavBar.js***: The navigation bar component with links to the home page, weather calendar, and weather details.
* ***Calendar.js***: The weather calendar component that displays weather information for each day of the month.
* ***WeatherDetails.js***: The weather details component that displays a list of weather details and allows adding new details.
* ***Form.js***: The form component for adding new weather details.


## Technologies Used


* React Router - v5

* Open-Meteo API - retrieves weather information for a specific location and date range. It uses the latitude and longitude coordinates for New York City by default, but you can modify it to fetch data for other locations. 
https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&hourly=temperature_2m,precipitation_probability,rain,showers,snowfall,cloudcover,cloudcover_high&daily=precipitation_hours&temperature_unit=fahrenheit&windspeed_unit=mph&precipitation_unit=inch&timezone=America%2FNew_York&forecast_days=16&models=best_match

* npm install react-icons - to import icons in Calendar.js

* Images - https://unsplash.com/

* Fetch API
### Backend Code GitHub Repository
https://github.com/Engelika99/flatiron-phase-2-react-backend-baby-weather-app

* React - installation and how to use intructions below


## Getting Started with Create React App

***First fork and clone the repository and npm install***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

* Need help understanding useState? Checkout my blog here:
https://medium.com/@engelikaking99/simple-to-understand-information-on-usestate-f43672a4ac06

## Contributing

Contributions to the Fashionable In Any Weather app are welcome! If you find any issues or have suggestions for improvements, feel free to submit a pull request or open an issue.

## License

The Fashionable In Any Weather app is open source and available under the MIT License.
