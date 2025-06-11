//declarando a classe 
class Pessoa {
    constructor(nome, idade){
    this.nome = nome;
    this.idade = idade;


}

//declarando um método
saudar(){
    return `Olá, meu nome é ${this.nome} e tenho ${this.idade} anos. `;
}

}


//Instânciando
const pessoa1 = new Pessoa("Ana", 35);
console.log(pessoa1.saudar());