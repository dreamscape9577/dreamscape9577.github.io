const currentWeather = document.getElementById("weather");
const currentLocation = document.getElementById("location");
const API_KEY = "78993dd77a74af2460df48e5b3f2a318";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    console.log(url);
    fetch(url)
        .then((response) => response.json())
        .then((data) => {
            currentLocation.innerText = data.name;
            currentWeather.innerText = `${data.weather[0].main}, (${data.main.temp}°C)`;
        });
}
function onGeoError() {
    alert("Can't find you. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
