function Person() {
    if (!Person.instance) {
        Person.instance = this;
    }

    return Person.instance;
}

const p = Person.call({name: 'Arimario'});

const p2 = Person.call({name: 'Custon Name'});

console.log(p);
// { name: 'Arimario' }
console.log(p2);
// { name: 'Arimario' }