function receber(arR){
    const valor =[] ;
    const ar = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 18, 19, 20];
    for(let a = 0; a < arR.length; a++){
        for(let b = 0; b < ar.length; b++){
            if (arR[a]=== ar[b]){
                valor.push (arR[a]);
            }
        }
    }
    return valor;
}

console.log(receber(["Javascript", 1, "3", "Web", 20])); // retornará [1, 20] 
console.log(receber(["a", "c"])); // retornará []