const inputCVV = document.getElementById("cardCVV");
inputCVV.addEventListener('keyup', fixLengthCVV);

function fixLengthCVV() {
    const inputValue = inputCVV.value;
    if (inputValue.length > 3) {
        inputCVV.value = inputValue.slice(0,3);
    }
}

const inputCardNum = document.getElementById("cardNumber");
inputCardNum,addEventListener('keyup', FixLengthCardNum);

function FixLengthCardNum() {
    const inputValue = inputCardNum.value;
    if (inputValue.length > 16) {
        inputCardNum.value = inputValue.slice(0,16);
    }
}