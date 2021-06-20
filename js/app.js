const searchSec = document.getElementById("search"),
    searchBar = document.querySelector(".bar"),
    removeSearch = document.querySelector("#search i"),
    resSearch = document.querySelector(".resSea");
searchBar.addEventListener("click", function() {
        searchSec.classList.add("searchOkay");
    }),
    resSearch.addEventListener("click", function() {
        searchSec.classList.add("searchOkay");
    }),
    removeSearch.addEventListener("click", function() {
        searchSec.classList.remove("searchOkay");
    });
const menuSecAdd = document.querySelector(".menuSecAdd"),
    body = document.querySelector("body");
let iconCross = document.createElement("i"),
    menuSec = document.createElement("div");
menuSecAdd.addEventListener("click", function() {
        menuSec.setAttribute("class", "menuSec"), iconCross.setAttribute("class", "fas fa-times"), menuSec.prepend(iconCross);
        let e = document.createElement("ul");
        (e.innerHTML =
            '<li class="menuSecActive">Home</li>\n                    <li>Pages</li>\n                    <li>Portfolio</li>\n                    <li>Blog</li>\n                    <li>Elements</li>\n                    <li>Shop</li>'),
        menuSec.appendChild(e),
            body.prepend(menuSec);
    }),
    iconCross.addEventListener("click", function() {
        menuSec.classList.add("menuSecAniEnd"),
            setTimeout(() => {
                (menuSec.innerHTML = ""), menuSec.classList.remove("menuSecAniEnd"), menuSec.setAttribute("class", "");
            }, 200);
    });
const counters = document.querySelectorAll("#count .rec h4 strong");
window.addEventListener("scroll", function() {
    let e = counters[0].getBoundingClientRect().top,
        n = counters[1].getBoundingClientRect().top,
        t = counters[2].getBoundingClientRect().top,
        i = counters[3].getBoundingClientRect().top,
        c = innerHeight / 1.15,
        a = parseInt(counters[0].innerHTML),
        s = parseInt(counters[1].innerHTML),
        r = parseInt(counters[2].innerHTML),
        o = parseInt(counters[3].innerHTML);
    e <= c &&
        setInterval(() => {
            a < 350 ? (a += 3) : (a = 350), (counters[0].innerHTML = a);
        }, 17),
        n <= c &&
        setInterval(() => {
            s < 92 ? (s += 3) : (s = 92), (counters[1].innerHTML = s);
        }, 65),
        t <= c &&
        setInterval(() => {
            r < 146 ? (r += 3) : (r = 146), (counters[2].innerHTML = r);
        }, 41),
        i <= c &&
        setInterval(() => {
            o < 28 ? (o += 1) : (o = 28), (counters[3].innerHTML = o);
        }, 72);
});
const detail = document.getElementById("detail");
let detailHeight = detail.clientHeight,
    bodyHeight = body.clientHeight;
body.style.marginBottom = `${detailHeight}px`;
const infoNav = document.querySelector(".infoNav"),
    header = document.querySelector("header"),
    mainNav_a = document.querySelector(".mainNav a"),
    mainNav = document.querySelector(".mainNav"),
    li1 = document.querySelector(".li1");
window.addEventListener("scroll", function() {
    scrollY >= 100 ?
        (header.classList.add("headerAni"), infoNav.classList.add("infoNavAni"), mainNav.classList.add("mainNavAni"), mainNav_a.classList.add("mainNav_aAni"), li1.classList.add("activeC")) :
        (header.classList.remove("headerAni"), infoNav.classList.remove("infoNavAni"), mainNav.classList.remove("mainNavAni"), mainNav_a.classList.remove("mainNav_aAni"), li1.classList.remove("activeC"));
    menuBarEffect()
});
const menu = document.getElementById("menu");
let menu_height = menu.clientHeight,
    mainNav_height = mainNav.clientHeight,
    maxHeight = menu_height - mainNav_height;
window.addEventListener("resize", function() {
    menu_height + mainNav_height > window.innerHeight ? ((menu.style.maxHeight = `${window.innerHeight - mainNav_height}px`), console.log(window.innerHeight - mainNav_height)) : (menu.style.maxHeight = "498px");
});
const resMenuBarSpan = document.querySelector(".resIc span");
const resMenuBar = document.querySelector(".resBar");
const resMenuBar2 = document.querySelector(".resBar2");

resMenuBarSpan.addEventListener("click", function() {
    menu.classList.toggle("menuToggle");
    resMenuBar.classList.toggle("iconAni");
    menuBarEffect();
});

function menuBarEffect() {
    if (scrollY >= 100) {
        if (resMenuBar.classList.contains("iconAni")) {
            resMenuBar.style.background = "#3f3f3f";
            resMenuBar2.style.background = "#3f3f3f";
        } else {
            resMenuBar.style.background = "transparent";
            resMenuBar2.style.background = "transparent";
        }
    } else if (scrollY < 100) {
        if (resMenuBar.classList.contains("iconAni")) {
            resMenuBar.style.background = "white";
            resMenuBar2.style.background = "white";
        } else {
            resMenuBar.style.background = "transparent";
            resMenuBar2.style.background = "transparent";
        }
    }
}