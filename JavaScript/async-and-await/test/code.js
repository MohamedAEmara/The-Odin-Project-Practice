// The keywork "await" makes js wait till that promise settle and returns its result.


async function f() {
    let promise = new Promise((resolve, reject) => {
        setTimeout(() => resolve("done!"), 1000);
    });


    let result = await promise;
    console.log(result);      // done;
    
    let res = promise;
    console.log(res);         // returns a promise
}



f();


