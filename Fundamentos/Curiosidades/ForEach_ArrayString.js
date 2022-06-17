var marcas = ["Fiat", "Chevrolet", "Ford", "Volkswagen"]
var marcasIniciadasComF = [];
var novoIndice = 0;

function selecionarMarcas(item, indice) {/// E divido assim ITEM = Nome do Item;Indice = Possiçao do Array; Array = A tudo que tem dentro do array, array inteiro.
    if (marcas[indice].indexOf("F") == 0) {//indexOf e usado pra encontrar um caracter dentro de uma string//nesse caso ele esta sendo usado ==0 porque seria a primeira possição do item 
        marcasIniciadasComF[novoIndice] = marcas[indice];//aqui marcasiniciadascomf esta armazenando tudo em um array usando novoindice como o indice da variavel guardada.
        novoIndice++;
    }
}

marcas.forEach(selecionarMarcas);
console.log(marcasIniciadasComF);