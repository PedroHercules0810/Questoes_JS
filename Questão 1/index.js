alert('Digite um numero inteiro qualquer');

let numero = prompt();

if ((numero % 2) == 0) {
    console.log(`${numero} eh par.`);
}else{
    console.log(`${numero} eh impar`);
}