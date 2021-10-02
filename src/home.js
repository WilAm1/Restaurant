import makeElement from "./myFunc.js"

const getHome = function() {
    const mainDiv = makeElement('div', 'default')
    mainDiv.innerHTML = "hello"
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