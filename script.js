function appendValue(value) {
    let display = document.getElementById("display");
    if (value === "%" && display.value !== "") {
        display.value = eval(display.value + "/100");
    } else {
        display.value += value;
    }
}

function calculateResult() {
    let display = document.getElementById("display");
    try {
        display.value = eval(display.value);
    } catch {
        display.value = "Error";
    }
}

function clearDisplay() {
    document.getElementById("display").value = "";
}