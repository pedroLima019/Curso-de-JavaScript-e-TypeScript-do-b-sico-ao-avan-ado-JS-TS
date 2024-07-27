//Criando função factory para carros

function criarCarro(marca, modelo, ano) {
  return {
    marca: marca,
    modelo: modelo,
    ano: ano,
    velocidade: 0,
    acelerar() {
      this.velocidade += 10;
    },
    frear() {
      this.velocidade = 10;
      if (this.velocidade < 0) {
        this.velocidade = 0;
      }
    },
    velocidadeAtual() {
      return this.velocidade;
    },
  };
}

const carro = criarCarro("Volks", "gol", 2020);
console.log(carro.velocidadeAtual())