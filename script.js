const textoInput= document.getElementById("texto-input"); // Puxa o valor colocado na tag textarea
const textoOutput= document.getElementById("texto-output"); // Puxa o valor do textarea já codificado
const botaoCopia= document.getElementById("botao-copia"); // Puxa o valor do botão de copiar

let cripto= "";
                
function codifica(){
    

    cripto= textoInput.value.replace(/e/g, "enter"); //A letra "e" é convertida para "enter"
    cripto= cripto.replace(/i/g, "imes"); //A letra "i" é convertida para "imes"
    cripto= cripto.replace(/a/g, "ai"); //A letra "a" é convertida para "ai"
    cripto= cripto.replace(/o/g, "ober"); //A letra "o" é convertida para "ober"
    cripto= cripto.replace(/u/g, "ufat"); //A letra "u" é convertida para "ufat"
                
    textoOutput.value=cripto;
                    
}

let decripto= "";

function decodifica(){
                    
    decripto= cripto.replace(/enter/g, "e"); //Enter vira e
    decripto= decripto.replace(/imes/g, "i"); //Imes vira i
    decripto= decripto.replace(/ai/g, "a"); //Ai vira a
    decripto= decripto.replace(/ober/g, "o"); //Ober vira o
    decripto= decripto.replace(/ufat/g, "u"); //Ufat vira u

    textoOutput.value=decripto;
                    
}
            
                
function copiar(){
    
    textoCopiado= textoOutput

    textoCopiado.select();

    textoCopiado.setSelectionRange(0,99999);

    navigator.clipboard.writeText(textoCopiado.value);
}

document.addEventListener("DOMContentLoaded",() =>{
    const botaoCodifica= document.getElementById("botao-codifica"); // Puxa o valor do botão para codificar

    botaoCodifica.addEventListener("click", codifica);
});

document.addEventListener("DOMContentLoaded",() =>{
    const botaoDecodifica= document.getElementById("botao-decodifica"); // Nem preciso explicar né?

    botaoDecodifica.addEventListener("click", decodifica);
});

botaoCopia.addEventListener("click", copiar);

