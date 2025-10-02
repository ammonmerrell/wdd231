const card = document.querySelector('#cards')
const mydialog = document.querySelector('#mydialog')
const infor = document.querySelector('#info')
const closeit = document.querySelector('#myclose')


let data = [
    {
        "name": "Salt Palace",
        "address": "100 S West Temple Salt Lake City, Utah, U.S.",
        "description": "The Calvin L. Rampton Salt Palace Convention Center, more commonly known as the Salt Palace, is a convention center in Salt Lake City, Utah. Named after Utah's 11th governor, Calvin L. Rampton, the moniker \"Salt Palace\" was previously used by two other venues in the city. The convention center was opened in February 1996, after two years of construction.The building was used as the Main Media Center during the 2002 Winter Olympics and is used for regular conventions held in the city, such as FanX, RootsTech, and the Outdoor Retailers convention. (image courtesy of Beneathtimp, CC0, via Wikimedia Commons)"
        
    },
    {
        "name": "Delta Center",
        "address": "301 W. South Temple, Salt Lake City, Utah, U.S.",
        "description": "The Delta Center is an indoor venue in Salt Lake City. Opened in 1991, the arena is the home of the Utah Jazz of the National Basketball Association (NBA) and the Utah Mammoth of the National Hockey League (NHL). The arena has a seating capacity of 18,175 for basketball, up to 11,131 for ice hockey and indoor football, and 20,000 for concerts. It has 56 luxury suites and 668 club seats. (image courtesy of Paul Kucher.)"
    },
    {
        "name": "Abravanel Hall",
        "address": "123 W. South Temple, Salt Lake City, Utah",
        "description": "A concert hall for concerts; Abravanel Hall first opened in September 1979, and was originally known as Symphony Hall, but was renamed in May 1993 for Maurice Abravanel, conductor of the Utah Symphony.(image coutesy of icardo630, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons)"
    },
    {
        "name": "Gallivan Center",
        "address": "Salt Lake City, Utah",
        "description": "The Gallivan (image courtest of An Errant Knight, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons) "
    },
    {
        "name": "Tabernacle",
        "address": "Non-Profit Membership is free from taxis.",
        "description": "The Tabernacle was made for General Conference until a new one was made in 2000.(image courtesy of Leon7, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons)"

    },
    {
        "name": "Conference Center",
        "address": "Bronze Membership allows for more locations then non-profit.",
        "description": "The current place of general Conference and sometimes other activities.(imagy courtesy of Beneathtimp, CC0, via Wikimedia Commons)"
    },
    {
        "name": "Beehive House",
        "address": "Silver Membership allows for more locations then Bronze and is featured on the homepage.",
        "description": "Brigham Young's house.(image courtesy of Beneathtimp, CC0, via Wikimedia Commons)"
    },
    {
        "name": "Salt Lake Temple",
        "address": "Gold Membership is the hightest level and has the most locations and features.",
        "description": "The Salt Lake Temple. (image courtesy of https://www.churchofjesuschrist.org/temples/photo-gallery/salt-lake-temple?lang=eng)"
    }


]

closeit.addEventListener('click', () => mydialog.close())

function displayItems(infom) {
    console.log(infom)
    infom.forEach(level => {
        console.log(level)
        const divice = document.createElement('div')
        divice.classList.add("ad")
        divice.innerHTML = `${level.name}`
        const learn = document.createElement('button')
        learn.textContent = 'Learn More'
        learn.addEventListener('click', () => {
            showStuff(level)
        });
        card.appendChild(divice)
        card.appendChild(learn)

    });
}

displayItems(data)

function showStuff(x) {
    infor.innerHTML = `${x.name}\n${x.info}\n${x.description}`
    console.log(x.level)
    console.log(x.info)
    mydialog.show()
}