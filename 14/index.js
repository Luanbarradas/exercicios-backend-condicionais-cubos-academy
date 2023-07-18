//quantidade de água ingerida em litro.
const quantidadeDeAguaIngerida = 1;

const alto = quantidadeDeAguaIngerida < 1.5;
const moderado = (quantidadeDeAguaIngerida <= 3) && (quantidadeDeAguaIngerida >= 1.5);
const baixo = (quantidadeDeAguaIngerida > 3);


if (alto === true){
console.log("Você está ingerindo pouquissima água, beba mais água!")
} else if (moderado === true){
    console.log("Você está ingerindo pouca água, beba mais!")
}if (baixo === true){
    console.log("Você está ingerindo uma boa quantidade de água, parabéns!")
}