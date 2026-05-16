// ==================
// Footer Information
// ==================

const year = document.querySelector('#currentyear');
const lastModified = document.querySelector('#lastModified');

year.textContent = new Date().getFullYear();
lastModified.textContent = `Last Modified: ${document.lastModified}`;

// ==================
// Navigation Menu
// ==================

const navButton = document.querySelector('#nav-button');
const navMenu = document.querySelector('#nav-menu');

navButton.addEventListener('click', () => {
    navMenu.classList.toggle('open');
});

// ==================
// Directory View Buttons
// ==================

const gridBtn = document.querySelector('#grid');
const listBtn = document.querySelector('#list');
const membersContainer = document.querySelector('#members');

// Default view
membersContainer.classList.add('grid');

// Grid view
gridBtn.addEventListener('click', () => {
    membersContainer.classList.add('grid');
    membersContainer.classList.remove('list');
});

// List view
listBtn.addEventListener('click', () => {
    membersContainer.classList.add('list');
    membersContainer.classList.remove('grid');
});

// ==================
// Fetch Members Data
// ==================

const url = 'data/members.json';

async function getMembersData() {
    const response = await fetch(url);
    const data = await response.json();

    displayMembers(data.members);
}

// ==================
// Display Members
// ==================

const displayMembers = (membersData) => {

    membersContainer.innerHTML = '';

    membersData.forEach(member => {

        const card = document.createElement('section');

        card.innerHTML = `
            <h2>${member.name}</h2>
            <img src="images/${member.image}" alt="${member.name}">
            <p>${member.address}</p>
            <p>${member.phone}</p>
            <p><a href="${member.website}" target="_blank">Visit Website</a></p>
            <p>Membership Level: ${member.membership}</p>
        `;

        membersContainer.appendChild(card);
    });
};

// ==================
// Initialize App
// ==================

getMembersData();