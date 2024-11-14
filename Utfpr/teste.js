const calculadora = {
    somar: function(a, b) {
        return a + b;
    },
    subtrair: function(a, b) {
        return a - b;
    }
};

console.log(calculadora.somar(5, 3));     // Saída: 8
console.log(calculadora.subtrair(5, 3));  // Saída: 2
console.log(calculadora)