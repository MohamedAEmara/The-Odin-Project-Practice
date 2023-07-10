const on = document.getElementById('on');
const off = document.getElementById('off');
const img = document.getElementById('gif');
const searchBtn = document.getElementById('search');
const input = document.getElementById('input');


searchBtn.addEventListener('click', () => {
    if(input.value != "" && input.value != null) {
        let url = `https://api.giphy.com/v1/gifs/translate?api_key=1e6ObMjF2eIpNxlvNOSzwSuWZkg8oLqM&s=${input.value}`; 
        console.log(url);

        fetch(url, {mode: 'cors'})
        .then(function(response) {
            return response.json();
        })
        .then(function(response) {
            console.log(response);
            img.src = response.data.images.original.url;
        })
    }
    console.log(input.value);
})

on.addEventListener('click', () => {
    img.style.display = 'inline-block';
    let rand = Math.random();
    let char = rand * 26;
    char = parseInt(char, 10) + 65;
    char = String.fromCharCode(char);
    let url = `https://api.giphy.com/v1/gifs/translate?api_key=1e6ObMjF2eIpNxlvNOSzwSuWZkg8oLqM&s=${char}`; 
    
    console.log(url);

    fetch(url, {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        console.log(response);
        img.src = response.data.images.original.url;
    })
});


off.addEventListener('click', () => {
    img.style.display = 'none';
})