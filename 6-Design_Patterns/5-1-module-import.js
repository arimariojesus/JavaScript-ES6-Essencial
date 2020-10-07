const {getName, setName} = require('./5-module.js');

console.log(getName());
// default
console.log(setName('Arimario'));
// undefined
console.log(getName());
// Arimario