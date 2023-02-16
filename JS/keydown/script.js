const textbox = document.querySelector('#textBox');
const output  = document.querySelector('#output');

textbox.addEventListener('keydown', (event) => output.textContent = `You pressed ${event.key}.`);




