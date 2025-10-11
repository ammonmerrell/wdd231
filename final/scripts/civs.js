import { civs } from '../data/civilizations.js'

const cards = document.querySelector('#civilizations');
async function getCivilizationData() {
    const response = await fetch(civs);
    const data = await response.json();
    displayCivs(data.civ);
}
getCivilizationData();

const displayCivs = (civ) => {
    civs.forEach((civ) => {
        let card = document.createElement('section');
        let aname = document.createElement('p');
        let abui = document.createElement('p');
        let dev = document.createElement('p');
        let civi = document.createElement('p');
        let mil = document.createElement('p');
        let pic = document.createElement('img');

        aname.textContent = `Civilization: ${civ.name}`;
        abui.textContent = `Ability: ${civ.ability}`;
        dev.textContent = `Infrastructure: ${civ.uniDev}`;
        civi.textContent = `Unique Civilian: ${civ.civUnit}`;
        mil.textContent = `unique millitary unit: ${civ.milUnit}`;

        card.appendChild(aname);
        card.appendChild(abui);
        card.appendChild(dev);
        card.appendChild(civi);
        card.appendChild(mil);
        cards.appendChild(card);

        cards.app
    });
}
displayCivs()