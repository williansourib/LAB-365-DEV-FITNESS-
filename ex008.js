function parOuImpar(numero) {
    if (numero % 2 === 0) {
        return "par";
    } else {
        return "ímpar";
    }
}

// Exemplo de uso da função
var numero = 10;
console.log(numero + " é " + parOuImpar(numero));