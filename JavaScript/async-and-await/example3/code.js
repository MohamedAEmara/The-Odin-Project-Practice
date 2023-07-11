// A guessing code with "promise" to check wheather the random number is less than 5 
// or not

let myPromise = new Promise((resolve, reject) => {
    let num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    if (num < 5) {
        resolve("You've guessed correctly!")
    } else {
        reject("Better luck next time...")
    }
});



function handleSuccess(goodNews) {
    console.log(goodNews);
}

function handleFailure(badNews) {
    console.log(badNews);
}

// Invoke the promise and "then" pass in our resolve and reject function:

myPromise.then(handleSuccess, handleFailure);


// Instead of passing resolve and reject    -->  we can use .then and .catch

myPromise.then(handleSuccess).catch(handleFailure);


