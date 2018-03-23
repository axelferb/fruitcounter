const inputText = document.getElementById("text");
const inputNumber = document.getElementById("number");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", getInputValue);

function getInputValue() {
    var inputTextValue = inputText.value;
    var inputNumberValue = inputNumber.value;
    outputChange(inputNumberValue, inputTextValue);
};

function outputChange(inputNumberValue, inputTextValue) {
    var areOrIs = ""

    if (inputNumberValue == 1) {
        areOrIs = "is";
        outputDiv.innerHTML +=
            `
        <p>
        There ${areOrIs} ${inputNumberValue} ${inputTextValue}
        </p>
        `
    }

    if (inputNumberValue > 1) {
        areOrIs = "are"
        outputDiv.innerHTML +=
            `
        <p>
        There ${areOrIs} ${inputNumberValue} ${inputTextValue}
        </p>
        `
    }

    if (inputNumberValue <= 0) {
        areOrIs = "are"
        outputDiv.innerHTML +=
            `
        <p>
        There ${areOrIs} ${inputNumberValue} ${inputTextValue}
        </p>
        `
    }
}
