/*
forEach
- Iteração de cada item dentro de um array */

const arr = [1, 2, 3, 4, 5];

arr.forEach((value, index) => {
    console.log(`${index}: ${value}`);
})


/*
map
- Retorna um novo array, de mesmo tamanho, iterando cada item de um array */

const arr = [1, 2, 3, 4, 5];

const newArr = arr.map(value => value * 2);

console.log(newArr);
// [2, 4, 6, 8, 10]


/*
flat
- Retorna um novo array com todos os elementos de um sub-array concatenados de forma recursiva de acordo com a profundidade especificada(depth) */

const arr = [1, 2, [3, 4], [5, 6]];

const newArr = arr.flat(); // padrão de profundidade é 1
// [1, 2, 3, 4, 5, 6]

const arr2 = [1, 2, [3, 4, [5, 6]]];

const newArr2 = arr2.flat(2);
// [1, 2, 3, 4, 5, 6]

/*
flatMap
- Retorna um novo array assim como a função map e executa um flat de profundidade 1 */

const arr = [1, 2, 3, 4];

arr.flatMap(value => [value * 2]);
// [2, 4, 6, 8]

arr.flatMap(value => [[value * 2]]);
// [[2], [4], [6], [8]]

/*
keys
- Retorna um Array Iterator que contém as chaves para cada elemento do array */

const arr = [1, 2, 3, 4];

const arrIterator = arr.keys();

arrIterator.next();
// {value: 0, done: false}

arrIterator.next();
// {value: 1, done: false}

arrIterator.next();
// {value: 2, done: false}

arrIterator.next();
// {value: 3, done: true}

/*
values
- Retorna um Array Iterator que contém os valores para cada elemento do array */

const arr = [1, 2, 3, 4];

const arrIterator = arr.values();

arrIterator.next();
// {value: 1, done: false}

arrIterator.next();
// {value: 2, done: false}

arrIterator.next();
// {value: 3, done: false}

arrIterator.next();
// {value: 4, done: true}

/*
entries
- Retorna um Array Iterator que contém os pares chave/valor para cada elemento do array */

const arr = [1, 2, 3, 4];

const arrIterator = arr.entries();

arrIterator.next();
// {value: [0, 1], done: false}

arrIterator.next();
// {value: [1. 2], done: false}

arrIterator.next();
// {value: [2, 3], done: false}

arrIterator.next();
// {value: [3, 4], done: true}
