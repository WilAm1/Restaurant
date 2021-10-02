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

    //     <div class="default">

    //     <div class="top-content">
    //         <div class="main-text">
    //             <h1>Lorem Ipsum</h1>
    //             <p>You will surely recognize the taste and athomosphere!</p>
    //         </div>
    //         <div class="icon">
    //             <img src="./wc-icon.webp" alt="" width="300px">

    //         </div>

    //     </div>
    //     <div class="bottom-content">
    //         <p>The number 1 fast food Restaurant in the askd lorem ipsum.</p>
    //         <button>Order Now</button>
    //     </div>

    // </div>

    return mainDiv
};

export default getHome