const name = 'Arimário';

// Não podemos alterar o valor
name = 'Arimário';

const user = {
    name: 'Arimário'
};

// Mas se for um objeto, podemos trocar o valor das propriedades
user.name = 'Outro nome';

// Não podemos fazer o objeto "apontar" para outro lugar
user = {
    name: 'Arimário'
};

const persons = ['Arimário', 'Guilher', 'Pedro'];

// Podemos adicionar novos itens
persons.push('João');

// Podemos remover algum item
persons.shift();

// Podemos alterar diretamente
persons[1] = 'James';

console.group('\nArray após as alterações: ', persons);