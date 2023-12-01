import React from 'react'
import styles from './todoList.module.scss'
import TaskInput from '../TaskInput'
import TaskList from '../TaskList'
export default function TodoList() {
  return (
    <div>
      TodoList
      <TaskInput />
      <TaskList />
    </div>
  )
}
