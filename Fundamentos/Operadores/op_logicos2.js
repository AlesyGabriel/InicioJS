let t1 = true;
let t2 = false;

console.log('Compraremos a TV de 50"?', (t1 && t2));//AND
console.log('Compraremos a TV de 32"?', (t1 !== t2));//XOR

let Sorvetin = t1 || t2;
console.log('Sorvetin cambada"?', Sorvetin);//OR

console.log("SE FURDER DEU TUDO ERRADO VOU FICAR EM CASA", !Sorvetin);