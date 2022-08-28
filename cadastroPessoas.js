// Criar um cadastro de pessoas onde será armazenado: 
// - Sexo;
// - Idade;
// - Cor do Cabelo,

// Após o prenximento de cada cadastro o sistema deve pergunta 
// se vai continuar inserindo ou não um novo usuário.
// Caso a opção escolhida seja NÃO continuar
// No final diz quantos homens tem mais de 18 anos e cabelos castanhos 
// e quantas mulheres entre 25 e 30 cabelo loiro.

const readline = require('readline-sync');
let desejaContinuar = 1; 
let pessoas = [];

console.log('###################');
console.log('Cadastro de Pessoas');
console.log('###################');
console.log('');

while (desejaContinuar) {
  let pessoa = {};
  
  pessoa.sexo = readline.question("Sexo M/F? ").toUpperCase();
  pessoa.idade = parseInt(readline.question("Idade? "));
  pessoa.corCabelo = parseInt(readline.question("Cor do cabelo? [1]Loiro [2]Castanho [3]Preto [4]Colorido [5]Outra "));

  switch (pessoa.corCabelo) {
    case 1: 
      pessoa.corCabelo = 'Loiro';
      break;
    case 2:
      pessoa.corCabelo = 'Castanho';
      break;
    case 3:
      pessoa.corCabelo = 'Preto';
      break;
    case 4:
      pessoa.corCabelo = 'Colorido';
      break;
    default:
        pessoa.corCabelo = 'Outra';
      break;
  }
  
  pessoas.push(pessoa);

  console.log('');
  desejaContinuar = parseInt(readline.question("Deseja continuar? [1] SIM - [0] NÃO "));
}

console.log('');

const homensResult = pessoas.filter(el => 
  el.sexo === 'M' && el.idade > 18 && el.corCabelo === 'Castanho'
);

const mulheresResult = pessoas.filter(el => 
  el.sexo === 'F' && el.idade > 25 && el.idade < 30 && el.corCabelo === 'Loiro'
);

console.log('');
console.log(`Existem atualmente cadastrados ${homensResult.length} homens com mais de 18 anos de cabelos castanhos` );
console.log(`Existem atualmente cadastrados ${mulheresResult.length} mulheres entre 25 e 30 anos de cabelos loiros`);

console.log('');
console.log('FIM');
console.log(':)');
