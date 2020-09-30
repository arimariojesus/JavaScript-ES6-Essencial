// currying é a técnica de transformar uma função com N parâmetros em uma função que recebe apenas 1 parâmetro e para cada parâmetro vai retornando uma nova função

// sem currying
function soma(a, b) {
    return a + b;
}

soma(2, 2);
soma(2, 3);
soma(2, 4);
soma(2, 5);

// aplicando currying
function soma(a) {
    return function(b) {
        return a + b;
    }
}

const soma2 = soma(2);

console.log(soma2(2));
console.log(soma2(3));
console.log(soma2(4));
console.log(soma2(5));