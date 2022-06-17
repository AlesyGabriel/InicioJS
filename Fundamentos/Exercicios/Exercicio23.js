function segundoMaior(Numero){
    let reserva = Numero[0];
    let reserva2 = 0;
    let indice = 0;
    let valorTirado = 0;
    for (let i = 0; i < Numero.length; i++) {
        if(Numero){
            reserva2 = Numero[i];
            if (reserva2 > reserva){
               reserva = Numero[i];
                valorTirado = Numero[i];
               indice = i;
            
           }
        }
    }
    delete Numero[indice];

    reserva = Numero[0];
    for (let i = 0; i < Numero.length; i++) {
        if(Numero){
            reserva2 = Numero[i]
            if (reserva2 > reserva){
               reserva = Numero[i];
           }
        }
    }
       Numero.push[valorTirado];
    return reserva, console.log(Numero);
}

console.log(segundoMaior([5, 7, 8, 2, 10]))
console.log(segundoMaior([18, 10, 5, 30, 20, 14, 1]))



