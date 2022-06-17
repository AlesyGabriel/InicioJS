function recerberMelhorEstudante (Objeto){
    let Obj ={};
     let media1 = 0;
     let soma1 = 0;
     let soma2 = 0;
     let soma3 = 0;
      for (let i = 0; i < Objeto.Joao.length; i++) {
          soma1 = soma1 + Objeto.Joao[i]

          
    }
    media1 = soma1 / Objeto.Joao.length;
     let media2 = 0;
     for (let i = 0; i < Objeto.Mariana.length; i++) {
        soma2 = soma2 + Objeto.Mariana[i]

        
  }
  media2 = soma2 / Objeto.Mariana.length;

     let media3 = 0;
     for (let i = 0; i < Objeto.Carla.length; i++) {
        soma3 = soma3 + Objeto.Carla[i]

        
  }
  media3 = soma3 / Objeto.Carla.length;
        if (media1 > media2 && media1 >media3){
            Obj = {Nome: "Joao", Media: `${media1}`};
            
        }
        if (media2 > media1 && media2 >media3){
            Obj = {Nome: "Mariana", Media: `${media2}`};
            
        }
        if (media3 > media1 && media3 >media2){
            Obj = {Nome: "Carla", Media: `${media3}`};
            
        }
        return Obj;
}


console.log(recerberMelhorEstudante({ 
    Joao: [8, 7.6, 8.9, 6], // média 7.625 
    Mariana: [9, 6.6, 7.9, 8], // média 7.875 
    Carla: [7, 7, 8, 9] // média 7.75 
   })) // retornará { nome: "Mariana", media: 7.875 }