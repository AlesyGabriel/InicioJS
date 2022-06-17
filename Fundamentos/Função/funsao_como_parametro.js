function executar(fun){
    if (typeof fun === "function"){
    console.log(fun());
    }
};
function bomDia(){
    return ('Bom dia');
}

executar(3);
executar(bomDia);


const x = bomDia;
const y = bomDia();

console.log(x());
console.log(y);

//ctrl + d seleciona todos com mesmo nome