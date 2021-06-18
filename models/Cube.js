const { Schema, model } = require("mongoose");

//first we design our schema
const schema = new Schema({

    name: String,
    description: String,
    imageUrl: String,
    difficulty: Number

})
//then we turn this schema into a model
module.exports = model('Cube', schema);
