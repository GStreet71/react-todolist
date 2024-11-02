import React from 'react'

function TodoCard(props) {
    const {children, handleRemoveTask, index, handleEditTask, handleMoveUp, handleMoveDown} = props
    return (
        <li className="todoItem">
            {children}
            <div className='actionsContainer'>
                <button id="edit" onClick={() => {
                    handleEditTask(index)                    
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button id="remove" onClick={() => {
                    handleRemoveTask(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
                <div className="moveContainer">
                    <button className="move" onClick={() => {
                        handleMoveUp(index)
                    }}>
                        <i className="fa-solid fa-caret-up"></i>
                    </button>
                    <button className="move" onClick={() => {
                        handleMoveDown(index)
                    }}>
                        <i class="fa-solid fa-caret-down"></i>
                    </button>
                </div>
            </div>
        </li>
  )
}

export default TodoCard