let allFoods = [];

const container = document.getElementById("foods-container");

const allBtn = document.getElementById("all");
const seafoodBtn = document.getElementById("seafood");
const soupsBtn = document.getElementById("soups");
const streetBtn = document.getElementById("streetfood");
const dessertBtn = document.getElementById("dessert");

async function getFoods() {
    try {
        const response = await fetch("data/foods.json");

        if (!response.ok) {
            throw new Error("Could not load foods data.")
        }

        allFoods = await response.json();
        console.log(allFoods);
        displayFoods(allFoods);

    } catch (error) {
        console.error(error);
    }
}

function displayFoods(foods) {
    container.innerHTML = "";

    foods.forEach(food => {
        const card = document.createElement("div");
        card.classList.add("food-card");

        card.innerHTML = `
            <img src="${food.image}" alt="${food.name}" loading="lazy">
            <h3>${food.name}</h3>
            <p><strong>Category:</strong> ${food.category}</p>
            <p>${food.description}</p>
            <p><strong>Origin:</strong> ${food.origin}</p>   
            
            <button class="fav-btn">⭐ Favorite</button>
        `;

        container.appendChild(card);

        const favBtn = card.querySelector(".fav-btn");

        favBtn.addEventListener("click", () => {
            saveFavorite(food);
            alert("Added to favorites ⭐");
        });
    });
}

if (allBtn) {
    allBtn.addEventListener("click", () => {
        displayFoods(allFoods)
    });
}

if (seafoodBtn) {
    seafoodBtn.addEventListener("click", () => {
        const filtered = allFoods.filter(food => food.category === "Seafood");
        displayFoods(filtered);
    });
}

if (soupsBtn) {
    soupsBtn.addEventListener("click", () => {
        const filtered = allFoods.filter(food => food.category === "Soups");
        displayFoods(filtered);
    });
}

if (streetBtn) {
    streetBtn.addEventListener("click", () => {
        const filtered = allFoods.filter(food => food.category === "Street Food");
        displayFoods(filtered);
    });
}

if (dessertBtn) {
    dessertBtn.addEventListener("click", () => {
        const filtered = allFoods.filter(food => food.category === "Desserts");
        displayFoods(filtered);
    });
}

function saveFavorite(food) {
    let favorites = JSON.parse(localStorage.getItem("favorites")) || [];

    const exists = favorites.some(f => f.name === food.name);

    if (!exists) {
        favorites.push(food)
        localStorage.setItem("favorites", JSON.stringify(favorites));
    }
}

getFoods();