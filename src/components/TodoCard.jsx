import React from 'react'

function TodoCard(props) {
    const {children, handleRemoveTask, index, handleEditTask} = props
    return (
        <li className="todoItem">
            {children}
            <div className='actionsContainer'>
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

            </div>
        </li>
  )
}

export default TodoCard