const mongoose = require('mongoose')
const schema = new mongoose.Schema({
    todo: {
        type: String
    }
})

const Todo = mongoose.model('todos', schema)

module.exports = Todo