const curYear = document.querySelector('#year');

const now = new Date();

curYear.innerHTML = `<span class="highlight">${now.getFullYear()}</span> `;

const mod = document.querySelector('#modified');
let lastM = document.lastModified;
mod.innerHTML = `<span class="highlight">${lastM}</span> `