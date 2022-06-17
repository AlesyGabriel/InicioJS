let temDinheiro = true;
let calor = true;
let carroGaragem =true;

let resultadoE = "Vai pro shopping meu comparça?"; // && e usado pra porta logica AND ou +
resultadoE += temDinheiro && calor;
console.log(resultadoE);

let resultadoOU = "carro ta na garagem?";// usa-se || para porta logica OR ou *
resultadoOU += calor || carroGaragem;
console.log(resultadoOU);


console.log (true ^ false)// usase ^pra XOR ou Or Exclusivo mas tbm pode se usar !=

console.log(!true);// usase o ! para identificar um NOT
