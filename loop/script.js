//For
for(i = 0 ; i <= 5; i++){
    console.log(i);
 }
 
let x = 5;
for(x; x > 2; x--){
    console.log(x);
}
 
//While (enqunato)
let z = 1;
while(z<=10){
    console.log(z);
    z = z + 1;
}
 
let y = 10
    while (y >= 5){
        console.log(y);
        y--;
    }
 
//Do... while (faça enquanto)
let m = 15;
 
    do{
        console.log(`${m}`);
        m = m + 2
    }while(m <= 21);
 
    //foreach
    const frutas = ["maçã", "banana", "laranja"];
 
    function mostrarFruta(fruta, indice){
        console.log(`Ìndice ${indice}: ${fruta}`);
    }
 
    frutas.forEach(mostrarFruta);
    
    //título
    console.log("iterando com forEach")

    //arrow function
    frutas.forEach((fruta, indice) =>{
        console.log(`Ìndice ${indice}: ${fruta}`);
    });
    
    //loop infinito
    //let a = 0;
    //while (a < 5){
    //     //Falta o incrimento de a, o que o loop infinito
    //}

   