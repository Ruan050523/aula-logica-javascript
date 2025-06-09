//Definindo registro de cliente
const cliente = {
    nome: "João Silva",
    idade: 30,
    email: "joao.silva@gmail.com"
}
 
//acessando os campos do registro
console.log(cliente);
console.log(cliente.nome);
console.log(cliente.idade);
console.log(cliente.email);
 
//Modificando o registro do cliente
cliente.idade = 31;
 
//Adicionando um novo campo
cliente.telefone = "1234-5678";
 
console.log(cliente);
 
 