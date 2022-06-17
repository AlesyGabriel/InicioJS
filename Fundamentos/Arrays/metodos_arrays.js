const numero = [1, 2, 3, 4, 5];

numero[0] = 100;
numero.push(6);
const numeros2 = numero.concat(7, 8, 9);



console.log (numero);
console.log (numero.indexOf -2);

console.log (numero.join(' - '));
console.log (numeros2)
console.log (numero.includes(10));
///METODOS DO ARRAY EXCLUINDO   

numero.splice(1, 2);// o primeiro parametro e o indice que tu quer iniciar e o segundo a quantidade que quer excluir
console.log(numero);

numero.pop();
console.log(numero.pop());
console.log(numero);

//


function praCadaElemento(el, indice,array){
    console.log (el, indice, array);
    console.log (el, indice);
    console.log (el);
}
numero.forEach(praCadaElemento);