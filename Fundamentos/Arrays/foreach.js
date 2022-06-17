const notas = [6 ,7 ,8 ,0 , 6, 7, 5 ,7 , 8, 8];
//foreach

let valores = '';
for (let nota of notas) {
    valores += nota +' ';    
}

console.log (valores);
let index = '';

for (let index in notas) {
    index += index + '';
    
}

console.log (index)