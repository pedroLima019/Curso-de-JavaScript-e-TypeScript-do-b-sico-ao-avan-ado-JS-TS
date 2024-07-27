/*
 -cria um novo array com todos os elementos que passaram no teste implementado pela função fornecida 
 - o array original não é modificado  
*/

// const arr = [1, 2, 3, 4, 5];
// console.log(arr.filter((e) => e == 5));

// retorne os numeros maiores que 10
// const num = [50, 60, 30, 10, 1, 7];
// console.log(num.filter((a) => a >= 10));


// retorne as pessoas que tem o nome com 5 letras ou mais
// retorne as pessoas com mais de 50 anos 
// retorne as pessoas cujo nome termina com a 

const pessoas = [ 
 { nome: "Pedro" , idade: 23},
 { nome: "Luiz" , idade: 30}, 
 { nome: "Eduarda" , idade: 70},
 { nome: "Gabriel" , idade: 15},
 { nome: "Helena" , idade: 55}
]

const pessoasComNomeGrande = pessoas.filter(obj => obj.nome.length >= 5);
console.log(pessoasComNomeGrande)

const pessoas3 = pessoas.filter(valor => valor.idade > 50)
console.log(pessoas3)

const pessoas4 = pessoas.filter(n => n.nome.toLowerCase().endsWith('a'))
console.log(pessoas4)