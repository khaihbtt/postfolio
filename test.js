const menu = document.querySelector(".navbar__links");
const menuButton = document.querySelector(".navbar__icons"); // Chọn trực tiếp từ document

if (menuButton) {
    menuButton.addEventListener('click', () => {
        menu.classList.toggle("navbar__open");
        menuButton.classList.toggle("open");
    });
} else {
    console.error("Element .navbar__icons not found");
}