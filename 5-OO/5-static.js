/**

Static
 - acessar métodos/atributos sem instanciar

*/

'use strict';

// JS

function Person() {
    Person.walk = function() {
        console.log('walking...');
    }
}

console.log(Person.walk());
// "walking..."

// ES6

class Person {
    static walk() {
        console.log('walking...');
    }
}

console.log(Person.walk());
//"walking..."