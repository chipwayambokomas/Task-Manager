const mongoose = require('mongoose')

const TaskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Must provide name'], //You cannot pass the value w/o the name
        trim: true, //This makes sure you have no spaces
        maxlength: [20, 'Name cannot be more than 20 characters'],
    },
    completed: {
        type: Boolean,
        default: false,
    },
})

module.exports = mongoose.model('Task', TaskSchema)