//Form Number Limits
const inputCVV = document.getElementById("cardCVV");
inputCVV.addEventListener('keyup', fixLengthCVV);

function fixLengthCVV() {
    const inputValue = inputCVV.value;
    if (inputValue.length > 3) {
        inputCVV.value = inputValue.slice(0, 3);
    }
}

const inputCardNum = document.getElementById("cardNumber");
inputCardNum, addEventListener('keyup', FixLengthCardNum);

function FixLengthCardNum() {
    const inputValue = inputCardNum.value;
    if (inputValue.length > 16) {
        inputCardNum.value = inputValue.slice(0, 16);
    }
}

//Registration Psw Reqs
var myInput = document.getElementById("inputPassReg");
var letter = document.getElementById("letter");
var capital = document.getElementById("capital");
var number = document.getElementById("number");
var length = document.getElementById("length");

//when user clicks on input
myInput.onfocus = function () {
    document.getElementById("message").style.display = "block";
}

myInput.onblur = function () {
    document.getElementById("message").style.display = "none";
}

//user types something
myInput.onkeyup = function () {
    //Validate lowercase
    var lowerCaseLetters = /[a-z]/g;
    if (myInput.value.match(lowerCaseLetters)) {
        letter.classList.remove("invalid");
        letter.classList.add("valid");
    } else {
        letter.classList.remove("valid");
        letter.classList.add("invalid");
    }

    //Validate uppercase
    var upperCaseLetters = /[A-Z]/g;
    if (myInput.value.match(upperCaseLetters)) {
        capital.classList.remove("invalid");
        capital.classList.add("valid");
    } else {
        capital.classList.remove("valid");
        capital.classList.add("invalid");
    }

    //Validate numbers
    var numbers = /[0-9]/g;
    if (myInput.value.match(numbers)) {
        number.classList.remove("invalid");
        number.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }


    //Validate letters
    if (myInput.value.length >= 8) {
        length.classList.remove("invalid");
        length.classList.add("valid");
    } else {
        length.classList.remove("valid");
        length.classList.add("invalid");
    }
}

