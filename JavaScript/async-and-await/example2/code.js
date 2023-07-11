const fruits = ['banana', 'strawberry', 'papaya'];

fruits.forEach(async fruit => {
    let msg = "Would you like a " + fruit + "?";
    console.log(msg);
})




// ===== Recall a function getCats from "API" lesson

const img = document.querySelector('img');
function getCats() {
    fetch('https://api.giphy.com/v1/gifs/translate?api_key=0cvagHFFWB3Iwao4Xz4m3VWvThsNlNK8&s=cats', {mode: 'cors'})
    .then(function(response) {
        return response.json();
    })
    .then(function(response) {
        img.src = response.data.images.original.url;
    });
}

getCats()

// We want to rewrite it with "async" and "await"


async function getCats2() {
    const response = await fetch('https://api.giphy.com/v1/gifs/translate?api_key=0cvagHFFWB3Iwao4Xz4m3VWvThsNlNK8&s=cats', {mode: 'cors'});
    const catData = await response.json();
    img.src = catData.data.images.original.url;
}


getCats2();