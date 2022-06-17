function filtrarPorQuantidadeDeDigitos(array,digitos) {
    let numeros = [];
    for (let i = 0; i < array.length; i++) {
        if(digitos === 1){
            if(array[i]/2 < 5 && array[i]/2 >= 0){
                numeros.push(array[i]);
            }
        }
        if(digitos === 2){
            if(array[i]/2 < 50 && array[i]/2 >= 5){
                numeros.push(array[i]);
            }
        }
        if(digitos === 3){
            if(array[i]/2 < 500 && array[i]/2 >= 50){
                numeros.push(array[i]);
            }
        }

    }
    return numeros;
}




console.log(filtrarPorQuantidadeDeDigitos([38, 2, 365, 10, 125, 11], 3)) // retornará [38, 10, 11] 
console.log(filtrarPorQuantidadeDeDigitos([5, 9, 1, 125, 11], 1)) // retornará [5, 9, 1]