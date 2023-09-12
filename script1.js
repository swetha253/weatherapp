const weatherData = document.querySelector('.weather-data p');
async function fetchRandomCityWeather() {
  const apiKey = '95d5c356e48c8e3c3cccac58d9036a96'; 
  const cities = ['New York', 'London', 'Tokyo', 'Paris', 'Sydney', 'Berlin']; 
  const randomCity = cities[Math.floor(Math.random() * cities.length)];
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${randomCity}&appid=${apiKey}&units=metric`;

  try {
    const response = await fetch(apiUrl);
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}
function updateWeatherInfo(weather) {
  if (weather) {
    weatherData.innerHTML = `
      <strong>City:</strong> ${weather.name}<br>
      <strong>Temperature:</strong> ${weather.main.temp}°C<br>
      <strong>Weather:</strong> ${weather.weather[0].description}
    `;
    
  } else {
    weatherData.textContent = 'Failed to load weather data.';
  }
}
document.addEventListener('DOMContentLoaded', () => {
  fetchRandomCityWeather().then((data) => {
    updateWeatherInfo(data);
  });
});