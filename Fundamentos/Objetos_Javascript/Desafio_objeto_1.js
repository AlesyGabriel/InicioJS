//data mes dia ano
//metodo:exibir retornar 

function exibir2 (data) {

   data = {
    dia: 20,
    mes: 10,
    ano: 2022,
    };
 return `${data.dia}/${data.mes}/${data.ano}`;
};

console.log (exibir());

//// como professor fez

const nascimento2 = {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
}

console.log(nascimento.exibir());