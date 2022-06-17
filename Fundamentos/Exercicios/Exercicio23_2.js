function segundoMaior(numeros) {
    numeros.sort(function(a,b){ return a - b})
    let segundo = 0;
    let final = 0;
    for (let i = 0; i < numeros.length; i++) {
       final = i;
        
    }
    segundo = numeros[(final -1)];
    return segundo
}




console.log(segundoMaior([5, 7, 8, 2, 10]))
console.log(segundoMaior([18, 10, 5, 30, 20, 14, 1]))