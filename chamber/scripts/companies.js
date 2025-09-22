const urltwo = 'https://raw.githubusercontent.com/ammonmerrell/wdd231/main/chamber/data/members.json';
const cards = document.querySelector("#companies");
async function getCompanyData() {
    const response = await fetch(urltwo);
    const data = await response.json();
    displayCompanies(data.companies);
}

getCompanyData();

const displayCompanies = (companies) => {
    companies.forEach((company) => {
        let card = document.createElement("section");
        let aname = document.createElement("p");
        let pnum = document.createElement("p");
        let alink = document.createElement("p");

        aname.textContent = `${company.name} ${company.address}`;
        pnum.textContent = `${company.phonenumber}`;
        alink.textContent = `${company.website}`;

        card.appendChild(aname);
        card.appendChild(pnum);
        card.appendChild(alink);
        cards.appendChild(card);
    });
}