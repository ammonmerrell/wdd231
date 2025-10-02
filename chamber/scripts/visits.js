const visitDisplay = document.querySelector(".visited");
const lastVisit = new Date();
let visits = Number(window.localStorage.getItem("visits-ls"));
if (visits == 0) {
    visitDisplay.textContent = ` Welcome! Let us know if you have any questions.`;
    visits++;
} else if(visits <= 2 ) {
    visitDisplay.textContent = ` Back so soon! Awesome!`;
    visits++;
} else {
    visitDisplay.textContent = ` You last visited ${visits} days ago.`
    visits++;
}

localStorage.setItem("visits-ls", visits);