function menorNumero(array) {
    let reserva = array[0];
    let reserva2 = 0;
    for (let i = 0; i < array.length; i++) {
        if(array){
            reserva2 = array[i]
            if (reserva2 < reserva){
               reserva = array[i];
           }
        }
        
        
    }
    return reserva;
}
console.log(menorNumero([10, 5, 35, 65])); // retornará 5 
console.log(menorNumero([5, -15, 50, 3])); // retornará -1