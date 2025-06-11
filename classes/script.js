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
const pessoa2 = new Pessoa("joão", 28);
console.log(pessoa1.saudar())
console.log(pessoa2.saudar())


//Nova classe
class Carro {

     //atributos
     constructor(marca, modelo){
        this.marca = marca;
        this.modelo = modelo;


     }

     //método
     exibirInfo(){
        return `Carro: ${this.marca} ${this.modelo}`;
     }
}

//Instãcia
const meuCarro = new Carro("Fusca", "1974");
console.log(meuCarro.exibirInfo());
 