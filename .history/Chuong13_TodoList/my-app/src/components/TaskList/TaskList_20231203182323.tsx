import { useState } from 'react'
import styles from './taskList.module.scss'
import { Todo } from '../../@types/todo.type'
interface TaskListProps {
  doneTaskList?: boolean
}
export default function TaskList(props: TaskListProps) {
  const { doneTaskList } = props
  const { todos, setTodos } = useState<Todo[]>([])

  const addTodo = (name: string) => {
    const todo: Todo = {
      name,
      done: false,
      id
    }
    setTodos()
  }
  return (
    <div className='mb-2'>
      <h2 className={styles.title}>{doneTaskList ? 'Hoàn Thành' : 'Chưa Hoàn Thành'}</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className={styles.taskCheckbox} />
          <span className={styles.taskName}>Học Bài</span>
          <div className={styles.taskActions}>
            <button className={styles.taskBtn}>✏️</button>
            <button className={styles.taskBtn}>🗑️</button>
          </div>
        </div>
      </div>
    </div>
  )
}
