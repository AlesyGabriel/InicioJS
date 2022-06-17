function inverso(a){
    const tipo = typeof a;
    if(tipo == "boolean") {
        
      return  !a
    }
    if (tipo == "number") {
        
        return -a;
    }
    else {
        return 'Não e uma variavel do tipo boelano nem numerico mas é do tipo "String"';
    }
};

console.log(inverso(1));
console.log(inverso("1"));
console.log(inverso(true));
console.log(inverso(false));