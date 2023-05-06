let nome = prompt("Digite o nome do usuário: ");
let idade = prompt("Digite a idade do usuário: ");
let cidade = prompt("Digite a cidade do usuário: ");
let celular = prompt("Digite o celular do usuário: ");

const usuario = {
    nome: nome,
    idade: idade,
    cidade: cidade,
    celular: celular,
};

const alterar = confirm("Deseja alterar alguma informação do usuário?");

if (alterar) {
    console.log(usuario);

    const alteracao = prompt('Qual informação deseja alterar: \n nome \n idade \n cidade \n celular \n');

    switch (alteracao) {
        case 'nome':
            usuario.nome = prompt("Digite o novo nome: ");
            break;
        case 'idade':
            usuario.idade = prompt("Digite a nova idade: ");
            break;
        case 'cidade':
            usuario.cidade = prompt("Digite a nova cidade: ");
            break;
        case 'celular':
            usuario.celular = prompt("Digite o novo celular: ");
            break;
        default:
            alert("opção invalida!");
            break;
    }

        console.log(usuario);
}else
{
    console.log(`Usuário Inalterado!`);
}