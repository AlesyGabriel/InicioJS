function removerVogais (frase){
  const vogais = ["a", "e", "i", "o", "u"];
  let reserva = '';
  let reserva2 = '';
  let temp = "";
  let temp2 = "";
 
  for (let i = 0; i < vogais.length; i++) {
      if(i===0){
        reserva = frase.split(vogais[i],9)
        for(let b = 0; b < reserva.length;b++){
            if(reserva.length >1){
                temp += reserva[b]
              }
              else{
                temp = reserva[b];
            }
      }
    }
      else if (i % 2 === 0 && i != 0){
        reserva = temp2.split(vogais[i],9)
        for(let u = 0; u < reserva.length;u++){
            if(reserva.length >1){
                if(temp2 == temp){
                    temp = ""
                    temp += reserva[u]
                }
                else {
                    temp=""
                    temp += reserva2[u]
                }
              }
              else{
                temp = reserva[u];
            }
      
    }
}
      else if(i %2 !==0){
          reserva2 = temp.split(vogais[i],9);
          for(let a = 0; a < reserva2.length;a++){
              if(reserva2.length >1){
                if(temp2 == temp){
                    temp2 = ""
                    temp2 += reserva2[a]
                }
                else {
                    temp2 += reserva2[a]
                }
                }
                else{
                  temp2 = reserva2[a];
              }
          }

      }
      
      
  }
  temp = "";
  for (let i = 0; i < reserva2.length; i++) {
            temp += reserva2[i]
      
  }
return temp;
    
}

//console.log (removerVogais("Cod3r")) // retornará "Cd3r" 
console.log (removerVogais("Fundamentos")) // retornará "Fndmnts"
