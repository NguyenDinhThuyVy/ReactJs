import React, { useState } from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
import { Todo } from '../../@types/todo.type'
export default function TodoList() {
  const { todos, setTodos } = useState<Todo[]>([])
  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  }
  console.log(todos)
  return (
    <div className={styles.todoList}>
      TodoList
      <div className={styles.todoListContainer}>
        <TaskInput addTodo={addTodo} />
        <TaskList />
        <TaskList doneTaskList />
      </div>
    </div>
  )
}
