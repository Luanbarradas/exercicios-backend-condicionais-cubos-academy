const diaDaSemana = 7;
// A semana começa por Domingo.

if(diaDaSemana === 1){
    console.log("Domingo.")
}else if (diaDaSemana === 2){
    console.log("Segunda.")
}if (diaDaSemana === 3){
    console.log("Terça.")
}else if (diaDaSemana === 4){
    console.log("Quarta.")
}if (diaDaSemana === 5){
    console.log("Quinta.")
}else if (diaDaSemana === 6){
    console.log("Sexta.")
}if (diaDaSemana === 7){
    console.log("Sábado.")
} else if (diaDaSemana === 0 || diaDaSemana >= 8) {
    console.log("O dia da semana informado não é válido.")
}