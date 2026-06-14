const button = document.getElementById("nav-button");
const nav = document.getElementById("nav-menu");

if (button && nav) {
    button.addEventListener("click", () => {
        nav.classList.toggle("open");
    });
}

const lastModified = document.getElementById("lastModified");

if (lastModified) {
    lastModified.textContent = document.lastModified;
}