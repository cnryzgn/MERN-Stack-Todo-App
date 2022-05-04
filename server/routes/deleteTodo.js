const express = require('express')
const router = express()
const Todo = require('../models/todoModel')

// DELETE: /todos/:id
router.delete('/:id', (req, res) => { 
    const todoId = req.params.id
    
    Todo.findByIdAndDelete({ _id: todoId }, (err, result) => {
        if (err) throw err
        res.status(200).json({ msg: 'deleted!' })
    })
})

module.exports = router