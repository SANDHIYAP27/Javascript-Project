const menuBtn = document.getElementById("menuBtn");
const navbar = document.getElementById("navbar");

menuBtn.addEventListener("click", () => {
    const open = navbar.classList.toggle("open");

    menuBtn.textContent = open ? "✕" : "☰";
    menuBtn.setAttribute("aria-expanded", String(open));
});

document.getElementById("year").textContent =
    new Date().getFullYear();