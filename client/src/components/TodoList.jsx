import React, { useState } from 'react'
import EditModal from './EditModal'

const TodoForm = props => {
    const changeToggleState = bool => bool = !bool // to change toggle value(true/false)

    // Toggle State
    const [toggle, setToggle] = useState(false) // show/hide Edit Form Modal
    return (
        <li>
            <p>{ props.todo }</p>
            <div className="button-group">

                {/* Delete Button */}
                <button id="deleteBtn" onClick={() => props.deleteItem(props.id)}>
                    <i className="fa-solid fa-trash-can"></i>
                </button>

                {/* Edit Button */}
                <button onClick={() => setToggle(changeToggleState)} id="editBtn">
                    <i className="fa-solid fa-pen"></i>
                </button>

                {
                    toggle 
                        ? <EditModal
                            editItem = {props.editItem} // Edit Funciton
                            id = {props.id}
                            todo = {props.todo}
                            setToggle = {setToggle}
                          /> 
                        : null
                }
            </div>
        </li>
    )
}

export default TodoForm