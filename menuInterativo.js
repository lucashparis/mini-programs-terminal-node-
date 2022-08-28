const readline = require('readline-sync');

console.log('#################');
console.log('|     MENU      |');
console.log('#################');
console.log('|[1] De 1 a 10  |');
console.log('|[2] De 10 a 1  |');
console.log('|[3] Sair       |');
console.log('#################');
console.log('');

const optionSelected = parseInt(readline.question("Selecione uma opção para prosseguir? "));

switch (optionSelected) {
  case 1: 
    console.log('');
    for (let i = 1; i <= 10; i++) {
      console.log(`${i} ...`);
    }
    
    break;
  case 2:
    console.log('');
    for (let i = 10; i >= 1; i--) {
      console.log(`${i} ...`);
    }
    
    break;
  case 3:
    console.log('*******************');
    console.log('Até + (0.0)/ ');
    console.log('*******************');
   
    break;

  default:
    console.log('Comando invalido :( ');
    console.log('Opções possiveis: [1], [2] e [3]');
    
    break;
}

