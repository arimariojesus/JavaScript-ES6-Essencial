function Person() {
    return {
        name: 'Arimario',
        lastName: 'Jesus'
    }
}

const p = Person();


function Person(name, lastName) {
    return {
        name,
        lastName
    }
}

const p = Person('Arimario', 'Jesus');

function Person(customProperties) {
    return {
        name: 'Arimario',
        lastName: 'Jesus',
        ...customProperties
    }
}

const p = Pesso({name: 'Custom Name', age: 21});
console.log(p);