const temp = document.querySelector('#current-temp');
const url = 'https://api.openweathermap.org/data/2.5/forecast?lat=40.76&lon=-111.89&units=imperial&appid=6c343c2a3ace250294bb79f581a2a9df';
const modal = document.querySelector('.myModal');
const openButton = document.querySelector('.button');
const closeModal = document.querySelector('.closeModal');
const civN = document.querySelector('#civN');
const civa = document.querySelector(".civa");
const civb = document.querySelector(".civb");
const civimg = document.querySelector(".civimg");

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
        civN.innerHTML = `Error found: ${error}`;
    }
}
function displayResults(data) {
    temp.innerHTML = `${data.list[0].main.temp}&deg;f`;
    let tempflo = data.list[0].main.temp;
    if (tempflo > 80.00) {
        let tempInt = parseInt(tempflo)
        let newInt = Math.floor(tempInt * 0.1) + 1;
        if (tempint < 10) {
            newInt = 14;
            civN.innerHTML = ` Civilization: ${civs[newInt].name}`;
            civa.innerHTML = ` Civilization: ${civs[newInt].name}`;
            civb.innerHTML = `Ability: ${civs[newInt].ability}\nInfrastacture: ${civs[newInt].unidev}\nCivilian: ${civs[newInt].civUnit}\nMillitary: ${civs[newInt].milUnit}`;
            civimg.src = `${civs[newInt].picture}`;
            civimg.alt = `${civs[newInt].name}`;
        }
        if (tempInt > 9) {
            newInt = 11;
            civN.innerHTML = ` Civilization: ${civs[newInt].name}`;
            civa.innerHTML = ` Civilization: ${civs[newInt].name}`;
            civb.innerHTML = `Ability: ${civs[newInt].ability}\nInfrastacture: ${civs[newInt].unidev}\nCivilian: ${civs[newInt].civUnit}\nMillitary: ${civs[newInt].milUnit}`;
            civimg.src = `${civs[newInt].picture}`;
            civimg.alt = `${civs[newInt].name}`;
        }

    }
    if (tempflo < 81.00) {
        let tempInt = parseInt(tempflo)
        let newInt =  Math.floor(tempInt * 0.1)
        civN.innerHTML = ` Civilization: ${civs[newInt - 1].name}`;
        civa.innerHTML = ` Civilization: ${civs[newInt - 1].name}`;
        civb.innerHTML = `Ability: ${civs[newInt - 1].ability}\nInfrastacture: ${civs[newInt - 1].unidev}\nCivilian: ${civs[newInt - 1].civUnit}\nMillitary: ${civs[newInt - 1].milUnit}`;
        civimg.src = `${civs[newInt-1].picture}`;
        civimg.alt = `${civs[newInt-1].name}`;
    }
    if (tempflo < 33.00) {
        let tempInt = parseInt(tempflo)
        let newInt = Math.floor(tempInt * 0.1) + 1;
        if (tempint < 4) {
            newInt = 13;
            civN.innerHTML = ` Civilization: ${civs[newInt].name}`;
            civa.innerHTML = ` Civilization: ${civs[newInt].name}`;
            civb.innerHTML = `Ability: ${civs[newInt].ability}\nInfrastacture: ${civs[newInt].unidev}\nCivilian: ${civs[newInt].civUnit}\nMillitary: ${civs[newInt].milUnit}`;
            civimg.src = `${civs[newInt].picture}`;
            civimg.alt = `${civs[newInt].name}`;
        }
        if (tempInt > 3) {
            newInt = 12;
            civN.innerHTML = ` Civilization: ${civs[newInt].name}`;
            civa.innerHTML = ` Civilization: ${civs[newInt].name}`;
            civb.innerHTML = `Ability: ${civs[newInt].ability}\nInfrastacture: ${civs[newInt].unidev}\nCivilian: ${civs[newInt].civUnit}\nMillitary: ${civs[newInt].milUnit}`;
            civimg.src = `${civs[newInt].picture}`;
            civimg.alt = `${civs[newInt].name}`;
        }
        
    }
}

apiFetch();

openButton.addEventListener('click', () => {
    modal.showModal()
});
closeModal.addEventListener('click', () => {
    modal.close();
})