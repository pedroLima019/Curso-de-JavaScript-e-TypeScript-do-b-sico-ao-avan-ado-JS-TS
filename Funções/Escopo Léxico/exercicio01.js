function criarContador(){
  let contador = 0 

  return{
    incrementar(){
      contador += 1
    },
    valorAtual(){
      return contador; 
    }
  }
}

const contador = criarContador();
contador.incrementar()
console.log(contador.valorAtual())