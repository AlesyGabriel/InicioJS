function returnarUmaFunsao() {
    return function (){
        return "Boa Tarde";// funsao anonima
    }
}

console.log(returnarUmaFunsao);
console.log(returnarUmaFunsao());
console.log(returnarUmaFunsao()());
///exemplo foda agr sobre isso currying
function somar1(a, b) {
    return a + b;
};
console.log(somar1(5, 4));

function somar2(a) {
    return function (b){
        return a + b;
        }
}
console.log(somar2(5)(4));

const somar10 = somar2(10);
console.log(somar10(5));
console.log(somar10(15));