let numero = parseInt(prompt("digite um numero inteiro: "));

for (let i = 1; i <= numero; i++) {
    if (i % 3 == 0 && i % 5 == 0) {
        console.log('ZZZXXXXX');
    } else if (i % 3 == 0) {
        console.log('ZZZ');
    } else if (i % 5 == 0) {
        console.log('XXXXX');
    }else{
        console.log(i);
    }
}