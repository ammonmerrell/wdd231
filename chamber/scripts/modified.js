const lastModif = document.querySelector("#lastModified");
let lastMod = document.lastModified;
lastModif.innerHTML = `<span class="highlight">${lastMod}</span>`;