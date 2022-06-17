function CriarData(dia, mes, ano){
return {
    dia: dia,
    mes: mes,
    ano: ano,
    exibir: function(){
        return `${this.dia}/${this.mes}/${this.ano}`
    }
};

}


const d1 = CriarData(9, 10, 2011);
const d2 = CriarData(11, 11, 2013);
const d3 = CriarData(19, 5, 2020);

console.log(d1.exibir());
console.log(d2.exibir());
console.log(d3.exibir());