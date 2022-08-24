const send = document.querySelector(".send-text-area");
const resultContainer = document.querySelector(".result-container");
const show = document.querySelector(".show-text-area");
const image = document.querySelector(".searching-image-box");
const alertBox =  document.querySelector(".alert-box");
const copyButton = document.querySelector(".copy-button");

var arraysCode = [["e", "enter"], ["i ", "imes"],["a", "ai"], ["o", "ober"], ["u", "ufat"]];

function copy() {
    navigator.clipboard.writeText(show.value);
}

function hideElements() {
    if(show.value != "") {
        resultContainer.style.justifyContent = "space-around";
        image.style.display = "none";
        alertBox.style.display = "none";
        show.style.display = "block";
        copyButton.style.display = "block";
    } else {
        resultContainer.style.justifyContent = "center";
        image.style.display = "block";
        alertBox.style.display = "block";
        show.style.display = "none";
        copyButton.style.display = "none";
    }
}

function encryptButton() {
    const text = encrypt(send.value);
    show.value = text;

    hideElements();
   
}

function decryptButton() {
    const text = decrypt(send.value);
    show.value = text;
    
    hideElements();
}

function encrypt(text) {
    text = text.toLowerCase();

    for (let i = 0; i < arraysCode.length; i++) {
        if (text.includes(arraysCode[i][0])) {
            text = text.replaceAll(arraysCode[i][0], arraysCode[i][1]);
        }
    }

    return text;
}

function decrypt(text) {
    text = text.toLowerCase();

    for (let i = 0; i < arraysCode.length; i++) {
        if (text.includes(arraysCode[i][1])) {
            text = text.replaceAll(arraysCode[i][1], arraysCode[i][0]);
        }
    }

    return text;
}