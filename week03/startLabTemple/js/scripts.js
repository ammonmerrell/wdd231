import {temples} from '../data/temples.js'
// console.log(temples)

import { url } from '../data/temples.js'
// console.log(url)

const showhere = document.querySelector('#showHere')
const mydialog = document.querySelector('#mydialog')
const mytitle = document.querySelector('#mytitle')
const myinfo = document.querySelector('#myinfo')
const myclose = document.querySelector('#myclose')
myclose.addEventListener("click", () => mydialog.close())

function displayItems(data) {
    console.log(data)
    data.forEach(x => {
        console.log(x)
        const photo = document.createElement('img')
        photo.src = `${url}${x.path}`
        photo.alt = x.name
        photo.addEventListener("click", () => showStuff(x));
        showhere.appendChild(photo)
    });
}

displayItems(temples)

function showStuff(x) {
    mytitle.innerHTML = x.name
    myinfo.innerHTML = `Dedicated ${x.dedicated} by ${x.person}`
    mydialog.showModal()
}