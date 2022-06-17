let valor = 0;
let armazena =Number;
let arR = [];
function retornaPares(arrAli){
    for (let i = 0; i < arrAli.length; i++) {
        if(arrAli[i]){
            for (let a = 0; a < arrAli.length ; a++) {
                armazena = arrAli[i]%2 === 0;
                
            }
            if(armazena){
                arR.push(arrAli[i]);
            }
        }
        
    }
    return arR
};

/*
function receberSomenteOsParesDeIndicesPares(numeros) {
    let resultado = []
    for(let i = 0; i < numeros.length; i += 2){
        const numeroPar = numeros[i] % 2 === 0
        if(numeroPar)
        resultado.push(numeros[i])
    }
    return resultado
}
*/
console.log (retornaPares([10, 70, 22, 43]));