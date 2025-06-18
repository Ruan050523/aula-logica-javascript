//Exercício 1: Sistema de Cadastro de Funcionários (Classes)
class Funcionario {
  constructor(nome, cargo, salario) {
    this.nome = nome;
    this.cargo = cargo;
    this.salario = salario;
  }

  aumentarSalario(porcentagem) {
    this.salario += this.salario * (porcentagem / 100);
  }

  exibirInfo() {
    console.log(`Nome: ${this.nome}`);
    console.log(`Cargo: ${this.cargo}`);
    console.log(`Salário: R$ ${this.salario.toFixed(2)}`);
  }
}

const funcionario1 = new Funcionario("Ruan M.", "Analista de Segurança da Informação.", 5250);
funcionario1.aumentarSalario(15);
funcionario1.exibirInfo();


//Exercício 2: Sistema de Cadastro de Produtos
// Classe base: Produto
class Produto {
  constructor(nome, preco, quantidade) {
    this.nome = nome;
    this.preco = preco;
    this.quantidade = quantidade;
  }

  exibirInfo() {
    console.log(`Produto: ${this.nome}`);
    console.log(`Preço: R$ ${this.preco.toFixed(2)}`);
    console.log(`Quantidade em estoque: ${this.quantidade}`);
  }
}

// Classe Alimento (herda de Produto)
class Alimento extends Produto {
  constructor(nome, preco, quantidade, dataValidade) {
    super(nome, preco, quantidade);
    this.dataValidade = dataValidade;
  }

  exibirInfo() {
    super.exibirInfo();
    console.log(`Data de validade: ${this.dataValidade}`);
  }
}

// Classe Eletrodomestico (herda de Produto)
class Eletrodomestico extends Produto {
  constructor(nome, preco, quantidade, voltagem) {
    super(nome, preco, quantidade);
    this.voltagem = voltagem;
  }

  exibirInfo() {
    super.exibirInfo();
    console.log(`Voltagem: ${this.voltagem}V`);
  }
}

const macarrao = new Alimento("Macarrão", 4.5, 100, "16-07-2025");
console.log("=== Alimento ===");
macarrao.exibirInfo();

const microOndas = new Eletrodomestico("Micro-Ondas",750, 15, 220);
console.log("\n=== Eletrodoméstico ===");
microOndas.exibirInfo();
