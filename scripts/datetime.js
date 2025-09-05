const year = document.querySelector('#currentYear');

const today = new Date();

year.innerHTML = `<span class="highlight">${today.getFullYear()}</span>`;

// *****lastModified*****

const lastMod = document.querySelector('#lastModified');

let oLastModif = document.lastModified;
// let oLastModif = new Date(document.lastModified);

lastMod.innerHTML = `<span class="highlight">${oLastModif}</span>`;