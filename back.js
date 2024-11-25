
    document.getElementById('getWeather').addEventListener('click', function() {
        const cityName = document.getElementById('name').value; 
        const apiKey = '4691f876e06b330ca4a021df2cfc13bc';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        fetch(apiUrl)
            .then(response => {
                if (!response.ok) {
                    throw new Error('City not found. Please enter a valid city name.');
                }
                return response.json();
            })
            .then(data => {
                const weatherInfo = `
                    <h2>Weather in ${data.name}</h2>
                    <p>Temperature: ${data.main.temp} °C</p>
                    <p>Weather: ${data.weather[0].description}</p>
                    <p>Humidity: ${data.main.humidity}%</p>
                    <p>Wind Speed: ${data.wind.speed} m/s</p>
                `;
                document.getElementById('weatherInfo').innerHTML = weatherInfo;
            })
            .catch(error => {
                document.getElementById('weatherInfo').innerHTML = `<p>Error: ${error.message}</p>`;
            });
    });
