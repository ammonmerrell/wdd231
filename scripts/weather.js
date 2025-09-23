const weatherTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDest = document.querySelector('#figcaption');
const url = 'https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=6c343c2a3ace250294bb79f581a2a9df';



async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}

function displayResults(data) {

    let desc = data.weather[0].icon;
    weatherTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `https//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.weather[0].description);
    captionDest.textContent = `${data.weather.desc}`;
    console.log(weatherIcon);
}
apiFetch();

