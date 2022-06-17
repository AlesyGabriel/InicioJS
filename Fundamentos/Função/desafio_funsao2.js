// parametro(nota) ---> com retorno conceito

function conceito(nota){

    if(Math.ceil(nota) === 10){
        return "A+"
    }else if(Math.ceil(nota) === 9){
        return 'A';
    }else if(Math.ceil(nota) === 8){
        return 'B+';
    }else if(Math.ceil(nota) === 7){
        return 'B';
    }else if(Math.ceil(nota) === 6){
        return 'C+';
    }else if(Math.ceil(nota) === 5){
        return 'C';
    }else if(Math.ceil(nota) === 4){
        return 'D+';
    }else if(Math.ceil(nota) === 3){
        return 'D';
    }else if(Math.ceil(nota)=== 2){
        return 'E+';
    }else if(Math.ceil(nota) === 1){
        return 'E';
    }else if(Math.ceil(nota) === 0){
        return 'F';
    }else{
        nota = undefined ;
    }


}
console.log(conceito(5.2));
