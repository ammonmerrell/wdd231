const navbutton = document.querySelector('#ham-btn');
const navBar = document.querySelector('#nav-bar');

const gridButton = document.querySelector('#btn-grid');
const comp = document.querySelector('#companies')

navbutton.addEventListener('click', () => {
    navbutton.classList.toggle('show');
    navBar.classList.toggle('show');
});

gridButton.addEventListener('click', () => {
    gridButton.classList.toggle('form');
    comp.classList.toggle('form');
})


