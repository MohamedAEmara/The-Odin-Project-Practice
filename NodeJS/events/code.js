const EventEmitter = require('events');

const eventEmitter = new EventEmitter();

// emit  ==>    is used to trigger an event
// on    ==>    is used to add a callback function that's going to be executed when the event is triggered

// For example, let's create a start event, 
// and as a matter of providing a sample, we react to that by just logging to the console:

eventEmitter.on('start', () => {
    console.log('started');
});



// When we run: 
eventEmitter.emit('start');
// the event handler function is triggered, and we get the console.log()
// You can pass arguments to the event handler by passing them as additional arguments
// to emit();

eventEmitter.on('func', (arg) => {
    console.log(arg);
});

eventEmitter.emit('func', `Hi, there.. I'm just trying the new eventEmitter`);


// You can also pass Multiple argument as a parameters to the called function..
eventEmitter.on('printRange', (start, end) => {
    for(let i=start; i<=end; i++) {
        console.log(i);
    }
});

eventEmitter.emit('printRange', 100, 109);





const door = new EventEmitter();    
// The event listener has these in-built events:
/*
    - newListener       ==>     when a listener is added.
    - removeListener    ==>     when a listener is removed.   
*/

// door.addListener();     ===   door.on()      "They are equivalent"

door.emit('slam');      // Emitting the event slam


door.on('hello', () => {
    console.log('Hello, there');
});

door.eventNames();  // Returns an array of strings that represent the events registered
                    // on the current "EventEmitter" object.

console.log(door.eventNames());     // [ 'hello' ]

console.log(door.getMaxListeners());

door.setMaxListeners(1);


door.on('two', () => {
    console.log('two');
});

console.log(door.eventNames());
console.log(door.getMaxListeners());    // [ 'hello' ]


door.emit('hello');
door.emit('two');

// Note: when you add listeners more than the number of maxListners
// they'll be added but the max will remain as the number set
// But, it still gets a WARNING....

console.log(door.listenerCount('hello'));   
door.on('two', (arg) => {
    console.log(arg);
});
console.log(door.listenerCount('two'));     // 2 , as we created two listeners (door.on('two'))


console.log(door.listeners('two'));     // gets an array of listeners of the event passed as parameters.



// emitter.once()

/* 
    Adds a callback function that's called when an event is emitted for the first time
    after registering this.
    This callback is only going to be called once, never again.
*/

door.once('break', () => {
    console.log('The door needs to be repaired');
});

door.emit('break');     // The door need to be repaired.
door.emit('break');     // Prints Nothing ... As 'break' has been called before.


