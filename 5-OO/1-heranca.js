/*
Herança
 - baseada em protótipos
 - prototype
     armazena as definições do objeto
 - __proto__
     aponta pro prototype do tipo da variável que foi criada
 - constructor
*/
//=====================================================================

'use strict';

const myText = "Hello prototype!";

myText.split(''); // <- de onde vem esse "split"?

// ==

'use strict';

const myText = String('Hello prototype!');

console.log(myText.__proto__.split);
// f split() ( [native code] )

console.log(myText.__proto__.split === String.prototype.split);
// true

//* Toda função construtora (constructor) tem um prototype atrelado a ela

console.log(myText.constructor === String)

//__proto__ -> prototype -> constructor

//Quando eu tenho esta declaração:

const myText = 'Hello prototype!';
/*
Eu estou dizendo:

myText.constructor -> String
myText.__proto__ -> String.prototype
*/

//=====================================================================

'use strict';

function Animal() {
    this.qtdePatas = 4;
}

const cachorro = new Animal();

console.log(cachorro.qtdePatas);
// 4

// new Foo(...);

/*
*new*

O que ocorre?

1 - Um novo objeto é criado, herdando Foo.prototype.
2 - A função construtora Foo é chamada com os argumentos especificados e com o 'this' vinculado ao novo objeto criado.
3 - Caso a função construtora tenha um retorno explícito, será respeitado o seu 'return'. Senão, será retornado o objeto criado  no passo 1
*/

// Então:
console.log(cachorro.__proto__ === Animal.prototype);
// true

// e

console.log(Animal.__proto__ === Function.prototype);
// true

'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
}

const pug = new Cachorro(false);

console.log(pug);
// Cachorro {qtdePatas: 4, morde: false}

//----------------------------------------------------------------------

'use strict';

function Animal(qtdePatas) {
    this.qtdePatas = qtdePatas;
    this.movimentar = function() {}
}

function Cachorro(morde) {
    Animal.call(this, 4);

    this.morde = morde;
    this.latir = function() {
        console.log('Au! au!');
    }
    // desta forma sempre que Cachorro() instanciado a uma variável a function 'latir' será criada novamente
}

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

// =>

function Animal() {}

Animal.prototype.qtdePatas = 0;
Animal.prototype.movimentar = function() {}

function Cachorro(morde) {
    this.qtdePatas = 4;
    this.morde = morde;
}

Cachorro.prototype = Object.create(Animal);
Cachorro.prototype.latir = function() {
    console.log('Au! au!');
}

// desta forma a function 'latir' já está definida no prototype

const pug = new Cachorro(false);
const pitbull = new Cachorro(true);

/* !! Mas o prototype deve ser usado com cuidado, pois apartir dela pode-se reescrever métodos já existentes */
