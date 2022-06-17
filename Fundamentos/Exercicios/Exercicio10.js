function naoSei (parametro) {
    let strong = ''
    for (let a = 1; a <= parametro; a++) {
        strong = strong += '+';   
    }
    return strong
};

console.log (naoSei(2));
console.log (naoSei(4));