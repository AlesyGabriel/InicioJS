let bolinha ;
function retornaArrays(Objeto){
 bolinha = Object.entries(Objeto);
 
 return bolinha;
}

console.log(retornaArrays({ 
    nome: "Maria", 
     profissao: "Desenvolvedora de software" 
    }) );