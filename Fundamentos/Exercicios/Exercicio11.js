

function naoSei(Tu){
    Tu = [1, 2, 3, 4, 5, 6, 7, 8, 9];
    const primeiroElemento= Tu.shift()// pega o primeiro valor do primeiro indice (indice e a posição que o numero se encontra)
    const ultimoElemento = Tu.pop()// pega o ultimo valor do ultimo indice

    return [primeiroElemento, ultimoElemento]
   
}
console.log (naoSei());

//function praCadaElemento(el, indice,array){
//console.log (el, indice, array);
//console.log (el, indice);
//console.log (el);
//}
//numero.forEach(praCadaElemento);

