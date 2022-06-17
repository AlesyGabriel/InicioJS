// passou se a nota for 7+, recuperação 4+ 7- e -4 reprovado
const nota1 = 4.8;
const nota2 = 1.1;
const nota3 = 2.6;
let a1;
let a2;
let a3;
let moda;

function notabaixaDescartada(a,b,c){
    
    if(a < b){
       if(a < c){
           
         a1 = 0;
         a2 = b;
         a3 = c;
           return;
       }
    }
    if(b < a){
        if(b < c){
             a1 = a;
             a2 = 0;
             a3 = c;
            return;
        }
     }
     if(c < b){
        if(c < a){
             a1 = c;
             a2 = b;
             a3 = 0;
            return;
        }
     }
 
}

function media(a,b,c){
    if(a===0){
        return moda =(b + c)/2 ;
    }
    if(b===0){
        return moda = (a + c)/2 ;
    }


    if(c===0){
    return moda =(a + b)/2 ;
    }
    return 
}
notabaixaDescartada(nota1, nota2, nota3);
console.log(media(a1, a2, a3));

if(moda >= 7){
    console.log('Passou!');
}
if(moda >= 4 && moda < 7){
    console.log('recuperação');
}
if(moda >= 0 && moda < 4){
    console.log('reprovou');
}
