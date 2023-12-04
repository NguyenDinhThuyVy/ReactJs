import { useState } from 'react'
import styles from './taskInput.module.scss'

interface TaskInputProps {
  addTodo: (name: string) => void
}
export default function TaskInput(props: TaskInputProps) {
  const { addTodo } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = () => {
    addTodo(name)
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {}
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list typescipt</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input type='text' placeholder='caption goes here' value={name} onChange={} />
        <button type='submit'>➕</button>
      </form>
    </div>
  )
}
