const hora = 19;
let saudasao;

if (hora < 12){
    saudasao = 'Bom dia';
}
else {
    if (hora < 18) {
    saudasao = 'Boa tarde'
    }
    else{
    saudasao = 'Boa noite'
    }
}
console.log (saudasao);