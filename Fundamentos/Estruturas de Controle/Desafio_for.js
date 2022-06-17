/*#
##
###
####
#####
######
*/
/*let linha = '';
for (let a = a; a <= f; a++) {
    linha += '#';
    console.log(linha);
    */

var i = {linha1: '#', linha2: '##', linha3: '###', linha4: '####', linha5: '#####', linha6: '######'};
for (let caracteristica in i){
    //exibe as propriedades do objeto carro
    console.log(caracteristica + ": " + i[caracteristica]);
}

//MODO DO PROFESSOR

for (let s = '#'; s != '#######'; s += '#') { //For controlado por uma string
    console.log(s);
    
}
