var numeros = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function tabuadaDe2(item) {
    console.log(item*2);
}

numeros.forEach(tabuadaDe2)
//ele pode ser usado para executar uma função pra cada item de um array

var num = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var total = 0;

function somar(item, indice) {
    total += item;
    console.log("[índice " + indice + "]= " + total + " -> ");
}

num.forEach(somar);
console.log(total);

function som(item, indice) {
    total += item;
    num[indice] = total;
}
num.forEach(som);
console.log(num);