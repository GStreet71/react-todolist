import React from 'react'

function TodoCard(props) {
    const {children, handleRemoveTask, index, handleEditTask, handleMoveUp, handleMoveDown} = props
    return (
        <li className="todoItem">
            {children}
            <div className='actionsContainer'>
                <button onClick={() => {
                    handleMoveUp(index)
                }}>
                    <i class="fa-solid fa-caret-up"></i>
                </button>
                <button onClick={() => {
                    handleEditTask(index)                    
                }}>
                    <i className="fa-solid fa-pen-to-square"></i>
                </button>
                <button onClick={() => {
                    handleRemoveTask(index)
                }}>
                    <i className="fa-regular fa-trash-can"></i>
                </button>
                <button onClick={() => {
                    handleMoveDown(index)
                }}>
                    <i class="fa-solid fa-caret-down"></i>
                </button>

            </div>
        </li>
  )
}

export default TodoCard