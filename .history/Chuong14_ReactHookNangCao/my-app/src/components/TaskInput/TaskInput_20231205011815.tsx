import { useState } from 'react'
import styles from './taskInput.module.scss'
import { Todo } from '../../@types/todo.type'
import connect, { ExtraInfoType } from '../../HOC/connect'

interface TaskInputProps extends ExtraInfoType {
  addTodo: (name: string) => void
  currentTodo: Todo | null
  editTodo: (name: string) => void
  finishedTodo: () => void
}
function TaskInput(props: TaskInputProps) {
  const { addTodo, currentTodo, editTodo, finishedTodo } = props
  const [name, setName] = useState<string>('')
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (currentTodo) {
      finishedTodo()
      if (name) {
        setName('')
      }
    } else {
      addTodo(name)
      setName('')
    }
  }
  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    if (currentTodo) {
      editTodo(value)
    } else {
      setName(value)
    }
  }
  return (
    <div className='mb-2'>
      <h1 className={styles.title}>To do list typescipt</h1>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type='text'
          placeholder='caption goes here'
          value={currentTodo ? currentTodo.name : name}
          onChange={onChangeInput}
        />
        <button type='submit'>{currentTodo ? '✔️' : '➕'}</button>
      </form>
    </div>
  )
}
export default connect(TaskInput)
