import React, {useState} from 'react'

function TodoInput(props) {

    const {handleAddTask, input, setInput, handleSaveEditedTask, editIndex} = props
    
    return (
        <div className='main'>
            <div className="title">
                <h1>To-Do List</h1>
            </div>
            <header>     
                <input
                    value={input}
                    onChange={(e) => {
                    setInput(e.target.value)
                    }}
                    onKeyDown={(e) => {
                        if (e.key === 'Enter') {
                            if(editIndex !== null) {
                                handleSaveEditedTask()
                            } else {
                                handleAddTask(input)
                            }
                            setInput('')                        
                        }
                    }}
                    placeholder="Enter To-Do List item..."
                >
                </input> 
                <button
                    onClick={() => {
                    if(editIndex !== null) {
                        handleSaveEditedTask()
                    } else {
                        handleAddTask(input)
                    }
                    setInput('')
                }}>
                    Add
                </button>
            </header>
        </div>
    )
}

export default TodoInput