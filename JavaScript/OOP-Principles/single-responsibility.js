


//// =============================== Bad Example =========================== ////

class Car {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if(1) {     /// Some condition 
            this.errorLog(`The car ${this.make} ${this.model} started.`);
            return true;
        }
        this.errorLog(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }

    errorLog(message) {
        console.log(message);
    }
}


/*
    This violates the "single responsibility" principle, because the logic for logging the 
    information should not be a responsibility of the Car class.
*/

/*
    Let’s say your logger logs to a file, and this works great for several months. 
    Suddenly, an update occurs on the underlying system that the car class is running on,
    and you need to change the way you write to files. 
    Suddenly you now need to update every file writing instance of every class you’ve ever implemented 
    a logger inside of. The task would be huge! But what if you’d followed the single responsibility principle?
*/


//// ================ Applying Simgle Responsibility principle ================= ////

class ErrorLog {
    static log(message) {
        console.log(message);
    }
}


class Car2 {
    constructor(make, model) {
        this.make = make;
        this.model = model;
    }

    start() {
        if(1) {       // some condition
            ErrorLog.log(`The car ${this.make} ${this.model} started.`);
            return 1;
        }   
        ErrorLog.log(`The car ${this.make} ${this.model} failed to start.`);
        return false;
    }
}




// ====================================== Another Example =============================== //

//  Single Responsibility Principle
/*
    A class should have one and only one reason to change, 
    meaning that a class should only have one job.
*/


const circle = (radius) {
    const proto = {
        type: 'Circle',
        // code
    }
    return Object.assign(Object.create(proto), {radius});
}

const square = (length) => {
    const proto = {
        type: 'Square',
        // code
    }
    return Object.assign(Object.create(proto), {lenght});
}

const areaCalculator = (s) => {
    const proto = {
        sum() {
            // logic to sum
        },
        output() {
            return `
            <h1>
                Sum of the areas of provided shapes:
                ${this.sum()}
            </h1>`
        }
    }
     
    return Object.assign(Object.create(proto), {shapes: s})
}


shapes = [
    circle(2), 
    square(5), 
    square(6)
]


const area = areaCalculator(shapes)
console.log(area.output());