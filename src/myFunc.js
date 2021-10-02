const makeElement = function(element, className = "", idName = "") {
    const e = document.createElement(element);
    if (!!className) e.classList.add(className);
    if (!!idName) e.setAttribute('id', idName);
    return e
}

export default makeElement