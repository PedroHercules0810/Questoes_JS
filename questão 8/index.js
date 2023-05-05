let numero = parseInt(prompt("digite um numero inteiro: "));

for (let i = 2; i <= numero; i++) {
    let primo = true;

    for (let j = 2; j < i; j++) {
        if (i%j === 0) {
            primo = false;
            break;
        }
        
    }
    if(primo)
    {
        console.log(i);
    }    
}