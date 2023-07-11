// const randomResponse = async () => {
//     let message = '';
//     let num = Math.floor(Math.random() * 10) + 1;
//     console.log(num);
//     if(num < 5) {
//         message = await ('You guessed correctly!');
//         console.log(message)
//     } else {
//         message = await ('Better luck next time...');
//         console.log(message);
//     }
// }

async function randomResponse() {
    let message = '';
    let num = Math.floor(Math.random() * 10) + 1;
    console.log(num);
    if(num < 5) {
        message = await ('You guessed correctly!');
        console.log(message)
    } else {
        message = await ('Better luck next time...');
        console.log(message);
    }
}

// these were two different ways to use "async" and "await" keywords


randomResponse();