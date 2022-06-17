function returnarUmaFunsao() {
    function bomDia() {
        return "Bom dia"
    }
    return bomDia;
}
console.log(returnarUmaFunsao);
console.log(returnarUmaFunsao());
console.log(returnarUmaFunsao()());


const umaFunsao = returnarUmaFunsao();
console.log(umaFunsao());