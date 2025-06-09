//if (se condição for verdadeira)
const numerico = 7;
 
if(numerico > 8){
    console.log("O número informado é maior que 8");
} else{
    console.log("O número então é menor que 8");
}
 
//else (se condição for falsa)
//estrutura alinhada e complexa
const nomealuno = "Juliano";
 
if(nomealuno === "Juliano"){
    console.log("Olá " + nomealuno);
}
else if(nomealuno === "Maria"){
    console.log("Olá Maria");
} else{
    console.log("O nome não é Juliano nem Maria");
}
 
//encandamento de condição
let idade = 18;
let temRG = true;
 
if(idade >= 18 && temRG){
    console.log("você pode votar");
}
else {
    console.log("você não pode votar");
}
 
//switch
let novaidade = 18;
 
switch(novaidade){
   case 18:
   console.log("O usuário tem 18");
   break;
   case 17:
   console.log("usuário tem 17.")
   break;
   default:
   console.log("Idade inválidada");
 
}