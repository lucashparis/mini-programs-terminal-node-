const livros = require('./database');

// Pega o valor do input
// Caso entrada for sim, exibe as categorias disponiveis e pegunta por qual categoria deseja buscar.
// Caso for não, exibe todas as categorias disponiveis, ordenando de forma crescente considerando o número de páginas.

const readline = require('readline-sync');
const entradaInicial = readline.question("Deseja buscar um Livro? S/N ");

if (entradaInicial.toLocaleUpperCase() === "S") {
    console.log("Essas são as categorias disponiveis: ");
    console.log("Tecnologia", "Autoajuda", "Conto de fada");

    const entradaCategoria = readline.question("Deseja buscar por qual categoria? ");

    const retorno = livros.filter(livro => livro.categoria === entradaCategoria);

    console.table(retorno);

} else {

    const livrosOrdenados = livros.sort((a,b) => a.paginas - b.paginas);
    console.log("Esses são todos os livros disponiveis: ");
    console.table(livrosOrdenados);
    
}