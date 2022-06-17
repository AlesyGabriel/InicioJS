
function Objeto(obj, n_obj) {
    delete obj[n_obj];

    return obj;
}

console.log(Objeto({a: 1, b: 2}, "a"));
console.log(Objeto({id: 20, 
    nome: "caneta", 
    descricao: "Não preenchido"}, "descricao"));
