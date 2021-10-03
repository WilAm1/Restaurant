import makeElement from "./myFunc";
import Map from "./images/map.png"
const makeParagraph = (text) => {
    const e = document.createElement('p');
    e.textContent = text;

    return e
}

const getContact = function() {
    const mainDiv = makeElement('div', 'main-contact-div');
    const contactBox = makeElement('div', 'contact-box');

    const scheld = makeElement('div', 'scheld');
    const hours = makeParagraph('8 to 5 PM');
    const days = makeParagraph('Monday to Saturday');
    const reserve = makeParagraph('Open for Reservations');

    scheld.replaceChildren(hours, days, reserve);

    const locationDiv = makeElement('div', 'location');
    const locIntro = makeParagraph('Our location is:');
    const location = makeParagraph("I don't know and I don\'t care. Please stop bothering us or else...");

    locationDiv.replaceChildren(locIntro, location);

    const communicateDiv = makeElement('div', 'communicate');
    const commIntro = makeParagraph('Contact Us:');
    const ul = makeElement('ul', 'contact-ul');

    const num = '0912345689';
    const tel = 'tel: 09123456661';
    const email = 'reservations.ouremail@orsmthing.com';

    const ulContent = [num, tel, email].map((text) => {
        const li = makeElement('li', 'comms');
        const p = makeParagraph(text);
        li.appendChild(p)
        return li
    });

    ul.replaceChildren(...ulContent);

    communicateDiv.replaceChildren(commIntro, ul);

    contactBox.replaceChildren(scheld, locationDiv, communicateDiv);

    const areaDiv = makeElement('div', 'map-container');
    const map = makeElement('img', '', 'map');
    map.src = Map;
    areaDiv.appendChild(map)

    mainDiv.replaceChildren(contactBox, areaDiv)

    return mainDiv

};

export default getContact