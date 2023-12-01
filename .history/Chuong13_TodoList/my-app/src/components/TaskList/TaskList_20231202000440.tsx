import styles from './taskList.module.scss'
export default function TaskList() {
  return (
    <div>
      <h2 className={styles.title}>Hoàn Thành</h2>
      <div className={styles.tasks}>
        <div className={styles.task}>
          <input type='checkbox' className='taskCheckbox' />
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
