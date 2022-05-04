const expess = require('express')
const router = expess.Router()
const Todo = require('../models/todoModel')

// PUT: /todos/:id
router.put('/:id', (req, res) => { 
    const todoId = req.params.id
    const newTodo = {
        todo: req.body.todo
    }

    Todo.findByIdAndUpdate({ _id: todoId }, newTodo, (err, result) => {
        if (err) throw err
        res.status(200).json({ msg: 'updated!' })
    })
})

module.exports = router