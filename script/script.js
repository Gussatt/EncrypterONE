const inputText= document.getElementById("input-area");
const outputText= document.getElementById("output-area");
const resultOn = document.querySelector(".result-on");
const resultOff = document.querySelector(".result-off");
const encryptBtn= document.getElementById("encrypt"); 
const decryptBtn= document.getElementById("decrypt");
const copyBtn= document.getElementById("copy");
const botaoLimpa= document.getElementById("botao-limpa"); 

let cripto= "";
                
function encryption(){
    
    cripto= inputText.value;
    cripto= cripto.toLowerCase();

    cripto= cripto.replace(/e/g, "enter"); //A letra "e" é convertida para "enter"
    cripto= cripto.replace(/i/g, "imes"); //A letra "i" é convertida para "imes"
    cripto= cripto.replace(/a/g, "ai"); //A letra "a" é convertida para "ai"
    cripto= cripto.replace(/o/g, "ober"); //A letra "o" é convertida para "ober"
    cripto= cripto.replace(/u/g, "ufat"); //A letra "u" é convertida para "ufat"
                    
    outputText.value=cripto;

}

function decryption(){
     
    let decripto= "" ;

    decripto= cripto.replace(/enter/g, "e"); //Enter vira e
    decripto= decripto.replace(/imes/g, "i"); //Imes vira i
    decripto= decripto.replace(/ai/g, "a"); //Ai vira a
    decripto= decripto.replace(/ober/g, "o"); //Ober vira o
    decripto= decripto.replace(/ufat/g, "u"); //Ufat vira u

    outputText.value=decripto;
                    
}
            
function toggleResult() {
    resultOff.classList.toggle("hidden");
    resultOn.classList.toggle("hidden");
}
                
function copiar(){
    
    copiedText= outputText;

    copiedText.select();

    copiedText.setSelectionRange(0,99999);

    navigator.clipboard.writeText(copiedText.value);
}

function limpar(){

    textoOutput.value= "";
    textoInput.value= "";

}

function checaLetras(inputTxt){

    const regexLetras= /^[a-z]+$/;

    if(inputTxt.value.match(regexLetras)){
        return true
    }

    else{
        
    }
}

//Adição de funcionalidades aos botões 

encryptBtn.addEventListener("click", encryption); 
decryptBtn.addEventListener("click", decryption);
copyBtn.addEventListener("click", copiar);
