const user = {
    name: 'Arimário',
    lastName: 'Jesus'
};

// Recupera as chaves do objeto
console.log('Propriedades do objeto user: ', Object.keys(user));

// Recupera os valores
console.log('\nValores das propriedades do objeto user: ', Object.values(user));

// Retona um array de arrays contendo [ nome_prop, valor_prop ]
console.log('\nLista de propriedades e valores: ', Object.entries(user));

// Meargear propriedades de objetos
Object.assign(user, {fullname: 'Arimário Jesus'});

console.log('\Adiciona a propriedade fullName no objeto user ', user);
console.log('\nRetorna um novo objeto mergeando dois ou mais objetos ', Object.assign({}, user, {age: 26}));

// Previne todas as alterações em um objeto
const newObj = { foo: 'bar' };
Object.freeze(newObj);

newObj.foo = 'changes';
delete newObj.foo;
newObj.bar = 'foo';

console.log('\nVariável newObj após as alterações: ', newObj);

// Permite apenas a alteração de propriedades existentes em um objeto
const person = { name: 'Arimário' };
Object.seal(person);

person.name = 'Outro nome';
delete person.name;
person.age = 26;

console.log('\nVariável person após as alterações', person);