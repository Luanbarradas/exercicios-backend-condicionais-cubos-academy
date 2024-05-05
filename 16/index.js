//Só é considerado de maior se a idade for maior ou igual a 18.
const idadeDoAluno = 16;

//valor verdadeiro ou falso que informa se possui responsável
const possuiResponsavel = false;

const maiorDeIdade = idadeDoAluno >=18;

if(maiorDeIdade === true || possuiResponsavel === true){
    console.log("Rematrícula realizada com sucesso")
}else if(maiorDeIdade === false && possuiResponsavel === false){
    console.log("Não é possível fazer a rematrícula")
}