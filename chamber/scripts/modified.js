const lastModif = document.querySelector("#lastModified");
let lastMod = document.lastModified;
lastModif.innerHTML = `<span class="highlight">${lastMod}</span> `;

const year = document.querySelector('#currentYear');

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span> `;