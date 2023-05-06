let nomes = prompt('Digite nomes separados por virgula: ');

let lista = nomes.split(',');

function ordenador(listaNomes){
    listaNomes.sort(function(a,b){
        return a.localeCompare(b);
    });

    return listaNomes;
}

console.log(ordenador(lista));