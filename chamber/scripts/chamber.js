const appID = 'appid';

const geoLobos = {
    lat: -35.1829,
    lng: -59.0897
}

const weatherURL = `https://api.openweathermap.org/data/2.5/weather?lat=${geoLobos.lat}&lon=${geoLobos.lng}&appid=${appID}`;

const icon = document.querySelector('#icon');

async function getWeatherData() {
    try {
        let response = await fetch(weatherURL);
        if (response.ok) {
            const data = await response.json();
            console.log(data.weather[0].main);
        }
        else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}

icon.innerHTML = getWeatherData();