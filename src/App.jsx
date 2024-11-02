import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [task, setTask] = useState([])
  const [input, setInput] = useState('')

  function persistData(newList) {
    localStorage.setItem('task', JSON.stringify({ task: newList}))
  }

  function handleAddTask(newTask) {
    const newTodoList = [...task, newTask]
    persistData(newTodoList)
    setTask(newTodoList)
  }

  function handleRemoveTask(index) {
    const newTodoList = task.filter((task, taskIndex) => {
      return taskIndex !== index
    })
    persistData(newTodoList)
    setTask(newTodoList)
  }

  function handleEditTask(index) {
    const editValue = task[index]
    setInput(editValue)
    handleRemoveTask(index)
  }

  useEffect(() => {
    if(!localStorage) {
      return
    }

    let localTasks = localStorage.getItem('task')
    if (!localTasks) {
      return
    }

    localTasks = JSON.parse(localTasks).task
    setTask(localTasks)

  }, [])

  return (
    <>
      <TodoInput input={input} setInput={setInput} handleAddTask={handleAddTask} />
      <TodoList task={task} handleRemoveTask={handleRemoveTask} handleEditTask={handleEditTask} />
    </>
  )
}

export default App
