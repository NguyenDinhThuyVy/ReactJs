import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const [todos, setTodos] = useState<Todo[]>([])
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
          console.log({ ...todo, done })
          return { ...todo, done }
        }
        return todo
      })
    })
  }
  console.log(todos)
  return (
    <div className={styles.todoList}>
      TodoList
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList todos={notdoneTodos} handleDonTodo={handleDonTodo} />
        <TaskList doneTaskList todos={doneTodos} handleDonTodo={handleDonTodo} />
      </div>
    </div>
  )
}
