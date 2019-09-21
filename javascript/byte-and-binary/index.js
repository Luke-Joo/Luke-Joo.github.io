var circleDivs = document.querySelectorAll(".circle");
var decimalValueSpan = document.querySelector(".decimal-value");
var binaryValueSpan = document.querySelector(".binary-value");

console.log(circleDivs);

circleDivs[0].addEventListener("click", handleCircleClicked);
circleDivs[0].style.backgroundColor = "red";

circleDivs[1].addEventListener("click", handleCircleClicked);
circleDivs[1].style.backgroundColor = "red";

circleDivs[2].addEventListener("click", handleCircleClicked);
circleDivs[2].style.backgroundColor = "red";

circleDivs[3].addEventListener("click", handleCircleClicked);
circleDivs[3].style.backgroundColor = "red";

circleDivs[4].addEventListener("click", handleCircleClicked);
circleDivs[4].style.backgroundColor = "red";

circleDivs[5].addEventListener("click", handleCircleClicked);
circleDivs[5].style.backgroundColor = "red";

circleDivs[6].addEventListener("click", handleCircleClicked);
circleDivs[6].style.backgroundColor = "red";

circleDivs[7].addEventListener("click", handleCircleClicked);
circleDivs[7].style.backgroundColor = "red";

var decimalValue = 0;

function handleCircleClicked() {
    // console.log(event.target.id);
    console.log(event.target.style.backgroundColor);
    var circleClicked = event.target;
    if (circleClicked.style.backgroundColor == "red") {
        circleClicked.style.backgroundColor = "green";

        decimalValue += parseInt(circleClicked.id);
        decimalValueSpan.innerHTML = decimalValue;

        var binaryValue = convertDecimalToBinary(decimalValue);
        binaryValueSpan.innerHTML = binaryValue;

        console.log(decimalValue);
    } else {
        circleClicked.style.backgroundColor = "red";

        decimalValue -= parseInt(circleClicked.id);
        decimalValueSpan.innerHTML = decimalValue;
    }
}

function convertDecimalToBinary(decimalValue) {
    var binaryValue = 0;
    if (decimalValue >= 128) {
        binaryValue += 10000000;
        decimalValue -= 128;
    }

    if (decimalValue >= 64) {
        binaryValue += 1000000;
        decimalValue -= 64;
    }

    if (decimalValue >= 32) {
        binaryValue += 100000;
        decimalValue -= 32;
    }

    if (decimalValue >= 16) {
        binaryValue += 10000;
        decimalValue -= 16;
    }

    if (decimalValue >= 8) {
        binaryValue += 1000;
        decimalValue -= 8;
    }

    if (decimalValue >= 4) {
        binaryValue += 100;
        decimalValue -= 4;
    }

    if (decimalValue >= 2) {
        binaryValue += 10;
        decimalValue -= 2;
    }

    if (decimalValue >= 1) {
        binaryValue += 1;
        decimalValue -= 1;
    }

    return binaryValue;
}