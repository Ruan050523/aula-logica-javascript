//Superclasse
class Ave{

    //método
    voar(){
        console.log("A ave voa");
    }
}

//Subclasse
class Pinguim extends Ave {
    //polimorfismo
    voar(){
        console.log("Pinguins não podem voar");
    }
}

//Intânciando
let ave = new Ave();
let pinguim = new Pinguim();
ave.voar();
pinguim.voar();