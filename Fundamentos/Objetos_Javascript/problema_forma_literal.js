const d2= {
    dia: 9,
    mes: 10,
    ano: 2010,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};
const d1 = {
    dia: 4,
    mes: 10,
    ano: 2020,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};
const d3 = {
    dia: 11,
    mes: 11,
    ano: 2013,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());