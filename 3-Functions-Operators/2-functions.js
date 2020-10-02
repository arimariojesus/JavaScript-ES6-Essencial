this.name = 'Nome no contexto de criação';

const getNameArrowFn = () => this.name;

function getName() {
    return this.name;
}

const user = {
    name: 'Nome no objeto de execução',
    getNameArrowFn,
    getName
}

// Arrow function apontará para o contexto de criação
console.log(user.getNameArrowFn());
// function normal apontará para o contexto onde ela está sendo executada
console.log(user.getName());