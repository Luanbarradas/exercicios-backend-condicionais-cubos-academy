const caractere = "C";

const vogal = caractere === "A" || caractere === "E" || caractere === "I" || caractere === "O" || caractere === "U";
const vogalMi = caractere === "a" || caractere === "e" || caractere === "i" || caractere === "o" || caractere === "u";
const numero = caractere >= 0;

if(vogal === true){
    console.log("Vogal maiúscula.");
} else if (vogalMi === true){
    console.log("Vogal minúscula");
}else if(numero === true){
    console.log ("Número");
}else if ((vogal !== true) || (vogalMi !== true) || (numero !== true)){
    console.log("Consoante");
}