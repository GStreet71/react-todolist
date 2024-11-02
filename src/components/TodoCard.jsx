import React from 'react'

function TodoCard(props) {
    const {children, handleRemoveTask, index, handleEditTask, handleMoveUp, handleMoveDown, completed, isDone} = props
    return (
        <li className="todoItem">
            <p style={{ textDecoration: completed ? 'line-through' : 'none',
                        color: completed ? 'hsl(0, 0%, 85%)' : 'hsl(225, 6%, 13%)'
             }}>
                {children}
            </p>
            <div className='actionsContainer'>
                <input
                    type="checkbox"
                    className="done"
                    checked={completed}
                    onChange={() => isDone(index)}
                />
                <button
                    id="edit"
                    onClick={() => 
                    handleEditTask(index)                    
                    }
                >
                    <i className="fa-solid fa-pen-to-square"></i>
                    </button>
                <button
                    id="remove"
                    onClick={() => 
                    handleRemoveTask(index)
                    }
                >
                    <i className="fa-regular fa-trash-can"></i>
                </button>
                <div className="moveContainer">
                    <button
                        className="move"
                        onClick={() => 
                        handleMoveUp(index)
                        }
                    >
                        <i className="fa-solid fa-caret-up"></i>
                    </button>
                    <button
                        className="move"
                        onClick={() => 
                        handleMoveDown(index)
                        }
                    >
                        <i class="fa-solid fa-caret-down"></i>
                    </button>
                </div>
            </div>
        </li>
  )
}

export default TodoCard