import styles from './taskList.module.scss'
export default function TaskList() {
  return (
    <div>
      <h2 className={styles.title}>Hoàn Thành</h2>
      <div className={styles.tasks}>
        <div className={styles.task}></div>
      </div>
    </div>
  )
}
