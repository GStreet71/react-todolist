import React, {useState} from 'react'

function TodoInput(props) {

    const {handleAddTask, input, setInput} = props

    return (
        <header>
            <input value={input} onChange={(e) => {
                setInput(e.target.value)
            }} placeholder="Enter To-Do List item..."></input> 
            <button onClick={() => {
                handleAddTask(input)
                setInput('')
            }}>Add</button>
        </header>
    )
}

export default TodoInput