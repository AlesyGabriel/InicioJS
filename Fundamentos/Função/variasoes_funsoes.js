//função com parametro r com retorno
function somar (a ,b){
    return  a + b;
};

let resultado = somar(30, 56);
console.log(resultado);
console.log(somar(30, 56));

//função com parametro mas sem retorno
function exibirMultiplicasao(a, b){
    console.log(a * b);
};

exibirMultiplicasao (10 , 21);
exibirMultiplicasao (7, 9);

//função sem parametro e com retorno
function retornarDataAtual(){
    return new Date();
}
console.log(retornarDataAtual());
//sem parametro e sem retorno
function exibirHoraAtual(){
    console.log(new Date().getHours());
};
exibirHoraAtual();