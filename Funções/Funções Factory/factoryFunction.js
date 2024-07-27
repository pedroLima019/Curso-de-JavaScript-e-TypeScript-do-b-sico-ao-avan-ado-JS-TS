// // funções de fabrica
function criarHuman(nome,idade,anoNasc) {
  return {
    nome: nome,
    idade: idade,
    anoNasc: anoNasc,
    mandaSalve: function () {
      console.log(
        `Salve meu nome é ${this.nome} , tenho ${this.idade} , nasci em ${this.anoNasc}`
      );
    },
  };
}

const Pessoa = criarHuman("Pedro", 23, 2000); 
Pessoa.mandaSalve(); 