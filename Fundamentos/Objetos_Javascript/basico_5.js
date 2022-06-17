const cliente = {
    codigo: 125,
    nome: 'Ana',
    vip: true,
    endereco: {
        logadouro: 'Rua ABC',
        numero: 123,
        complemento: 'apto 101 bloco B',
        pontosRef:[
            {nome: 'hospital santa casa', muitoProximo: true},
            {nome: 'Drogaria da esquina', muitoProximo: false},
        ]
    },
    nomeFilhos: ['Bia, Carlos, Joao']
    
};
console.log (cliente['endereco']['logadouro']);
console.log(cliente.endereco.numero);
console.log(cliente.endereco.pontosRef[0].nome);
