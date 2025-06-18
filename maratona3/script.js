// Lista de Tarefas domésticas

const tarefas =['Lavar a louça','Lavar roupas','Varrer a casa','Fazer comida','Tirar pó','Arrumar a cama'];

tarefas.forEach((tarefa, indice) => {
    console.log(`Tarefa número ${indice}: ${tarefa}`);
})

// Alarme

function AlarmeEm(segundos){
    console.log(`Alarme programado para ${segundos} segundos...`);
    setTimeout(() => {
        console.log('⏰ Alarme disparado!');
        process.stdout.write('\x07');
    }, segundos * 1000);
}
AlarmeEm(1);

// Contador de Moedas
let moeda = 1;
while(moeda<=100){
    console.log(`Você possuí ${moeda} moedas`);
    moeda = moeda + 1;
}