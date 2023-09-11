// import the mosgoose module
const mongoose = require('mongoose');

mongoose.set('strictQuery', false);


// Define the database URL to connect to.
const mongoDB = "mongodb://127.0.0.1/my_database";


// define a schema
const Schema = mongoose.Schema;

const SomeModelSchema = new Schema({
    a_string: String,
    a_date: Date,
});


// Compile a model from schema
const SomeModel = mongoose.model("SomeModel", SomeModelSchema);


// SCHEMA TYPES (FIELDS):   
// A schema can have an arbitrary number of fileds - each one represents a field
// in the documents stored in MongoDB.

const schema = new Schema({
    name: String,   
    binary: Buffer,
    living: Boolean, 
    updated: { type: Date, default: Date.now() },
    age: { type: Number, min: 18, max: 65, },
    mixed: Schema.Types.Mixed,
    _someId: Schema.Types.ObjectId,
    array: [],
    ofString: [String],
    nested: { stuff: { type: String, lowercase: true, trim: true }}
});



// ==================== Creating & Modifying documents ======================== //
// To create a record you can define an instance of the model and then call save()
// on it.


// Exmple:

// Create an instance of model someModel
const awesome_instance = new SomeModel({name: "awesome"});


// Save the new model instance asynchrounously
await awesome_instance.save();


// You can also use "create()" to define the model instance at the same time as you save it.

await SomeModel.create({ name: "also_awesome" });


// You can access the fields in this new record using the dot syntax, and change the values
console.log(awesome_instance.name);     // 'also_awesome'

awesome_instance.name = 'New Cool Name';

await awesome_instance.save();



// =========== Working with related Documents ============ //

const authorSchema = Schema({
    name: String,
    stories: [{ type: Schema.Types.ObjectId, ref: "Author" }],
    title: String,
});

const storySchema = Schema({
    author: { type: Schema.Types.ObjectId, ref: "Author" },
    title: String,
});

const Story = mongoose.model("Story", storySchema);
const Author = mongoose.model("Author", authorSchema);
