// Retorna o tamanho de uma string
const textSize = 'Texto'.length;
console.log(`Quantidade de letras : ${textSize}`);

// Retorna uma array quebrando a string por um delimitador
const splittedText = 'Texto'.split('x');
console.log('\nArray com as posições separadas pelo deiimitador: ', splittedText);

// Busca por um valor e substitui por outro
const replaceText = 'Texto'.replace('Text', 'txeT');
console.log('\nSubstituição de valor: ', replaceText);

// Retorna a "fatia" de um valor
const lastChar = 'Text'.slice(-1);
console.log('\nÚltima letra de uma string: ', lastChar);

const allWithoutlastChar = 'Text'.slice(0, -1);
console.log('\nValor da string da primeira letra menos a última: ', allWithoutlastChar);

const secondToEnd = 'Texto'.slice(1);
console.log('\nValor da string da segunda letra até a última: ', allWithoutlastChar);

// Retorna N caracters a partir de uma posição
const twoCharsBeforeFirstPos = 'Texto'.substr(0, 2);
console.log('\nAs duas primeiras letras são: ', twoCharsBeforeFirstPos);