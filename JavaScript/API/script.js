const img = document.querySelector('img');

// First, you have to sign up to the site you  want to use their API,
// then, you'll get a unique key to use in your code


// Add fetch to get the img

fetch('https://api.giphy.com/v1/gifs/translate?api_key=1e6ObMjF2eIpNxlvNOSzwSuWZkg8oLqM&s=cat', {mode: 'cors'})
.then(function(response) {
    // every time it brings a random gif for a cat and show it.
    return response.json();
})
.then(function(response) {
    console.log(response);
    img.src = response.data.images.original.url;
});   
