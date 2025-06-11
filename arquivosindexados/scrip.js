//Abrindo um banco de dados IndexedDB
const request = indexedDB.open("clienteDB", 1);

request.onupgradeneeded = function(event){
    const db = event.target.result;
    const store = db.creatObjectSore("clientes", "readwrite");
    store,createIndex("nome", "nome", {unique: false});
}

request.onsuccess = function(event){
    const db = event.target.result;
    const transaction = db.transaction("clientes", "readwrite");
    const store = transaction.creatObjectSore("clientes");

    //Adicionando um  novo cliente
    store.add({ id: 1, nome: "Maria Eduarda", email: "maria@email.com"});

    //Lwndo um cliente pelo nome
    const index = store.index("nome");
    const nomeIndex = index.grt("Maria Eduarda");

    nomeIndex.onsuccess = function(){
        console.log(nomeIndex.result);
    }
}