const card = document.querySelector('#cards')
const mydialog = document.querySelector('#mydialog')
const infor = document.querySelector('#info')
const closeit = document.querySelector('#myclose')


let data = [
    {
        "name": "Salt Palace",
        "address": "100 S West Temple Salt Lake City, Utah, U.S.",
        "description": "The Calvin L. Rampton Salt Palace Convention Center, more commonly known as the Salt Palace, is a convention center in Salt Lake City, Utah. Named after Utah's 11th governor, Calvin L. Rampton, the moniker \"Salt Palace\" was previously used by two other venues in the city. The convention center was opened in February 1996, after two years of construction.The building was used as the Main Media Center during the 2002 Winter Olympics and is used for regular conventions held in the city, such as FanX, RootsTech, and the Outdoor Retailers convention. (image courtesy of Beneathtimp, CC0, via Wikimedia Commons)",
        "url": "images/salt-palace.webp"
        
    },
    {
        "name": "Delta Center",
        "address": "301 W. South Temple, Salt Lake City, Utah, U.S.",
        "description": "The Delta Center is an indoor venue in Salt Lake City. Opened in 1991, the arena is the home of the Utah Jazz of the National Basketball Association (NBA) and the Utah Mammoth of the National Hockey League (NHL). The arena has a seating capacity of 18,175 for basketball, up to 11,131 for ice hockey and indoor football, and 20,000 for concerts. It has 56 luxury suites and 668 club seats. (image courtesy of Paul Kucher.)",
        "url": "images/Delta-center.webp"
    },
    {
        "name": "Abravanel Hall",
        "address": "123 W. South Temple Salt Lake City, Utah",
        "description": "A concert hall for concerts; Abravanel Hall first opened in September 1979, and was originally known as Symphony Hall, but was renamed in May 1993 for Maurice Abravanel, conductor of the Utah Symphony.(image coutesy of icardo630, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons)",
        "url": "images/Slc_abravanel_hall.webp"
    },
    {
        "name": "Gallivan Center",
        "address": "239 S Main St Salt Lake City, Utah",
        "description": "The Gallivan (image courtest of An Errant Knight, CC BY-SA 4.0 <https://creativecommons.org/licenses/by-sa/4.0>, via Wikimedia Commons) ",
        "url": "images/Gallivan_Center_stage,_Oct_16.webp"
    },
    {
        "name": "Tabernacle",
        "address": "Temple Square Salt Lake City, UT 84150",
        "description": "The Tabernacle was made for General Conference until a new one was made in 2000.(image courtesy of Leon7, CC BY-SA 3.0 <https://creativecommons.org/licenses/by-sa/3.0>, via Wikimedia Commons)",
        "url": "images/S.L._Tabernacle_on_Temple_Square.webp"

    },
    {
        "name": "Conference Center",
        "address": "60 W North Temple St Salt Lake City, UT 84150 United States",
        "description": "The current place of general Conference and sometimes other activities.(imagy courtesy of Beneathtimp, CC0, via Wikimedia Commons)",
        "url": "images/Conference_Center_Theater,_entrance_(looking_north)_-_Salt_Lake_City,_Utah_-_23_May_2025_(cropped).webp"
    },
    {
        "name": "Beehive House",
        "address": "67 E South Temple Salt Lake City, UT 84150 United States",
        "description": "Brigham Young's house.(image courtesy of Beneathtimp, CC0, via Wikimedia Commons)",
        "url": "images/Beehive_House_-_Salt_Lake_City,_Utah_-_2_May_2020.webp"
    },
    {
        "name": "Salt Lake Temple",
        "address": "Temple Square Salt Lake City, UT 84150 United States",
        "description": "The Salt Lake Temple. (image courtesy of https://www.churchofjesuschrist.org/temples/photo-gallery/salt-lake-temple?lang=eng)",
        "url": "images//salt-lake-temple-37762.webp"
    }


]

closeit.addEventListener('click', () => mydialog.close())

function displayItems(infom) {
    console.log(infom)
    infom.forEach(level => {
        console.log(level)
        const divice = document.createElement('div')
        divice.classList.add("ad")
        const header2 = document.createElement('h2')
        header2.innerHTML = `${level.name}`
        const fig = document.createElement('figure')
        const pic = document.createElement('img')
        pic.src = `${level.url}`
        pic.alt = `${level.name}`
        pic.loading = 'lazy'
        const address1 = document.createElement('address')
        address1.innerHTML = `${level.address}`
        const paragraph = document.createElement('p')
        paragraph.innerHTML = `${level.description}`
        const learn = document.createElement('button')
        learn.textContent = 'Learn More'
        learn.addEventListener('click', () => {
            showStuff(level)
        });
        fig.appendChild(pic)
        card.appendChild(header2)
        card.appendChild(address1)
        card.appendChild(pic)
        card.appendChild(paragraph)
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