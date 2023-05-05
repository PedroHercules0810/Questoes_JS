let frase = prompt("Digite uma frase: ");

let qntd_a = 0;

for (let i = 0; i < frase.length; i++) {
    if (frase[i] === 'a') {
        qntd_a ++;
    }
}

console.log(`A frase digitada foi: ${frase} \n\n`);

console.log(`Quantidade de a digitados na frase: ${qntd_a}`);