/*
 - Retorna o índice do primeiro elemento que satisfaz a função de teste fornecida 
 - se nenhum elemento satisfazer a função de teste , retorna -1 
*/

const arr = [1,2,3,4]
const firstEvenindex = arr.findIndex(e => e > 3)
console.log(firstEvenindex)