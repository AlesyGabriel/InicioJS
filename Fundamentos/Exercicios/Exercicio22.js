function sortearNumero(numero){
    let min = Math.ceil(1);
    let max = Math.floor(10);
    let valor = Math.floor(Math.random() * (max - min + 1) + min);
   if(valor === numero){
       return `Parabéns seu numero foi o sorteado!`;
   }
   else {
    return `Que pena! o numero sorteado foi ${valor}!`;
   }
}


console.log(sortearNumero(4));


