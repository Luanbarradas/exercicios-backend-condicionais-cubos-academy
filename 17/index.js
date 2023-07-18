const valorDoProduto = 100000;
const quantidadeDoParcelamento = 10;
const valorPago = 300;

const valorDoProdutoReais = valorDoProduto * 0.01;
const parcelasPagas = valorPago / 100;
const parcelasRestantes = quantidadeDoParcelamento - parcelasPagas;
const valorRestante = valorDoProdutoReais - valorPago;
const valorEmParcela = (valorRestante / parcelasRestantes).toFixed(0)

if(valorRestante > 0){
    console.log(`Restam ${parcelasRestantes} parcelas de R$${valorEmParcela}`)
}else{
    console.log("Você já pagou o valor total")
}