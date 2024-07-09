const shift = 25; // Número de veces que se va a mover las letras
const code = "rommel" // Se agrega una de las letras del nombre saltando una letra

function validateText(text) {
    const regex = /^[a-z\s]+$/;
    return regex.test(text);
}

function encryptText() {
    const inputText = document.getElementById('inputText').value;
    if(inputText.trim() == ""){
        document.getElementById('personaImg').style.display = 'inline';
        document.getElementById('nothingText').style.display = 'inline';
        document.getElementById('resultText').innerText = "Ingresa el texto que desees encriptar o desencriptar";
        document.getElementById('copyButton').style.display = 'none'

    
    }
    else{
        if (!validateText(inputText)) {
            alert('El texto solo puede contener letras minúsculas y espacios.');
            return;
        }
    
        let resultText = '';
        for (let i = 0; i < inputText.length; i++) {
            let char = inputText.charCodeAt(i);
            if (char >= 97 && char <= 122) {
                // letras minusculas
                char = ((char - 97 + shift) % 26) + 97;
                resultText += String.fromCharCode(char);
            } else if (char === 32) {
                // espacio
                resultText += ' ';
            }
           
        }
        document.getElementById('personaImg').style.display = 'none';
        document.getElementById('nothingText').style.display = 'none';
        document.getElementById('copyButton').style.display = 'inline';
        document.getElementById('resultText').innerText = resultText;
    }
 

}
function decryptText() {
    const inputText = document.getElementById('inputText').value;
    if(inputText.trim() == ""){
        document.getElementById('personaImg').style.display = 'inline';
        document.getElementById('nothingText').style.display = 'inline';
         document.getElementById('copyButton').style.display = 'none'
        document.getElementById('resultText').innerText = "Ingresa el texto que desees encriptar o desencriptar";
    
    }
    else{
        if (!validateText(inputText)) {
            alert('El texto solo puede contener letras minúsculas y espacios.');
            return;
        }
        let resultText = '';
        let j = 0;
        for (let i = 0; i < inputText.length; i++) {
            let char = inputText.charCodeAt(i);
            if (char >= 97 && char <= 122) {
                // letras minúsculas
                char = ((char - 97 - shift + 26) % 26) + 97;
                resultText += String.fromCharCode(char);
                j++;
            } else if (char === 32) {
                // espacio
                resultText += ' ';
            } 
        }
        document.getElementById('resultText').innerText = resultText;
        document.getElementById('personaImg').style.display = 'none';
        document.getElementById('nothingText').style.display = 'none';
        document.getElementById('copyButton').style.display = 'inline';

    }
   
}
function copyToClipboard() {
    const resultText = document.getElementById('resultText').textContent;
    navigator.clipboard.writeText(resultText).then(() => {
        alert('Copiado!: ' + resultText);
    }).catch(err => {
        console.error('Fallo al copiar: ', err);
    });
}