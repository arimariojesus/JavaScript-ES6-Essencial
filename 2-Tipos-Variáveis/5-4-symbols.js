const symbol1 = Symbol();
const symbol2 = Symbol();

// Symbols são únicos
console.log('symbol1 é igual a symbol2: ', symbol1 === symbol2);

// Prevenir conflito entre nomes de propriedades
const nameSymbol1 = Symbol('name');
const nameSymbolw = Symbol('name');

const user = {
    [nameSymbol1]: 'Arimário',
    [nameSymbol2]: 'Outro nome',
    lastName: 'Arimário Jesus'
};

console.log(user);

// Symbol criam propriedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`\nValor da chave ${key}: ${user[key]}`);
    }
}

console.log('propriedades do objeto user: ', Object.keys(user));
console.log('Valores das propriedades do objeto user: ', Object.values(user));

// Exibir symbols de um objeto
console.log('Symbols registrados no objeto user: ', Object.getOwnPropertySymbols(user));

// Acessando todas as propriedades do objeto
console.log('Todas as propriedades do objeto user: ', Reflect.ownKeys(user));

// Criar um enum
const directions = {
    UP    : Symbol(  'UP' ),
    DOWN  : Symbol(  'DOWN' ),
    LEFT  : Symbol(  'LEFT' ),
    RIGHT : Symbol(  'RIGHT' )
}