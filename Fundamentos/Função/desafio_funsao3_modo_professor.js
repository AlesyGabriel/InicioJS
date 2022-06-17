const nota1 = 7.8;
const nota2 = 3.1;
const nota3 = 6.7;

function minimo(n1, n2){
    return  n1 <= n2 ? n1 : n2;
}
console.log(minimo(nota1, minimo(nota2, nota3)));
function media(n1, n2, n3){
    const menorNota = minimo(nota1, minimo(nota2, nota3))
    
    if(menorNota === n1){
        return (n2 + n3) / 2
    } else if(menorNota === n2){
        return (n1 + n3) / 2
    } else {
        return (n1 + n2) / 2
    }
}

console.log(media(nota1, nota2, nota3));
function mediaParaStatus(media){
    if(media >= 7){
        return'Passou!';
    }
    else if(media >= 4 ){
        return'recuperação';
    }
    else{
        return'reprovou';
    }

}
const mediafinal = media(nota1, nota2, nota3);
const statusfinal = mediaParaStatus(mediafinal);
console.log(`O resultado final do aluno é ${statusfinal}!`)
