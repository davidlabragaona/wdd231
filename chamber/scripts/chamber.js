const icon = document.querySelector('#icon');

async function getWeatherData() {
    let data = await fetch('www.google.com');
    data = 'David';
    return data;
}

icon.innerHTML = await getWeatherData();