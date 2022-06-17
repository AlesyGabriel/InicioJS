//data mes dia ano
//metodo:exibir retornar 

function exibir2 (data) {

    console.log (data);
  return `${data.dia}/${data.mes}/${data.ano}`;
 };
 
 
 //// como professor fez
 
 const nascimento2 = {
     dia: 9,
     mes: 10,
     ano: 2010,
     exibir: function(){
         return exibir2(this);
     }
 }
 
 console.log(nascimento2.exibir());