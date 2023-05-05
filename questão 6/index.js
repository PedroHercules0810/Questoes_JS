let numero = parseInt(prompt("Digite um número para calcular seu fatorial: "));

let fatorial = 1;

for (let i = numero; i > 0 ; i--) {
    fatorial = fatorial * i;
}

console.log(fatorial);