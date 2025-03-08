// step 7 import  the mongoose library to interact with  mongodb
const mongoose = require("mongoose");

// Define the scchema for "Goal" collection
const GoalSchema = new mongoose.Schema({
    title: {
        type: String, // the title must be a string
        required: true, // this field 
    },

    description: String, // optional field: a brief desccription of the gaol 

    progress: {
        type: Number, // the progress must be a number
        required: true, // this field is madatory
        min: 0, // the minimum value allowed is 0
        max: 100, // the maximum value allowed is 100
    }
})


// export the mongoose model for use in other parts of the app
// "Goal" is the name of the model, and it uses GoalScchhema as its structure
module.exports = mongoose.model("Goal", GoalSchema) // to be exported to the 

// then go to the controller  to contimue