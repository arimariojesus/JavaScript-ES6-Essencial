# Design patterns

## Definição

Design Patterns ou padrões de projetos são soluções generalistas para problemas recorrentes durante o desenvolvimento de um software. Não se trata de um framework ou um código pronto, mas de um definição de alto nível de como um problema comum pode ser solucionado.

## A Pattern Language

- 1978
- Feito por Christopher Alexander, Sara Ishikawa e Murray Silverstein
- 253 tipos de problemas/desafios de projetos

## Formato de um pattern

- Nome
- Exemplo
- Contexto
- Problema
- Solução

## Design Patterns: Elements of Reusable Object-Oriented software

- 1994
- Gang of four (GoF)
- Erich Gamma, Richard Helm, Ralph Johnson e John Vlissides

## Tipos
Os Design patterns são categorizados em três tipos:
- Criação
- Estruturais
- Comportamentais

### Padrões de criação
Os padrões de criação são aqueles que abstraem e/ou adiam o processo de criação dos objetos. Eles ajudam a tornar um sistema independente de como seus objetos são criados, compostos e representados.

- **Abstract Factory**
- **Builder**
- **Factory Method**
- **Prototype**
- **Singleton**

### Padrões estruturais
Os padrões estruturais se preocupam com a forma como classes e objetos são compostos para formar estruturas maiores.

- **Adapter**
- **Bridge**
- **Composite**
- **Decorator**
- **Facade**
- **Business Delegate**
- **Flyweight**
- **Proxy**

### Padrões comportamentais
Os padrões de comportamento se concentram nos algoritmos e atribuições de responsabilidades entre os objetos. Eles não descrevem apenas padrões de objetos ou de classes, mas também os padrões de comunicação entre os objetos.

- **Chain of Responsability**
- **Command**
- **Interpreter**
- **Iterator**
- **Mediator**
- **Observer**
- **State**
- **Strategy**
- **Template Method**
- **Visitor**

## Patterns mais utilizados

- **Factory**
- **Singleton**
- **Decorator**
- **Observer**
- **Module**

### Factory
Todas as funções que retornam um objeto, sem a necessidade de chamá-la com o **new**, são consideradas funções *Factory*(fábrica).

```javascript
function FakeUser() {
    this.name: 'Arimario';
    this.lastName: 'Jesus';
}

// não é Factory
const user = new FakeUser();

```

```javascript
function FakeUser() {
    return {
        name: 'Arimario',
        lastName: 'Jesus'
    }
}

// Factory
const user = FakeUser();

```

### Singleton
O objetivo desse pattern é criar uma única instância de uma função construtora e retorná-la toda vez em que for necessário utilizá-la.

jQuery:
https://jquery.com/

```javascript
var SETTINGS = {
    api: 'http://localhost',
    trackJstoken: '12345'
}
```

```javascript
function MyApp() {
    if (!MyApp.instance) {
        MyApp.instance = this;
    }

    return MyApp.instance;
}

```

### Decorator
Uma função decorator recebe uma outra função como parâmetro e estende o seu comportamento sem modificá-la explicitamente.

Proposta:
https://github.com/tc39/proposal-decorators

TypeScript:
https://www.typescriptlang.org/docs/handbook/decorators.html

### Observer
É um pattern muito popular em aplicações javascript. A instância (subscriber) mantém uma coleção de objetos (observers) e notifica todos eles quando ocorrem mudanças no estado.

Vue:
https://github.com/vuejs/blob/dev/src/core/observer/index.js#L229

RxJs:
https://rxjs-dev.firebaseapp.com/guide/observable

```javascript
class Observable {
    // list of observers
    constructor() {
        this.observers = [];
    }

    // function subscribe, allows you to add 'subscribe' to 'observers'
    subscribe(f) {
        this.observers.push(f);
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }

    // function notify
    notify(data) {
        this.observers.forEach(observer => observer(data));
    }
}

```

### Module
É um pattern que possibilita organizar melhor o nosso código, sem a necessidade de expor variáveis globais.

```javascript
class Person {
    constructor(name) {
        this.name = name;
    }
}

export default Person;

// Utilizar Person
import Person from './models/person';

```