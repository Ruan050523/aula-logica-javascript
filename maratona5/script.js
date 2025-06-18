// 1-Exercício de vetor 
let Temperaturas = [29, 24, 18, 30, 27];

for (let i = 0; i < Temperaturas.length; i++ ){
    console.log(`${Temperaturas[i]} °C`);

}
let soma = 0;
for (let temp of Temperaturas){
    soma += temp;
}
let media = soma / Temperaturas.length;
console.log(`Temperatura Média da semana: ${media.toFixed(2)}°C`);

// 2-Exercício de Matriz

let temperaturas = [
  [16.0, 17.5, 18.0], // São Paulo
  [21.0, 22.0, 20.5], // Rio de Janeiro
  [18.0, 19.0, 19.5]  // Mogi das Cruzes
];

let cidades = ["São Paulo", "Rio de Janeiro", "Mogi das Cruzes"];

console.log("Temperaturas durante 3 dias:");
for (let i = 0; i < temperaturas.length; i++) {
  let linha = `${cidades[i]}: `;
  for (let j = 0; j < temperaturas[i].length; j++) {
    linha += `${temperaturas[i][j]}°C `;
  }
  console.log(linha);
}

console.log("\nMédia de temperatura por cidade:");
for (let i = 0; i < temperaturas.length; i++) {
  let soma = 0;
  for (let j = 0; j < temperaturas[i].length; j++) {
    soma += temperaturas[i][j];
  }
  let mediatemp = soma / temperaturas[i].length;
  console.log(`Média de ${cidades[i]}: ${mediatemp.toFixed(2)}°C`);
}

// 3-Exercício de ordenação de vetor
let precos = [19.90, 5.50, 12.30, 25.00, 8.75];
precos.sort((a, b) => a - b);

console.log("Preços em ordem crescente:");
for (let preco of precos) {
 
  console.log(`R$ ${preco.toFixed(2)}`);
}
