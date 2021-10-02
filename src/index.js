import "./style.css";
import getHome from "./home";
import getMenu from "./menu";

function loadContent(func) {
    // e.prevetDefault();
    const mainContent = document.querySelector('#content');
    const contentDiv = func()
        // New function that removes all nodes if no params.
        // Accepts a lot of nodes as param. Check mdn
    mainContent.replaceChildren(contentDiv);

}
const home = document.querySelector('#home');
const menu = document.querySelector('#menu');

home.addEventListener('click', (e) => {
    e.preventDefault();
    loadContent(getHome);
})
menu.addEventListener('click', (e) => {
    e.preventDefault();
    loadContent(getMenu);
});


window.onload = loadContent(getHome);