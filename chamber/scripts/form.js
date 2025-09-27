const card = document.querySelector('#cards')
const mydialog = document.querySelector('#mydialog')
const infor = document.querySelector('#info')
const closeit = document.querySelector('#myclose')
const openbut = document.querySelector('#open')

let cardLevel = [
    {
        "level": "NP Membership",
        "info": "Non-Profit Membership is free from taxis."
    },
    {
        "level": "Bronze Membership",
        "info": "Bronze Membership allows for more locations then non-profit."
    },
    {
        "level": "Silver Membership",
        "info": "Silver Membership allows for more locations then Bronze and is featured on the homepage."
    },
    {
        "level": "Gold Membership",
        "info": "Gold Membership is the hightest level and has the most locations and features."
    }

]

closeit.addEventListener('click', () => mydialog.close())

function displayItems(data) {
    console.log(data)
    data.forEach(level => {
        console.log(level)
        const divice = document.createElement('div')
        divice.innerHTML = `a`
        openbut.addEventListener('click', () => showStuff(level));
        card.appendChild(divice)
    });
}

displayItems(cardLevel)

function showStuff(x) {
    infor.innerHTML = `${x.level}\n${x.info}`
    console.log(x.level)
    console.log(x.info)
    mydialog.showModel()
}