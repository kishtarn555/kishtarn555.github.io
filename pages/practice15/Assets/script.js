function byId(id) {
    console.log(document.getElementById(id));
}
function byChild() {
    let current = 
        document
        .getElementById("parent")
        .children[0];
    console.log(current);
}

function byName(name) {
    let allElements = document.getElementsByName(name);
    for(let element of allElements){
        console.log(element);
    }
    console.log (`Hay ${allElements.length} elementos con nombre '${name}'`);
}

(function load () {
    console.log("Hola");
    let pElements = document.getElementsByTagName("p");
    for (let element of pElements) {
        console.log(element.innerText);
    }
})();