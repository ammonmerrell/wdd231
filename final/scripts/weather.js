const temp = document.querySelector('#current-temp');
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.76&lon=-111.89&units=imperial&appid=6c343c2a3ace250294bb79f581a2a9df';
const civN = document.querySelector('#civN');

import { civs } from '../data/civilizations.js'


async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
}
function displayResults(data) {
    temp.innerHTML = `${data.list[0].main.temp}&deg;f`;
    let tempflo = data.list[0].main.temp;
    if (tempflo < 80.00) {
        let tempInt = parseInt(tempflo)
        let newInt =  Math.floor(tempInt * 0.1)
        civN.innerHTML = `Civilization: ${civs[newInt-1].name}`;
    }
}

apiFetch();