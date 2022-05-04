import React, { useState, useEffect } from "react"
import axios from 'axios'
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

const App = () => {
  //  states
  const [inputVal, setIntputVal] = useState('')
  const [todos, setTodos] = useState([])

  // fetch all todo data from db
  useEffect(() => {
    axios.get('http://localhost:8000/todos')
      .then(res => res.data)
      .then(data => setTodos(data))
      .catch(err => console.log(err))
  })

  // get input value from todo form
  const getValue = event => setIntputVal(event)

  // create Item
  const createItem = () => {
    if (inputVal === '') return alert('Please fill the textbox!')

    const newTodo = {
      todo: inputVal
    }

    axios.post('http://localhost:8000/todos', newTodo)
      .then(res => res)
      .catch(err => console.log(err))

  }

  // delete Item
  const deleteItem = id => {
    axios.delete(`http://localhost:8000/todos/${id}`)
      .then(res => res)
      .catch(err => console.log(err))
  }
  // edit Item
  const editItem = (id, editValue) => {
    if (inputVal === '') return alert('Please fill the textbox!')
    const newItem = { todo: editValue }
    axios.put(`http://localhost:8000/todos/${id}`, newItem)
      .then(res => res)
      .catch(err => console.log(err))
  }

  return (
    <div>
      <TodoForm 
        getValue = {getValue}
        createItem = {createItem}
      />
      <ul className="todo-container">
        {
          todos.map(item => (
            <TodoList
              key={item._id}
              id = {item._id}
              todo = {item.todo}
              deleteItem = {deleteItem} // delete function
              editItem = {editItem} // edit function
            />

          ))
        }
      </ul>
    </div>
  );
};

export default App;
