
/* =========================================
   1. SAMPLE WEATHER DATA
========================================= */

const weatherData = {

    ranchi: {
        city: "Ranchi, India",
        temperature: 24,
        condition: "Partly Cloudy",
        icon: "🌤️",
        feelsLike: 26,
        wind: 12,
        humidity: 65,
        forecast: [
            { icon: "☀️", condition: "Sunny", max: 28, min: 19 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 26, min: 18 },
            { icon: "☁️", condition: "Cloudy", max: 25, min: 17 },
            { icon: "🌧️", condition: "Rainy", max: 23, min: 18 },
            { icon: "⛅", condition: "Mostly Clear", max: 27, min: 19 },
            { icon: "☀️", condition: "Sunny", max: 29, min: 20 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 26, min: 18 }
        ]
    },

    delhi: {
        city: "New Delhi, India",
        temperature: 27,
        condition: "Sunny",
        icon: "☀️",
        feelsLike: 28,
        wind: 10,
        humidity: 48,
        forecast: [
            { icon: "☀️", condition: "Sunny", max: 30, min: 20 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 29, min: 19 },
            { icon: "☁️", condition: "Cloudy", max: 27, min: 18 },
            { icon: "☀️", condition: "Sunny", max: 31, min: 21 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 28, min: 20 },
            { icon: "☀️", condition: "Sunny", max: 32, min: 22 },
            { icon: "☁️", condition: "Cloudy", max: 27, min: 19 }
        ]
    },

    mumbai: {
        city: "Mumbai, India",
        temperature: 30,
        condition: "Partly Cloudy",
        icon: "🌤️",
        feelsLike: 34,
        wind: 15,
        humidity: 78,
        forecast: [
            { icon: "🌤️", condition: "Partly Cloudy", max: 32, min: 25 },
            { icon: "☀️", condition: "Sunny", max: 33, min: 26 },
            { icon: "☁️", condition: "Cloudy", max: 31, min: 25 },
            { icon: "🌧️", condition: "Rainy", max: 29, min: 24 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 32, min: 25 },
            { icon: "☀️", condition: "Sunny", max: 33, min: 26 },
            { icon: "☁️", condition: "Cloudy", max: 30, min: 24 }
        ]
    },

    kolkata: {
        city: "Kolkata, India",
        temperature: 28,
        condition: "Cloudy",
        icon: "☁️",
        feelsLike: 31,
        wind: 11,
        humidity: 72,
        forecast: [
            { icon: "☁️", condition: "Cloudy", max: 30, min: 23 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 31, min: 24 },
            { icon: "🌧️", condition: "Rainy", max: 28, min: 23 },
            { icon: "☀️", condition: "Sunny", max: 32, min: 24 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 30, min: 23 },
            { icon: "☁️", condition: "Cloudy", max: 29, min: 22 },
            { icon: "☀️", condition: "Sunny", max: 32, min: 24 }
        ]
    },

    patna: {
        city: "Patna, India",
        temperature: 26,
        condition: "Clear Sky",
        icon: "☀️",
        feelsLike: 27,
        wind: 9,
        humidity: 60,
        forecast: [
            { icon: "☀️", condition: "Sunny", max: 29, min: 20 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 28, min: 19 },
            { icon: "☁️", condition: "Cloudy", max: 27, min: 19 },
            { icon: "🌧️", condition: "Rainy", max: 25, min: 18 },
            { icon: "☀️", condition: "Sunny", max: 30, min: 20 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 28, min: 19 },
            { icon: "☀️", condition: "Sunny", max: 31, min: 21 }
        ]
    },

    bengaluru: {
        city: "Bengaluru, India",
        temperature: 23,
        condition: "Cloudy",
        icon: "☁️",
        feelsLike: 24,
        wind: 14,
        humidity: 68,
        forecast: [
            { icon: "🌤️", condition: "Partly Cloudy", max: 26, min: 19 },
            { icon: "☁️", condition: "Cloudy", max: 25, min: 18 },
            { icon: "🌧️", condition: "Rainy", max: 23, min: 19 },
            { icon: "🌤️", condition: "Partly Cloudy", max: 26, min: 18 },
            { icon: "☀️", condition: "Sunny", max: 27, min: 19 },
            { icon: "☁️", condition: "Cloudy", max: 25, min: 18 },
            { icon: "🌧️", condition: "Rainy", max: 24, min: 19 }
        ]
    }

};


/* =========================================
   2. SELECT HTML ELEMENTS
========================================= */

const searchForm = document.getElementById("search-form");
const cityInput = document.getElementById("city-search");
const searchMessage = document.getElementById("search-message");

const cityName = document.getElementById("city-name");
const currentTemp = document.getElementById("current-temp");
const weatherIcon = document.getElementById("weather-icon");
const weatherCondition = document.getElementById("weather-condition");
const feelsLike = document.getElementById("feels-like");
const windSpeed = document.getElementById("wind-speed");
const humidity = document.getElementById("humidity");

const forecastGrid = document.getElementById("forecast-grid");


/* =========================================
   3. DISPLAY CURRENT DATE
========================================= */

function displayDate() {

    const dateElement = document.getElementById("current-date");

    const today = new Date();

    const formattedDate = today.toLocaleDateString("en-IN", {
        weekday: "long",
        month: "long",
        day: "numeric"
    });

    dateElement.textContent = formattedDate;

}


/* =========================================
   4. DISPLAY CURRENT WEATHER
========================================= */

function displayWeather(data) {

    cityName.textContent = data.city;

    currentTemp.textContent = `${data.temperature}°`;

    weatherIcon.textContent = data.icon;

    weatherCondition.textContent = data.condition;

    feelsLike.textContent = `Feels like ${data.feelsLike}°`;

    windSpeed.textContent = `${data.wind} km/h`;

    humidity.textContent = `${data.humidity}%`;

}


/* =========================================
   5. GENERATE FORECAST CARDS
========================================= */

function displayForecast(forecast) {

    forecastGrid.innerHTML = "";

    const today = new Date();

    const dayFormatter = new Intl.DateTimeFormat("en-US", {
        weekday: "short"
    });

    forecast.forEach((day, index) => {

        const forecastDate = new Date(today);

        forecastDate.setDate(today.getDate() + index);

        const dayName = index === 0
            ? "Today"
            : dayFormatter.format(forecastDate);

        const card = document.createElement("article");

        card.className = "forecast-card";

        card.innerHTML = `
            <p class="forecast-day">${dayName}</p>

            <span class="forecast-icon" aria-hidden="true">
                ${day.icon}
            </span>

            <p class="forecast-condition">
                ${day.condition}
            </p>

            <div class="forecast-temp">
                <span class="forecast-max">${day.max}°</span>
                <span class="forecast-min">${day.min}°</span>
            </div>
        `;

        forecastGrid.appendChild(card);

    });

}


/* =========================================
   6. SEARCH CITY FUNCTIONALITY
========================================= */

searchForm.addEventListener("submit", function (event) {

    event.preventDefault();

    const searchedCity = cityInput.value
        .trim()
        .toLowerCase();

    if (!searchedCity) {
        searchMessage.textContent = "Please enter a city name.";
        return;
    }

    const data = weatherData[searchedCity];

    if (data) {

        displayWeather(data);

        displayForecast(data.forecast);

        searchMessage.textContent =
            `Showing sample weather data for ${data.city}.`;

        cityInput.value = "";

    } else {

        searchMessage.textContent =
            "City not found. Try Ranchi, Delhi, Mumbai, Kolkata, Patna or Bengaluru.";

    }

});


/* =========================================
   7. INITIALIZE APPLICATION
========================================= */

function initializeApp() {

    const defaultCity = weatherData.ranchi;

    displayDate();

    displayWeather(defaultCity);

    displayForecast(defaultCity.forecast);

}

initializeApp();
