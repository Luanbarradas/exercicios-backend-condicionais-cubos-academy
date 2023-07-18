const primeiroNome = "luan";
const sobrenome = "barradas";
const apelido = "luck";

const vazioObrigatorio = (primeiroNome === "");
const vazioApelido = (apelido === "");
const vazioSobrenome = (sobrenome === "");

if (vazioApelido !== true && ((vazioObrigatorio !== true && vazioSobrenome !== true) || (vazioObrigatorio !==true && vazioSobrenome === true))){
    console.log(`Bem vindo(a) ${apelido}`)
} else if (vazioObrigatorio !== true && vazioSobrenome !== true && vazioApelido === true){
    console.log(`Bem vindo(a) ${primeiroNome} ${sobrenome}`)
}if (vazioObrigatorio !== true && vazioSobrenome === true && vazioApelido === true ){
    console.log(`Bem vindo(a) ${primeiroNome}`)
} else if(vazioObrigatorio === true && vazioSobrenome !== true && vazioApelido === true){
    console.log("Você precisa preencher seu primeiro nome para ter um sobrenome")
} if (vazioApelido === true && vazioObrigatorio === true && vazioSobrenome === true){
    console.log("Você precisa preencher o seu primeiro nome")
} else if (vazioApelido !== true && vazioObrigatorio === true){
    console.log("Você precisa ter um nome para ter um apelido")
}