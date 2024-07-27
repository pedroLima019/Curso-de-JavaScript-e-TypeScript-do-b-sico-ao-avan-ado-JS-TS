// Escopo e privacidade
// pode usar variáveis privadas dentro da função factory que não serão acessíveis fora da função.

function contaBancaria(saldoInicial) {
  let saldo = saldoInicial; // valor inicial da conta

  return {
    deposito: function (valor) {
      saldo += valor;
      console.log("Depositado: " + valor + " Saldo atual: " + saldo);
    },
    saque: function (valor) {
      if (valor <= saldo) {
        saldo -= valor;
        console.log("Sacado: " + valor + " Saldo atual: " + saldo);
      } else {
        console.log("Saldo insuficiente");
      }
    },
    consultaSaldo: function () {
      console.log("Saldo atual: " + saldo);
    },
  };
}

const conta = contaBancaria(500);
conta.deposito(1000);
conta.saque(1000);
conta.consultaSaldo();

conta.saldo(); // não é possivel acessar saldo fora do escopo da função
