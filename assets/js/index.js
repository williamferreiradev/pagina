const hamburguer = document.querySelector('.hamburguer');
const navMenu = document.querySelector('.list');
const links = document.querySelectorAll('.list a');


hamburguer.addEventListener("click", () => {
    hamburguer.classList.toggle('active');
    navMenu.classList.toggle('active');
});

links.forEach(link => {
    link.addEventListener("click", () => {
        hamburguer.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

var off = document.querySelector(".off");
var header = document.querySelector("header");


window.addEventListener("scroll", function () {
    if (window.scrollY > off.offsetTop) {
        header.classList.add("fixed");
    } else {
        header.classList.remove("fixed");
    }
});

