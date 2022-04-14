const mongoose = require('mongoose');

const PersonSchema = new mongoose.Schema({
    firstName: { 
        type: String,
        required: [true, "A person must have a first name"],
        minLength: [2, "First name must be at least 2 characters long"]
    },
    lastName: {
        type: String,
        required: [true, "A person must have a last name"],
        minLength: [2, "Last name must be at least 2 characters long"]
    }
}, { timestamps: true });

module.exports = mongoose.model("Person", PersonSchema);