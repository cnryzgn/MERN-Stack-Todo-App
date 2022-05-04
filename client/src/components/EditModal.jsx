import React, { useState } from 'react'

const EditModal = props => {
    const changeBool = bool => bool = !bool

    // -Edit- Input value 
    const [editValue, setEditValue] = useState('')
    const getEditValue = event => setEditValue(event)

    const formHandler = event => {
        event.preventDefault()
    }
  return (
    <div className='modal-container'>
        <div className="modal">
            <h1>Edit</h1>
            <form onSubmit={event => formHandler(event)}>

                {/* Old Todo */}
                <div className="input-group">
                    <input type="text" value={props.todo} readOnly/>
                </div>

                {/* New Todo */}
                <div className="input-group">
                    <input type="text" onChange={event => getEditValue(event.target.value)} placeholder='New todo'/>
                </div>

                <button onClick={() => {props.editItem(props.id, editValue)}}>Save</button>

                {/* Close Button For Modal */}
                <div 
                    onClick={() => props.setToggle(changeBool)}  
                    className="closeBtn"
                >
                    <i className="fa-solid fa-x"></i>
                </div>
            </form>
        </div>
    </div>
  )
}

export default EditModal