//Preço com desconto
let precoOriginal = 300; 
let desconto = 15;
 
let valorDesconto = (precoOriginal * desconto) / 300;
let precoFinal = precoOriginal - valorDesconto;
 
(precoFinal > 0) && console.log("Preço com desconto: R$" + precoFinal);
 

//Conversor de Temperatura 
let celsius = 40; 
let fahrenheit = (celsius * 9/5) + 32;
 
console.log("Temperatura em Fahrenheit: " + fahrenheit + "°F");
 

//Sistema de login Simples
let usuarioCorreto = "Ruan.Martins";
let senhaCorreta = "0505";
 
let usuarioDigitado = "Juan.Martins";
let senhaDigitada = "2305";
 
(usuarioDigitado === usuarioCorreto && senhaDigitada === senhaCorreta) && console.log("Login realizado com sucesso!");
(usuarioDigitado !== usuarioCorreto || senhaDigitada !== senhaCorreta) && console.log("Usuário ou senha incorretos.");
 
 
//Calcular Média do aluno
let nota1 = 5;
let nota2 = 7;
let nota3 = 9;
 
let media = (nota1 + nota2 + nota3) / 3;
 
(media >= 7) && console.log("Aprovado! Média: " + media);
(media >= 5 && media < 7) && console.log("Recuperação. Média: " + media);
(media < 5) && console.log("Reprovado. Média: " + media);