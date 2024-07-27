function fora() {
  let x = 10; // variável definida no escopo da função 'fora'

  function dentro() {
    console.log(x); // acessa a variável 'x' definida no escopo léxico externo
  }

  dentro(); 
}

fora() // 10 
