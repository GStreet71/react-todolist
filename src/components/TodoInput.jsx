import React, {useState} from 'react'

function TodoInput(props) {

    const {handleAddTask, input, setInput, handleSaveEditedTask, editIndex} = props
    
    return (
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
    )
}

export default TodoInput