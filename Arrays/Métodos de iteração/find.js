/* 
 - Retorna o primeiro elemento que satisfa a função de teste fornecida
 - Se nenhum elemento satisfazer a função de teste , retorna undefined 
*/

const arr = [ 1 , 2 , 3 ]
const primeiro = arr.find( e => e > 1 )
console.log(primeiro)