document.getElementById('getWeatherBtn').addEventListener('click', function () {
    let city = document.getElementById('cityInput').value;
    let apiKey = 'b5aa62fe90b36d8ba23bf04d442a81e5';  //API Key

    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`)
        .then(response => response.json())
        .then(data => {
            let weatherInfo = `
                <div class="card">
                    <div class="card-body">
                        <h5 class="card-title">${data.name}</h5>
                        <p class="card-text">Temperatura: ${data.main.temp}°C</p>
                        <p class="card-text">Clima: ${data.weather[0].description}</p>
                        <p class="card-text">Húmedad: ${data.main.humidity}%</p>
                    </div>
                </div>
            `;
            document.getElementById('weatherInfo').innerHTML = weatherInfo;
        })
        .catch(error => {
            document.getElementById('weatherInfo').innerHTML = `<p class="text-danger">¡Ciudad no encontrada!</p>`;
        });
});
