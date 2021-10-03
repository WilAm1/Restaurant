import "./style.css";
import getHome from "./home";
import getMenu from "./menu";

function loadContent(func) {
    const mainContent = document.querySelector('#content');
    const contentDiv = func()
        // New function that removes all nodes if no params.
        // Accepts a lot of nodes as param. Check mdn
    mainContent.replaceChildren(contentDiv);

}
const home = document.querySelector('.menu-links #home');
const menu = document.querySelector('.menu-links #menu');

home.addEventListener('click', () => { loadContent(getHome) });
menu.addEventListener('click', () => { loadContent(getMenu) });


window.onload = loadContent(getHome);