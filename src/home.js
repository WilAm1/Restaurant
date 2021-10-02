import makeElement from "./myFunc.js"
import Icon from "./images/wc-icon.webp"

const getHome = function() {
    const mainDiv = makeElement('div', 'default')

    const topContent = makeElement('div', 'top-content');

    const mainText = makeElement('div', 'main-text');
    const h1 = document.createElement('h1');
    h1.textContent = "The Best WcJoint in the WcWorld";
    mainText.appendChild(h1);

    const mainP = document.createElement('p');
    mainP.textContent = "You will surely recognize the familiar taste and sound!";
    mainText.appendChild(mainP);

    const iconContainer = makeElement('div', 'icon');
    const icon = document.createElement('img');
    icon.src = Icon;
    iconContainer.appendChild(icon);

    topContent.appendChild(mainText);
    topContent.appendChild(iconContainer);
    mainDiv.appendChild(topContent);


    // Bottom container
    const bottom = makeElement('div', 'bottom-content');

    const bottomPara = document.createElement('p');
    bottomPara.textContent = "The number 1 fast food Restaurant in the askd lorem ipsum.";

    const bottomBtn = makeElement('button', 'order-btn');
    bottomBtn.textContent = "Order Now";

    bottom.appendChild(bottomPara);
    bottom.appendChild(bottomBtn);
    mainDiv.appendChild(bottom);

    return mainDiv
};

export default getHome