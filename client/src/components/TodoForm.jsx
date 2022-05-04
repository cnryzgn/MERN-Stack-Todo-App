const TodoForm = props => {

    const formHandler = event => {
        event.preventDefault()
    }

    return (
        <div className="form-container">
            <h1>To-Do App</h1>
            <form onSubmit={event => formHandler(event)}>
                <div className="input-group">
                    <input 
                        type="text" 
                        onChange={event => props.getValue(event.target.value)} 
                        placeholder="Type your to-do"
                    />
                    <button onClick={() => props.createItem()}>
                        <i className="fa-solid fa-plus"></i>
                    </button>
                </div>
            </form>
        </div>
    )
}

export default TodoForm