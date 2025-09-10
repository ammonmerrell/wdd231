const spotlights = document.querySelector('#spotlight');
let lastMo = document.lastModified;
spotlights.textContent = `${displayCompanies(DataTransfer.companies)} `;