let lista = prompt("Digite uma série de numeros separados por virgula: ");

let vetor = lista.split(',').map(numero => parseInt(numero.trim()));


function segundoMaior(numeros){
let segundoMaior = null;
let primeiroMaior = numeros[0];

vetor.forEach(numero => {
    if (numero > primeiroMaior) {
        segundoMaior = primeiroMaior;
        primeiroMaior = numero;
    } else if (numero > segundoMaior && numero < primeiroMaior) {
        segundoMaior = numero;
    }
});
    return segundoMaior
}

console.log(segundoMaior(vetor));
