let texto = prompt('Digite um texto: ');

texto.replace(".,", ' ')

function contadorTexto(texto) {
    
    const palavras = texto.split(' ');

    const qntddPalavras = {};

    for (let i = 0; i < palavras.length; i++) {
        qntddPalavras[palavras[i]] = qntddPalavras[palavras[i]] ? qntddPalavras[palavras[i]] + 1 : 1;
    }

    return qntddPalavras;
}

console.log(`Texto digitado: \n ${texto} \n`);

console.log(contadorTexto(texto));