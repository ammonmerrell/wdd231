const short = document.querySelector('#currentYear');

const today = new Date();

short.innerHTML = `<span class="highlight">${newIntl.DateTimeFormat("en-US", { dateStyle: "short" }).format(today)}</span>`;