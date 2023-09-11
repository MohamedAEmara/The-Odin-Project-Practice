// Set up mongoose connection
const mongoose = require('mongoose');
mongoose.set('strictQuery', false);
const mongoDB = 'mongodb+srv://Emara:12345@cluster0.tklo0ka.mongodb.net/?retryWrites=true&w=majority';


main().catch((err) => console.log(err));

async function main() {
    console.log("Before");
    await mongoose.connect(mongoDB);
    console.log("After");
}