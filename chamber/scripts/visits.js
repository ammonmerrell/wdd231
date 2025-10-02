const visitDisplay = document.querySelector(".visited");
let visits = Date.now();
let lastVisit = Number(window.localStorage.getItem("lastVisit-ls"));
let daysFromVisit = (visits - lastVisit) / 86400000
console.log(daysFromVisit)
if (lastVisit == "") {
    visitDisplay.textContent = ` Welcome! Let us know if you have any questions.`;
    lastVisit = visits;
} else if(daysFromVisit < 1) {
    visitDisplay.textContent = ` Back so soon! Awesome!`;
    lastVisit = visits;
} else if (daysFromVisit < 2){
    visitDisplay.textContent = ` You last visited ${Math.round(daysFromVisit)} day ago.`
    lastVisit = visits;
} else {
    visitDisplay.textContent = ` You last visited ${Math.round(daysFromVisit)} days ago.`
    lastVisit = visits;
}

localStorage.setItem("lastVisit-ls", lastVisit);