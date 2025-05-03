const btnMenuhamburguer = document.getElementById("menuHamburguer");
const navMenu = document.querySelector(".nav-list");
const linksMenu = document.querySelectorAll(".list-item a");
console.log(navMenu);
btnMenuhamburguer.addEventListener("click", () => {
  btnMenuhamburguer.classList.toggle("active-menu");
  navMenu.classList.toggle("open");
});

linksMenu.forEach((link) => {
  link.addEventListener("click", () => {
    navMenu.classList.remove("open");
    btnMenuhamburguer.classList.remove("active-menu");
  });
});
