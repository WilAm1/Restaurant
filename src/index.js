import "./style.css";
// add this to your seperate module after
// import Icon from "./images/wc-icon.webp";
import getHome from "./home"

console.log(document.body)
const mainContent = document.querySelector('#content');
mainContent.appendChild(getHome());