const visitDisplay = document.querySelector(".visited");
let visits = Number(window.localStorage.getItem("visits-ls"));
if (visits == 0) {
    visitDisplay.textContent = ` Welcome, you have seen this page ${visits} times!`;
    visits++;
} else {
    visitDisplay.textContent = ` This has been visited ${visits} times.`;
    visits++;
}

localStorage.setItem("visits-ls", visits);