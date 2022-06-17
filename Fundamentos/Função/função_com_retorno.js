function sempreRetornaUm (){

    return 1000;
}
let valor = sempreRetornaUm();
console.log (valor);
//console.log(valor);
function textoOuNumero(retornaTexto) {
    if(retornaTexto){
        return "sou um texto"
    }else{
        return 123;
    }
}
let valur = sempreRetornaUm() + 999;
console.log(valur);

let texto = textoOuNumero(true);
console.log(texto);

console.log(textoOuNumero(false));