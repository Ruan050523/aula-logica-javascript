//Classificação de temperatura
let temperatura = 28;

if(temperatura <15){
    console.log("Frio");
} else if (temperatura >= 15 && temperatura <= 25){
    console.log("Agradável");
} else if (temperatura >= 26 && temperatura <= 35){
    console.log("Quente");
} else{
    console.log("Muito Quente")
}

//Verificação de Maioridade
let idade = 17; // você pode mudar esse valor
 
switch (true) {
  case (idade >= 18):
    console.log("Maior de idade");
    break;
  default:
    console.log("Menor de idade");
}

//Cálculo de Salário com Aumento
let Salario = 4000;

let novoSalario;
if (Salario <= 2000){
    novoSalario = Salario * 1.10;
} else if (Salario <= 5000) {
    novoSalario = Salagit
}