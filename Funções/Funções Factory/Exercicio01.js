// Criando uma função factory para livros

function criarLivros(titulo, autor, anoPublicacao) {
  return {
    titulo: titulo,
    autor: autor,
    anoPublicacao: anoPublicacao,
    detalhes: function () {
      console.log(
        `Nome livro: ${titulo}. Nome do autor: ${autor}. Ano de publicação da obra: ${anoPublicacao}`
      );
    },
  };
}

const livro = criarLivros("Anne Frank" , "Anne Frank" , 1877)
livro.detalhes()