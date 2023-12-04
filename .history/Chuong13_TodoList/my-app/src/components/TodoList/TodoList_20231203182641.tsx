import React from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
export default function TodoList() {
  const { todos, setTodos } = useState<Todo[]>([])

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id: new Date().toISOString()
    }
    setTodos((prev) => [...prev, todo])
  return (
    <div className={styles.todoList}>
      TodoList
      <div className={styles.todoListContainer}>
        <TaskInput />
        <TaskList />
        <TaskList doneTaskList />
      </div>
    </div>
  )
}
