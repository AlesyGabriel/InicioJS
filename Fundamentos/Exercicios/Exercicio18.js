function despesasTotais(arrayDeObjeto){
    let soma = 0;
    for (let i = 0; i < arrayDeObjeto.length; i++) {
       soma = soma + arrayDeObjeto[i].preco;
        
        
    }
    return soma;
}



console.log(despesasTotais([ 
    {nome: "Jornal online", categoria: "Informação", preco: 89.99}, 
    {nome: "Cinema", categoria: "Entretenimento", preco: 150} 
   ])) // retornará 239.99