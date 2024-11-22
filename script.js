const apiKey = '4fafa66bb6eced7752e6de7da6f5c9df'; // Your OpenWeatherMap API key

document.getElementById('getWeatherButton').addEventListener('click', function() {
    const location = document.getElementById('locationInput').value;
    if (location) {
        fetchWeatherData(location);
    } else {
        alert('Please enter a location.');
    }
});

function fetchWeatherData(location) {
    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${4fafa66bb6eced7752e6de7da6f5c9df}&units=metric`;

    fetch(apiUrl)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Error: ${response.status} - ${response.statusText}`);
            }
            return response.json();
        })
        .then(data => displayWeatherData(data))
        .catch(error => {
            console.error('Error fetching data:', error);
            alert(error.message);
        });
}

function displayWeatherData(data) {
    const weatherDisplay = document.getElementById('weatherDisplay');
    const { name, main, weather } = data;
    const weatherHTML = `
        <h2>${name}</h2>
        <p>Temperature: ${main.temp}°C</p>
        <p>Humidity: ${main.humidity}%</p>
        <p>Conditions: ${weather[0].description}</p>
    `;
    weatherDisplay.innerHTML = weatherHTML;
}
