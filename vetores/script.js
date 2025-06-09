//vetores ou array
let notas = [7.5, 6.3, 4.8, 9.2];

console.log("Notas iniciais", notas);

//Ordenar em ordem crescente
notas.sort((a,b) => a-b);

console.log("Notas ordenadas (crescente):", notas);

//Ordenar em ordem decrescente
notas.sort((a,b) => b - a);
console.log("Notas ordenadas (decrescente):", notas);

//vetor de string
let frutas = ["banana", "maçã", "laranja", "abacaxi"];

console.log("Coleção de frutas:",frutas)

//ordenando em ordem alfabética
frutas.sort();
console.log("Frutas ordenadas:", frutas);
