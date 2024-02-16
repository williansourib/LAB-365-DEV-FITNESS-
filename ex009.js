function exibirMensagem(numero) {
    switch(numero % 2) {
        case 0:
            console.log(numero + " é par.");
            break;
        case 1:
        case -1:
            console.log(numero + " é ímpar.");
            break;
        default:
            console.log("Não é um número inteiro.");
    }
}

// Exemplo de uso da função
exibirMensagem(3);
exibirMensagem(6);
exibirMensagem(4.5);