class Observable {
    // list of observers
    constructor() {
        this.observers = [];
    }

    // function subscribe, allows you to add 'subscribe' to 'observers'
    subscribe(fn) {
        this.observers.push(fn);
    }
    
    // function notify
    notify(data) {
        this.observers.forEach(fn => fn(data));
    }

    unsubscribe(f) {
        this.observers = this.observers.filter(subscriber => subscriber !== f);
    }
}

const o = new Observable();

const logData1 = data => console.log(`Subscribe 1: ${data}`);
const logData2 = data => console.log(`Subscribe 2: ${data}`);
const logData3 = data => console.log(`Subscribe 3: ${data}`);

o.subscribe(logData1);
o.subscribe(logData2);
o.subscribe(logData3);

o.notify('notified 1');
// Subscribe 1: notified 1
// Subscribe 2: notified 2
// Subscribe 3: notified 3

o.unsubscribe(logData2);

o.notify('notified 2');
// Subscribe 1: notified 1
// Subscribe 2: notified 2
// Subscribe 3: notified 3
// Subscribe 1: notified 1
// Subscribe 3: notified 3