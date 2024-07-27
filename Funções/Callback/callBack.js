/*
- função de callback permite executar uma função depois de uma determina ação 
 */

function exibir(num) {
  console.log( " A operação resultou em " + num);
}

function somar(a, b, callback) {
  let op = a + b;
  callback(op);
}
somar(4, 8, exibir);
