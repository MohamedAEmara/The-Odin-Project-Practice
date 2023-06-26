const email = document.getElementById('mail');

email.addEventListener('input', (event) => {
    // This checks for validity of the html form
    // and change the hint message appearing next to the input field
    if(email.validity.typeMismatch) {
        email.setCustomValidity("I'm expecting an email address!");
    } else {
        email.setCustomValidity("");
    }
});




