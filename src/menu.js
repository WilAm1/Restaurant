import makeElement from "./myFunc";

const getMenu = function() {
    const menuDiv = makeElement('div', 'menu-div');
    const heading = makeElement('div', 'menu-heading');

    const h2 = document.createElement('h2');
    h2.textContent = "Our Offers:";

    const menuStack = makeElement('div', 'menu-stack');
    const menuList = ['WcBurger', 'WcFries', 'WcChicken', 'WcFloat', 'WcCoffee', 'WcSuper WcFood']

    for (let i = 0; i < menuList.length; i++) {
        const foodCard = makeElement('div', 'food-card', `food-${i+1}`);
        const imgDiv = makeElement('div', 'sample-img');
        imgDiv.textContent = 'sample-pic';
        const title = document.createElement('p');
        title.textContent = menuList[i];
        foodCard.replaceChildren(imgDiv, title);
        menuStack.appendChild(foodCard);
    }

    menuDiv.replaceChildren(heading, menuStack);
    return menuDiv
}

export default getMenu
/*
        <div class="menu-heading">
            <h2>Our offers:</h2>
        </div>
        <div class="menu-stack">
            <div class="food-card">
                <div class="sample-img">sample-pic</div>
                <div class="food-title">WcBurger</div>
            </div>
            <div class="food-card">
                <div class="sample-img">sample-pic</div>
                <div class="food-title">WcFries</div>

            </div>
            <div class="food-card">
                <div class="sample-img">sample-pic</div>
                <div class="food-title">WcChicken</div>
            </div>
            <div class="food-card">
                <div class="sample-img">sample-pic</div>
                <div class="food-title">WcFloat</div>
            </div>
            <div class="food-card">
                <div class="sample-img">sample-pic</div>
                <div class="food-title">WcCoffee</div>WcCoffee</div>
            <div class="food-card">
                <div class="sample-img">sample-pic</div>
                <div class="food-title">WcSuper WcDeluxe WcFood</div>
            </div>
        </div>

*/