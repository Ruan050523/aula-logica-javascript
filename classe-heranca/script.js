//Superclasse
class Animal {
    constructor(nome) {
        this.nome = nome;
    }

    fazerSom(){
        console.log("O anima fez um som");
    }
}

//Subclasse 
class Cachorro extends Animal{
    //herdando o método da superclasse
    fazerSom(){
        console.log("O cachorro late");
    }
}

let rex = new Cachorro("Rex");
console.log(rex.nome);
rex.fazerSom();