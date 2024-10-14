const showMenue = document.querySelector(".show-menue");
const menuClose = document.querySelector(".icon-menu-close");

showMenue.addEventListener("click", () => {
    document.querySelector(".mobile-sidebar").style.display = "flex";
    showMenue.style.display = "none"
});

menuClose.addEventListener("click", () => {
    document.querySelector(".mobile-sidebar").style.display = "none";
    showMenue.style.display = "flex"
});