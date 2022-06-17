const hora = 19;
let saudasao;

if (hora < 12){
    saudasao = 'Bom dia';
}
else if (hora < 18)  {// else if e um bloco intermediario
    saudasao = 'Boa tarde'
}
else if (hora < 22){
    saudasao = 'Boa noite'
}
else {
    saudasao = 'Vai dormir!'
}

console.log (saudasao);
//esse codigo e a melhor forma de fazer ,entao e isso melhor criar algo desse jeito.
