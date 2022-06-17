function executar(fun, n1 ,n2) {
    if(typeof fun === "function"){
        console.log(fun(n1, n2));
    }
}
function somar (a, b) {
    return a + b;
}
function subtrair(a, b){
    return a - b;
}
function multiplicar(a, b){
    return a * b;
}
executar(somar, 50 ,40);
executar(subtrair, 50 ,40);
executar(multiplicar, 40 ,70);
