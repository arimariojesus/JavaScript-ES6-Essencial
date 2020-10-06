/*
Modificadores de acesso
privado / público
*/

'use strict';

function Person(initialName) {
    // Não é exposto diretamente quando é chamado 'new Person();'
    let name = initialName;

    this.getName = function() {
        return name;
    }

    this.setName = function(newName) {
        name = newName;
    }
}

const p = new Person('Arimario');

'use strict';

console.log(p);
// Person {getName: f, setName: f}

p.getName();
// "Arimario"

p.name;
// undefined

p.setName('Thiago');
p.getName();
// "Thiago"

//======================================================================

'use strict';

class Person {
    //'#' modificador de acesso - define uma variavel privada
    #name = '';

    constructor(initialName) {
        this.#name = initialName;
    }

    setName(name) {
        this.#name = name;
    }

    getName() {
        return this.#name;
    }
}

const p = new Person('Arimario');

'use strict';

console.log(p);
// Person {}

p.getName();
// "Arimario"

p.name;
// undefined

p.setName('Thiago');
p.getName();
// "Thiago"