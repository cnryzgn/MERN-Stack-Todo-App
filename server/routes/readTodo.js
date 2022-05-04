const express = require('express')
const router = express()
const Todo = require('../models/todoModel')

// GET: /todos
router.get('/', (req, res) => { 
    Todo.find((err, data) => {
        if (err) throw err
        res.status(200).json(data)
    })
})

module.exports = router