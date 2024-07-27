document.addEventListener("DOMContentLoaded", () => {
  const saldo = document.querySelector("#saldo");
  const operacao = document.querySelector("#operacao");
  const valor = document.querySelector("#valor");
  const saldoAtual = document.querySelector("#saldo-atual");
  const form = document.querySelector("#conta-bancaria");

  form.addEventListener("submit", (event) => {
    event.preventDefault(); // previne a submissão do formulário

    //pega o valor dos inputs
    const saldoInicial = parseFloat(saldo.value) || 0;
    const valorOperacao = parseFloat(valor.value) || 0;
    const tipoOperacao = operacao.value;

    let novoSaldo = saldoInicial;
    if (tipoOperacao === "deposito") {
      novoSaldo = saldoInicial + valorOperacao;
    } else if (tipoOperacao === "saque") {
      novoSaldo = saldoInicial - valorOperacao;
    }

    if (!isNaN(novoSaldo)) {
      saldoAtual.value = novoSaldo.toFixed(2); // atualiza o saldo atual
    }else{
      saldoAtual.value = "ERRO"; 
    }
  });
});
