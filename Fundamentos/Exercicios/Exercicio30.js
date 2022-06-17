function inverter(objeto){
   let temp1 = [];
    indice = 1;
    for(let objetoInvertido in objeto){
        temp1[indice] = objetoInvertido
        indice++
    }
      const myObject = Object.assign({}, temp1);
 return myObject;
}

//inverter({a: 1,b: 2,c: 3}); 
console.log(inverter({a: 1,b: 2,c: 3}))