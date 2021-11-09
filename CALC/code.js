let container = document.getElementsByClassName("container")[0];

let firstScreen = container.querySelectorAll("input")[0];

let secondScreen = container.querySelectorAll("input")[1];

let buttons = container.querySelectorAll(".item");

let memory = null;
secondScreen.value = ""
let operation = null;

buttons.forEach((item) => {
    item.addEventListener("click", (e) => {
        action(e.target.innerText);
    })
})

function action(data) {

    switch (data) {

        case "C":
            clear()

        case "DEL":
            slice();
            break;

        case "+":
            writeMemory(data);
            break;

        case "-":
            writeMemory(data);
            break;

        case "/":
            writeMemory(data)
            break;

        case "*":
            writeMemory(data)
            break;

        case "=":
            equal();
            break;

        case ".":
            point()
            break;

        case "%":
            writeMemory(data)
            break;

        default:
            writeNuber(data)
            break;
    }

}


function writeNuber(data) {
        secondScreen.value += data;
    
}


function slice() {

    if (secondScreen.value.length === 1 || (secondScreen.value.length === 2 && secondScreen.value[0] === "-")) {
        secondScreen.value = "";
    } else {
        secondScreen.value = secondScreen.value.slice(0, -1);
    }
}

function getResult(x, y, op) {

    switch (op) {
        case "+":
            return (x*1000000 + y*1000000)/1000000;
        case "-":
            return (x*1000000 - y*1000000)/1000000;
        case "*":
            return ((x*1000000) * (y*1000000))/(1000000*1000000);
        case "/":
            return (x*1000000 / (y*1000000));
        case "%":
            return (x*1000000/100 * (y*1000000))/(1000000*1000000);
        default:
            break;
    }





}

function writeMemory(data) {

    if (operation) {
        memory = getResult(+memory, +secondScreen.value, operation);
        firstScreen.value = memory + data;
        secondScreen.value = "";

    } else {
        memory = secondScreen.value;
        secondScreen.value = "";
        firstScreen.value = memory + data;
    }
operation = data;
}


function clear() {
    secondScreen.value = "";
    memory = null;
    operation = null;
    firstScreen.value = "";
}

function equal() {
    if (operation) {
        let localMemory = getResult(+memory, +secondScreen.value, operation);
        clear();
        secondScreen.value = localMemory;
    }

}


function point() {
    if (secondScreen.value.indexOf(".") === -1) {
        secondScreen.value += ".";
    }
}









