// Create a SomeModel model just by requiring the module
const SomeModel = require('../models/somemodel');

// Use the SomeModel object (model) to find all someModel records
const modelInstances = await SomeModel.find().exec();