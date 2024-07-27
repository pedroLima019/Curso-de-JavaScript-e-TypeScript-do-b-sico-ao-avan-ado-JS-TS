/*
 - altera o conteúdo de um array removendo , substituindo ou adicionando novos elementos
 - Retorna um array contendo os elementos removidos
 */

 const arr = [ 1 , 2 , 3 , 4 ]
 const remove = arr.splice(1,2,"a","b")
console.log(remove)
console.log(arr)