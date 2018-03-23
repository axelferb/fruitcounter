const inputText = document.getElementById("text");
const inputNumber = document.getElementById("number");
const submitButton = document.getElementById("submitButton");

submitButton.addEventListener("click", getInputValue);

function getInputValue() {
    var inputTextValue = inputText.value;
    var inputNumberValue = inputNumber.value;
    console.log(inputTextValue);
    console.log(inputNumberValue);
    outputChange(inputNumberValue, inputTextValue);
};

function outputChange(inputNumberValue, inputTextValue) {
    var areIs = ""

    if (inputNumberValue == 1) {
        areIs = "is";
        outputDiv.innerHTML +=
            `
        <p>
        There ${areIs + " " + inputNumberValue + " " + inputTextValue}
        </p>
        `
    }

    if (inputNumberValue > 1) {
        areIs = "are"
        outputDiv.innerHTML +=
            `
        <p>
        There ${areIs + " " + inputNumberValue + " " + inputTextValue + "s"}
        </p>
        `
    }

    if (inputNumberValue <= 0) {
        areIs = "are"
        outputDiv.innerHTML +=
            `
        <p>
        There ${areIs + " " + "no" + " " + inputTextValue + "s"}
        </p>
        `
    }

}
