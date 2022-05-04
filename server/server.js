const express = require('express')
const app = express()
const mongoose = require('mongoose')
const cors = require('cors')
const PORT = 8000
const readTodo = require('./routes/readTodo')
const createTodo = require('./routes/createTodo')
const updateTodo = require('./routes/updateTodo')
const deleteTodo = require('./routes/deleteTodo')

// CHANGE THE URL DB NAME WITH YOUR OWN DB NAME BEFORE NPM INSTALL
const mongoURI = "mongodb://127.0.0.1:27017/todoList"

// MongoDB Connection
mongoose.connect(mongoURI)
    .then(res => console.log('DB Connection is OK!'))
    .catch(err => console.log(`Error is: ${err}`))

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Routes 
app.use('/todos', readTodo)   // GET: /todos
app.use('/todos', createTodo) // POST: /todos
app.use('/todos', updateTodo) // PUT: /todos/:id
app.use('/todos', deleteTodo) // DELETE: /todos/:id

app.listen(PORT, () => console.log(`Server running on port: http://localhost:${PORT}/`))