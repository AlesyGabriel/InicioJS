let nota = 0.2;

switch (Math.ceil(nota)){
    default:
        console.log ('nota invalida');
        break;
    case 10:    case 9:case 8:
        console.log("nota boa");
        break;
    case 3:
        console.log("nota ruim");
        break;
    case 1:
        console.log("horrivel");
        break;
}
console.log("Fim");

//COMANDOS
// SELECIONA A LINHA ALT + SHIFT PRA BAIXO

// BREAK QUEBRA O CODIGO E VAI PRA PROXIMA LINHA
//CONTINUE INTERROMPE E PULA O VALOR E CONTINUA A EXECUÇÃO