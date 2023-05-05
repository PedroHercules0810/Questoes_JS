const nome = prompt("Digite seu nome: ");
const idade = prompt("Digite sua idade: ");
const cidade = prompt("Digite a cidade onde você mora: ");

let pessoa = {
    nome: '',
    idade: '',
    cidade: '',
}

pessoa.nome = nome;
pessoa.idade = idade;
pessoa.cidade = cidade;

console.log(pessoa);