const idade = 18;
const possuiPatologia = false;
const altura = 180;
const ehEstudante = false;

if ((idade < 12) || (idade > 65) || (possuiPatologia == true) || (altura < 150)){
    console.log("ACESSO NEGADO")
} else if ((idade <= 18) || (ehEstudante === true)){
    console.log("O valor do seu ingresso é de 10 reais")
} else if ((idade >= 19) || (ehEstudante === false)){
    console.log("O valor do seu ingresso é de 20 reais")
}