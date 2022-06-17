function somarArray (array) {
    let soma = 0;
    for (let i = 0; i < array.length ; i++) {
        soma = soma + array[i];
        
    }
    return soma;
}

console.log(somarArray([10,15,10,10]));