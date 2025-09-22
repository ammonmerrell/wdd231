const url = 'https://byui-cse.github.io/cse-ww-program/data/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    // console.table(data.prophets);
    displayProphets(data.prophets);
}
getProphetData();

const displayProphets = (prophets) => {
    prophets.forEach((prophet) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let place = document.createElement("p");
        let birthday = document.createElement("p");
        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        portrait.setAttribute('src', prophet.imageurl);
        portrait.setAttribute("alt", `portrait of ${prophet.name} ${prophet.lastname}.`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", 340);
        portrait.setAttribute("height", 440);

        place.textContent = `Place of birth: ${prophet.birthplace}`;
        birthday.textContent = `Date of birth: ${prophet.birthdate}`;

        card.appendChild(fullName);
        card.appendChild(portrait);
        card.appendChild(birthday);
        card.appendChild(place)
        
        
        cards.appendChild(card);
    });
}
