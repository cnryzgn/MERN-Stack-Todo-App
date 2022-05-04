const expess = require('express')
const router = expess.Router()
const Todo = require('../models/todoModel')

// POST: /todos
router.post('/', (req, res) => { 
    const newTodo = {
        todo: req.body.todo
    }

    Todo.create(newTodo, (err, data) => {
        if (err) throw err
        res.status(201).json({ msg: 'created!' })
    })
})

module.exports = router