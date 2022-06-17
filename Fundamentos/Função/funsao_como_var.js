const x = 123
let y = 321;
var z = 324;

//IIFE
const somar = function  (a, b){
    return a + b;
};

console.log(somar(x ,y))


function subtrair(a, b){
    return a - b;
};
const subtrasao = subtrair

console.log(subtrair(5,2));
console.log(subtrasao(5,2));
console.log(subtrasao(5,2));