import { useState } from 'react'
import styles from './taskList.module.scss'
import { Todo } from '../../@types/todo.type'
interface TaskListProps {
  doneTaskList?: boolean
  todos: Todo[]
}
export default function TaskList(props: TaskListProps) {
  const { doneTaskList, todos } = props

  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn Thành' : 'Chưa Hoàn Thành'}</h2>
      <div className={styles.tasks}>
        {todos.map((todo) => (
          <div className={styles.task} key={todo.id}>
            <input type='checkbox' className={styles.taskCheckbox} />
            <span className={styles.taskName}>Học Bài</span>
            <div className={styles.taskActions}>
              <button className={styles.taskBtn}>✏️</button>
              <button className={styles.taskBtn}>🗑️</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
