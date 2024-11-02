import React from 'react'
import TodoCard from './TodoCard'

function TodoList(props) {
    const {task} = props

  return (
    <ul className='main'>
        {task.map((task, taskIndex) => {
            return (
                <TodoCard {...props} key={taskIndex} index={taskIndex}>
                    <p>{task}</p>
                </TodoCard>
            )
        })}
    </ul>
  )
}

export default TodoList