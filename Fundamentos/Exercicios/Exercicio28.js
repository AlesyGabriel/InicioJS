function buscarPalavrasSemelhantes(busca, palavras) {
    let palavra = [];
     for(let i = 0; i < palavras.length;i++) {
         if(palavras[i].includes(busca)){
                palavra.push (palavras[i]);
         }
     }
     return palavra;

}


console.log (buscarPalavrasSemelhantes("pro", ["programação", "mobile", "profissional"])) // retornará ["programação", "profissional"]
console.log (buscarPalavrasSemelhantes("python", ["javascript", "java", "c++"])) // retornará []


