/*function contarPalavras(texto){
    let valor = 0;
    let palavras = texto.split(/[\s,]+/);

    let i = 0        
    while( i  > palavras.lenght){
        //console.log(string.length[i]);
        console.log(palavras[i])
        valor = palavras[i]
        i++;
    }
    valor = valor +1;
    return valor
    
};
*/
function contarPalavras(frase){
    let palavras = frase.split(" ");
    return palavras.length ;
}

console.log(contarPalavras("Sou uma frase")) // retornará 3 
console.log(contarPalavras("Me divirto aprendendo a programar")) // retornará 5