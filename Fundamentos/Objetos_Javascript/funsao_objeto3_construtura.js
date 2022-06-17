//função Construtura (classe) ---> cria objetos

function Data(dia = 1, mes = 1 , ano = 1) {
    this.dia = dia;
    this.mes = mes;
    this.ano = ano;

    this.exibir = function() {
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

const d1 = new Data();
const d2 = new Data(24 , 12, 2021);
const d3 = new Data(29, 12, 2012);

console.log(d1)

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());