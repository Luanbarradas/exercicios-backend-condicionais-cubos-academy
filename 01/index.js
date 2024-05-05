const jogada1 = "pedra"
const jogada2 = "tesoura"
const rodada = jogada1 + jogada2

if (rodada === jogada1 + jogada2 ){
    console.log("Pedra ganhou")
} else if (rodada === jogada1 + jogada1 && jogada2 + jogada2){
    console.log("Empate")
}