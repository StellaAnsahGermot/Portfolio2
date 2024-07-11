const apikey = '37d88614a2dcfc62b7c877e523502c81';
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=';
const locationInput = document.getElementById('locationInput');
const searchButton = document.getElementById('location');
const locationElement = document.getElementById('temperature');
const descriptionElement = document.getElementById('description');

searchButton.addEventListener('click', () => {
    const location = locationInput.value;
    if (location) {
        fetchWeather(location);
    }
});

function fetchWeather(location) {
    const url = `${apiUrl}${location}&appid=${apikey}&units=metric`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = Math.round(data.main.temp) + '°C';
            descriptionElement.textContent = data.weather[0].description;
        })
        .catch(error => {
            console.error('Error fetching weather data:', error);
        });
}

function fetchForecast(location) {
    const forecastUrl =
    `https://api.openweathermap.org/data/2.5/forecast?q=${location}&appid=${apikey}&units=metric`;
}
