function doubleAfter2Seconds(x) {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve(x * 2);            
        }, 2000);
    });
}


doubleAfter2Seconds(10).then((r) => {
    console.log(r);
})
// Awesome, it took 2 secs to show


/*
    But what if we want to run a few different values through our function and add the result? 
    Unfortunately, we cant just add our invocations together and log them:
*/
let sum = doubleAfter2Seconds(10)
        + doubleAfter2Seconds(20)
        + doubleAfter2Seconds(30);


console.log(sum);       // undefined 



// One possible solution is to set up a promise chain. 



function addPromise(x) {
    return new Promise(resolve => {
        doubleAfter2Seconds(10).then((a) => {
            doubleAfter2Seconds(20).then((b) => {
                doubleAfter2Seconds(30).then((c) => {
                    resolve(x + a + b + c);
                })
            })
        })
    });
}


addPromise(10).then((sum) => {
    console.log(sum);            // 130 after 6 seconds of the start of the execution
})


// ================= Switching from Promises to Async/Await. ==================== //
/*
    Awesome! Now lets see just how much easier we could write the above code
    with Async/Await!
*/



/*
    Now that you’ve created an async function, 
    we can make use of the await keyword which will pause our code until the Promise has resolved. 
    Here’s how easy that is:
*/

async function addAsync(x) {
    const a = await doubleAfter2Seconds(10);
    const b = await doubleAfter2Seconds(20);
    const c = await doubleAfter2Seconds(30);
    return x + a + b + c;
}

console.log('line 72');

addAsync(10).then((sum) => {
    console.log(sum);               // 130 after 6 seconds of the start of the execution
});
