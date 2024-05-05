//tipo de pagamento (dinheiro, credito, debito, cheque).
const tipoDePagamento = "debito";

//valor da mercadoria (centavos)
const valorDoProduto = 13000;
const valorEmReal = valorDoProduto * 0.01;

const fromasDePagamento = tipoDePagamento === "credito" || tipoDePagamento === "cheque" || tipoDePagamento === "dinheiro" || tipoDePagamento === "debito";

const credito = 0.05; const cheque = 0.03; const dinheiroOuDebito = 0.10;


if ((tipoDePagamento === "credito")){
console.log(`Valor a ser pago é de R$${(valorEmReal - (valorEmReal * credito))}`)
} else if ((tipoDePagamento === "cheque")){
    console.log(`Valor a ser pago é de R$${(valorEmReal - (valorEmReal * cheque))}`)
}if (tipoDePagamento === "dinheiro" || tipoDePagamento === "debito"){
    console.log(`Valor a ser pago é de R$${(valorEmReal - (valorEmReal * dinheiroOuDebito))}`)
}