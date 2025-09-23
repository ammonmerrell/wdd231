const weatherTemp = document.querySelector('#current-tempm');
const weatherIcon = document.querySelector('#weather-iconm');
const captionDest = document.querySelector('#figcaptionm');

const weatherTemp1 = document.querySelector('#current-temp1');
const weatherIcon1 = document.querySelector('#weather-icon1');
const captionDest1 = document.querySelector('#figcaption1');

const weatherTemp2 = document.querySelector('#current-temp2');
const weatherIcon2 = document.querySelector('#weather-icon2');
const captionDest2 = document.querySelector('#figcaption2');

const weatherTemp3 = document.querySelector('#current-temp3');
const weatherIcon3 = document.querySelector('#weather-icon3');
const captionDest3 = document.querySelector('#figcaption3');

const url = 'https://api.openweathermap.org/data/2.5/weather?lat=40.76&lon=-111.89&units=imperial&appid=6c343c2a3ace250294bb79f581a2a9df';
const urlf = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.76&lon=-111.89&units=imperial&appid=6c343c2a3ace250294bb79f581a2a9df';


async function apiFetch() {
    try {
        const response = await fetch(urlf);
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

    let desc = data.list[0].weather[0].icon;
    weatherTemp.innerHTML = `${data.list[0].main.temp}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[0].weather[0].icon}@2x.png`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.list[0].weather[0].description);
    captionDest.textContent = `${data.list[0].weather[0].description}`;

    let desc1 = data.list[1].weather[0].icon;
    weatherTemp1.innerHTML = `${data.list[1].main.temp}&deg;F`;
    const iconsrc1 = `https://openweathermap.org/img/wn/${data.list[1].weather[0].icon}@2x.png`;

    weatherIcon1.setAttribute('src', iconsrc1);
    weatherIcon1.setAttribute('alt', data.list[1].weather[0].description);
    captionDest1.textContent = `${data.list[1].weather[0].description}`;

    let desc2 = data.list[2].weather[0].icon;
    weatherTemp2.innerHTML = `${data.list[2].main.temp}&deg;F`;
    const iconsrc2 = `https://openweathermap.org/img/wn/${data.list[2].weather[0].icon}@2x.png`;

    weatherIcon2.setAttribute('src', iconsrc2);
    weatherIcon2.setAttribute('alt', data.list[2].weather[0].description);
    captionDest2.textContent = `${data.list[2].weather[0].description}`;


    let desc3 = data.list[3].weather[0].icon;
    weatherTemp3.innerHTML = `${data.list[3].main.temp}&deg;F`;
    const iconsrc3 = `https://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@2x.png`;

    weatherIcon3.setAttribute('src', iconsrc3);
    weatherIcon3.setAttribute('alt', data.list[3].weather[0].description);
    captionDest3.textContent = `${data.list[3].weather[0].description}`;


}
apiFetch();


