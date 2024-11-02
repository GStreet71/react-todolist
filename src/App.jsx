import { useState, useEffect } from 'react'
import TodoInput from './components/TodoInput'
import TodoList from './components/TodoList'

function App() {
  const [task, setTask] = useState([])
  const [input, setInput] = useState('')
  const [editIndex, setEditIndex] = useState(null)
  const [originalOrder, setOriginalOrder] = useState([])

  function persistData(newList) {
    localStorage.setItem('task', JSON.stringify({ task: newList}))
  }

  function handleAddTask(newTask) {
    const newTodoList = [...task, {title: newTask, completed: false }]
    persistData(newTodoList)
    setTask(newTodoList)
    setOriginalOrder(newTodoList.map((_, index) => index))
  }

  function handleRemoveTask(index) {
    const newTodoList = task.filter((task, taskIndex) => {
      return taskIndex !== index
    })
    persistData(newTodoList)
    setTask(newTodoList)
  }

  function handleEditTask(index) {
    const editValue = task[index].title
    setInput(editValue)
    setEditIndex(index)
  }

  function handleSaveEditedTask() {
    if (editIndex !== null) {
      const newTodoList = task.map((task, index) =>
        index === editIndex ? {...task, title: input} : task
      );
      persistData(newTodoList)
      setTask(newTodoList)
      setEditIndex(null)
    }
  }

  function isDone(index) {
    const newTodoList = task.map((task, i) => {
      if(i === index) {
        return {...task, completed: !task.completed }
      }
      return task
    })
    persistData(newTodoList);
    setTask(newTodoList);
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
    setOriginalOrder(localTasks.map((_, index) => index))
  }, [])

  return (
    <div className='area'>
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
        isDone={isDone}
      />
    </div>
  )
}

export default App
