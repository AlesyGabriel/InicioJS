function calcularMedia (numerosUsuario){
    let soma = 0
        for (let i = 0; i < numerosUsuario.length; i++) {
            soma = soma + numerosUsuario[i];
            
        }
    let media = soma / numerosUsuario.length

    return media;
}




console.log(calcularMedia([0, 10])) // retornará 5 
console.log(calcularMedia([1, 2, 3, 4, 5])) // retornará 3