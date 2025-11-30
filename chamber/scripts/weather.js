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

const url = 'https://api.weather.gov/gridpoints/SLC/100,175/forecast/hourly';
const urlf = 'https://api.nasa.gov/planetary/apod?api_key=B8IHaoaxXWHG5qLjOkEGGBU8DdRzfgB3Zkuugk8i';
const urlm = 'https://www.omdbapi.com/?t=up&apikey=3cf352d ';

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

async function apiFetch1() {
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

async function apiFetch2() {
    try {
        const response = await fetch(urlm);
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

    console.log(data.properties.periods[0].probabilityOfPrecipitation.value)
    weatherTemp.innerHTML = `${data.properties.periods[0].temperature}&deg;F`;
    const iconsrc = `${data.properties.periods[0].icon}`;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', data.properties.periods[0].shortForecast);
    captionDest.textContent = `${data.properties.periods[0].shortForecast}`;

    console.log(data.properties.periods[0].probabilityOfPrecipitation.value)
    weatherTemp.innerHTML = `${data.properties.periods[0].temperature}&deg;F`;
    const iconsrc1 = `${data.properties.periods[1].icon}`;

    weatherIcon1.setAttribute('src', iconsrc);
    weatherIcon1.setAttribute('alt', data.properties.periods[1].shortForecast);
    captionDest1.textContent = `${data.properties.periods[1].shortForecast}`;

    console.log(data.properties.periods[1].probabilityOfPrecipitation.value)
    weatherTemp1.innerHTML = `${data.properties.periods[1].temperature}&deg;F`;
    const iconsrc2 = `${data.properties.periods[2].icon}`;

    weatherIcon2.setAttribute('src', iconsrc);
    weatherIcon2.setAttribute('alt', data.properties.periods[2].shortForecast);
    captionDest2.textContent = `${data.properties.periods[2].shortForecast}`;

    console.log(data.properties.periods[2].probabilityOfPrecipitation.value)
    weatherTemp2.innerHTML = `${data.properties.periods[2].temperature}&deg;F`;
    const iconsrc3 = `${data.properties.periods[3].icon}`;

    weatherIcon3.setAttribute('src', iconsrc);
    weatherIcon3.setAttribute('alt', data.properties.periods[3].shortForecast);
    captionDest3.textContent = `${data.properties.periods[3].shortForecast}`;

    console.log(data.properties.periods[3].probabilityOfPrecipitation.value)
    weatherTemp3.innerHTML = `${data.properties.periods[3].temperature}&deg;F`;
    

    

    // NASA one

    // weatherTemp1.innerHTML = `${data.title}`;
    // const iconsrc1 = `${data.url}`;

    // weatherIcon1.setAttribute('src', iconsrc1);
    // weatherIcon1.setAttribute('alt', data.Title);
    // captionDest1.textContent = `${data.explanation}`;

    //     Movie data
    
    // weatherTemp2.innerHTML = `${data.Title}&deg;F`;
    // const desc = data.Poster;
    // console.log(data.Title)
    // weatherIcon2.setAttribute('src', desc);
    // weatherIcon2.setAttribute('alt', data.Title);
    // captionDest2.textContent = data.Plot;




}
apiFetch();
// apiFetch1();
// apiFetch2();
