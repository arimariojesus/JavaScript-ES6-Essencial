/*
join
- Junta todos os elementos de um array, separando por um delimitador e retorna uma string */

const arr = [1, 2, 3, 4, 5];

arr.join('-');
// "1-2-3-4-5"

/*
reduce
- Retorna um novo tipo de dado itearndo cada posição de um array */

const arr = [1, 2, 3, 4, 5];
//       'retorno' 'valor elemento'         inicialização do retorno
arr.reduce((total, value) => total += value, 0);
// 15