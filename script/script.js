const textoInput= document.getElementById("texto-input"); // Puxa o valor colocado na tag textarea
const textoOutput= document.getElementById("texto-output"); // Puxa o valor do textarea já codificado
const botaoDecodifica= document.getElementById("botao-decodifica"); // Nem preciso explicar né?
const botaoCodifica= document.getElementById("botao-codifica"); // Puxa o valor do botão para codificar
const botaoCopia= document.getElementById("botao-copia"); // Puxa o valor do botão de copiar
const botaoLimpa= document.getElementById("botao-limpa"); // Puxao o valor do botão de limpar

let cripto= "";
                
function codifica(){
    
    cripto= textoInput.value;
    cripto= cripto.toLowerCase();

    cripto= cripto.replace(/e/g, "enter"); //A letra "e" é convertida para "enter"
    cripto= cripto.replace(/i/g, "imes"); //A letra "i" é convertida para "imes"
    cripto= cripto.replace(/a/g, "ai"); //A letra "a" é convertida para "ai"
    cripto= cripto.replace(/o/g, "ober"); //A letra "o" é convertida para "ober"
    cripto= cripto.replace(/u/g, "ufat"); //A letra "u" é convertida para "ufat"
                    
    textoOutput.value=cripto;


}


function decodifica(){
     
    let decripto= "" ;

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

botaoCodifica.addEventListener("click", codifica); 
botaoDecodifica.addEventListener("click", decodifica);
botaoCopia.addEventListener("click", copiar);
botaoLimpa.addEventListener("click", limpar);
