const params = new URLSearchParams(window.location.search);

document.querySelector("#fullname").textContent =
    params.get("fullname") || "Not provided";

document.querySelector("#email").textContent =
    params.get("email") || "Not provided";

document.querySelector("#favoritefood").textContent =
    params.get("favoritefood") || "Not provided";

document.querySelector("#restaurant").textContent =
    params.get("restaurant") || "Not provided";

document.querySelector("#message").textContent =
    params.get("message") || "Not provided";