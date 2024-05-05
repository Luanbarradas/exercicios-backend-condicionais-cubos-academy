const aposentada = false;
const portadoraDeDoenca = false;
const totalDeRendimentos = 3000000; //emCentavos
const valorEmReal = totalDeRendimentos * 0.01
const isenta = ((portadoraDeDoenca == true) || (aposentada == true))

if (isenta == true){
    console.log("ISENTA")
}else if(valorEmReal < 28559.70){
    console.log("VAZA LEÃO! JA TA DIFICIL SEM VOCE")
}if (valorEmReal > 28559.70 && isenta == false){
    console.log("PEGA LEÃO")
}