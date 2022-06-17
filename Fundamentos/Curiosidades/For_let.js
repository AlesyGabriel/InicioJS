let panier = ['fraise', 'banane', 'poire'];

for (const fruit of panier) {
  console.log(fruit);// assim pego o nome da variavel
  console.log(panier.indexOf(fruit));// assim pega o indice dela
}
let list = [4, 5, 6];



for (let i in list) {
   console.log(i); // "0", "1", "2"  pegando indice da variavel
}

for (let i of list) {
   console.log(i); // "4", "5", "6" pegando o valor reservado no indice
}