import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [task, setTask] = useState([])
  const [input, setInput] = useState('')
  const [editIndex, setEditIndex] = useState(null)

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
    setEditIndex(index)
  }

  function handleSaveEditedTask() {
    if (editIndex !== null) {
      const newTodoList = task.map((item, index) =>
        index === editIndex ? input : item
      );
      persistData(newTodoList)
      setTask(newTodoList)
      setEditIndex(null)
    }
  }

  function handleMoveUp(index){
    if(index > 0 ){
      const newTodoList = [...task]
      const temp = newTodoList[index]
      newTodoList[index] = newTodoList[index - 1]
      newTodoList[index - 1] = temp
      persistData(newTodoList)
      setTask(newTodoList)
    }
  }

  function handleMoveDown(index) {
    if(index < task.length - 1) {
      const newTodoList = [...task]
      const temp = newTodoList[index]
        newTodoList[index] = newTodoList[index + 1]
        newTodoList[index + 1] = temp
        persistData(newTodoList)
        setTask(newTodoList)
    }
    
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
      <TodoInput
        input={input} 
        setInput={setInput}
        handleAddTask={handleAddTask}
        handleSaveEditedTask={handleSaveEditedTask}
        editIndex={editIndex}
      />
      <TodoList
        task={task}
        handleRemoveTask={handleRemoveTask}
        handleEditTask={handleEditTask}
        handleMoveUp={handleMoveUp}
        handleMoveDown={handleMoveDown}
      />
    </>
  )
}

export default App
