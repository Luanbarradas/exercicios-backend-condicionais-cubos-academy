const ladoA = 1;
const ladoB = 2;
let buchaDe = (ladoA + ladoB)/2

if (buchaDe === 0){
    console.log("branco")
}else if (buchaDe === 1){
    console.log("ás")
} if (buchaDe === 2){
    console.log("duque")
}else if(buchaDe === 3){
    console.log("terno")
}if (buchaDe === 4){
console.log("quadra")
}else if (buchaDe === 5){
    console.log("quinta")
}if(buchaDe === 6){
    console.log("sena")
}else if(ladoA !== ladoB){
    console.log("Não é uma bucha")
} if (buchaDe < 0 || buchaDe >= 7){
    console.log("Não existe")
}