const url = './data/members.json';
const cards = document.querySelector('#members');

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();
    displayMembers(data);
}

const displayMembers = (members) => {
    members.forEach((member) => {
        let card = document.createElement('section');
        let name = document.createElement('h2');
        let address = document.createElement('p');
        let phone = document.createElement('p');

        name.textContent = `${member.name}`;

        address.textContent = `${member.address}`;
        phone.textContent = `${member.phone}`;

        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        cards.appendChild(card);
    });
}

getMembersData();