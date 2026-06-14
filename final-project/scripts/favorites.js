const container = document.getElementById("favorites-container");

function loadFavorites() {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    displayFavorites(favorites);
}

function displayFavorites(favorites) {
    container.innerHTML = "";

    if (favorites.length === 0) {
        container.innerHTML = "<p>No favorites yet ⭐</p>";
        return;
    }

    favorites.forEach(food => {
        const card = document.createElement("div");
        card.classList.add("food-card");

        card.innerHTML = `
            <img src="${food.image}" alt="${food.name}" loading="lazy">
            <h3>${food.name}</h3>
            <p><strong>Category:</strong>${food.category}</p>
            <p><strong>Origin:</strong>${food.origin}</p>
        `;

        container.appendChild(card)
    });
}

loadFavorites();