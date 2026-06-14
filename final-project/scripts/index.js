let allFoods = [];

const container = document.getElementById("featured-foods-container");

async function getFoods() {
    try {
        const response = await fetch("data/foods.json");

        if (!response.ok) {
            throw new Error("Could not load foods data.");
        }

        allFoods = await response.json();

        displayFeatured(allFoods);

    } catch (error) {
        console.error(error);
    }
}

function displayFeatured(foods) {
    container.innerHTML = "";

    const featured = foods.slice(0, 4);

    featured.forEach(food => {

        const card = document.createElement("div");
        card.classList.add("food-card");

        card.innerHTML = `
        <img src="${food.image}" alt="${food.name}" loading="lazy">
        <h3>${food.name}</h3>
        <p><strong>Category:</strong> ${food.category}</p>
        <p><strong>Origin:</strong> ${food.origin}</p>
    `;
        container.appendChild(card);
    });
}

getFoods();