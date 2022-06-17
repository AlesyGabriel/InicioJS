function contarCaractere(letra,frase){
    let palavra = frase.split(letra)
    return (palavra.length - 1);


}
console.log (contarCaractere("r", "A sorte favorece os audazes") )// retornará 2 
console.log (contarCaractere("c", "Conhece-te a ti mesmo,acontece que sempre é assim cardapio")) // retornará 1
