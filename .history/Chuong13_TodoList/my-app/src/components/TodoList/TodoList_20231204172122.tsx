import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
  const [currentTodo, setCurrentTodo] = useState<Todo | null>(null)
  const doneTodos = todos.filter((todo) => todo.done)
  const notdoneTodos = todos.filter((todo) => !todo.done)
  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }
  const handleDonTodo = (id: string, done: boolean) => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === id) {
          console.log({ ...todo })
          return { ...todo, done }
        }
        return todo
      })
    })
  }

  const startEditTodo = (id: string) => {
    const findedTodo = todos.find((todo) => todo.id === id)
    if (findedTodo) {
      setCurrentTodo(findedTodo)
    }
  }
  const editTodo = (name: string) => {
    setCurrentTodo((prev) => {
      if (prev) return { ...prev, name }
      return null
    })
  }
  const finishedTodo = () => {
    setTodos((prev) => {
      return prev.map((todo) => {
        if (todo.id === currentTodo?.id) {
          return currentTodo
        }
        return todo
      })
    })
    setCurrentTodo(null)
  }
  const deleteTodo = (id: string) =>{
    if(currentTodo){
      setCurrentTodo(null)
  }
  setTodos(prev => {
    const findedIndexTodo = prev.findIndex((todo) => todo.id ===id)
    if(findedIndexTodo > -1){
      const result = [...prev]
      result.splice(findedIndexTodo,1)
      return result
    }
    return prev
  })
    }
  }

  return (
    <div className={styles.todoList}>
      TodoList
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} currentTodo={currentTodo} editTodo={editTodo} finishedTodo={finishedTodo} />
        <TaskList todos={notdoneTodos} handleDonTodo={handleDonTodo} startEditTodo={startEditTodo} deleteTodo={deleteTodo} />
        <TaskList doneTaskList todos={doneTodos} handleDonTodo={handleDonTodo} startEditTodo={startEditTodo}  deleteTodo={deleteTodo}/>
      </div>
    </div>
  )
}
