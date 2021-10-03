import "./style.css";
import getHome from "./home";
import getMenu from "./menu";
import getContact from "./contact";


function loadContent(func) {
    const mainContent = document.querySelector('#content');
    const contentDiv = func()
        // New function that removes all nodes if no params.
        // Accepts a lot of nodes as param. Check mdn
    mainContent.replaceChildren(contentDiv);

}
const home = document.querySelector('.menu-links #home');
const menu = document.querySelector('.menu-links #menu');
const contact = document.querySelector('.menu-links #contact');

home.addEventListener('click', () => { loadContent(getHome) });
menu.addEventListener('click', () => { loadContent(getMenu) });
contact.addEventListener('click', () => { loadContent(getContact) });


window.onload = loadContent(getHome);