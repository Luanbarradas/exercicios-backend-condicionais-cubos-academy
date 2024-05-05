//renda mensal do aluno, em centavos.
const rendaMensalEmCentavos = 300000;

// Tempo decorrido de contrato. Se for maior que 60 meses, o aluno não deve mais nada.
const mesesDecorridos = 12;

// Soma das parcelas já pagas pelo aluno nos meses anteriores (em centavos). Se for igual a 18 mil reais, o aluno não deve pagar mais nada, pois já quitou a dívida.
const totalJaPagoPeloAluno = 1000000;
const valorCubos = 1800000;

const parcela = 60;
const parcelasRestantantes = parcela - mesesDecorridos;

const parcelamento = (rendaMensalEmCentavos * 0.18) * 0.01;
const dividaTotal = valorCubos - totalJaPagoPeloAluno;

const reais = dividaTotal * 0.01;
const parcelasReais = ((reais / parcelamento).toFixed(0));

const acimaDaMedia = rendaMensalEmCentavos > dividaTotal

if (parcelasRestantantes === 0){
    console.log("Dívida quitada devido ao tempo")
}else if ((parcelasRestantantes > 0) && (rendaMensalEmCentavos !== 0) && (rendaMensalEmCentavos >=200000) && (acimaDaMedia === false)){
    console.log(`Você deve pagar ${parcelasReais} vezes de ${parcelamento}, sua dívida total ainda é de ${reais} reais`)
}if ((rendaMensalEmCentavos === 0) || (rendaMensalEmCentavos < 200000)){
    console.log("Você não se enquadra no grupo de pagantes")
}else if (acimaDaMedia === true){
    console.log (`Você deve pagar ${reais} reais`)
}