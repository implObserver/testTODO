import styles from './styles/MainPage.module.css'
import { TaskList } from '@/services/task/gadget/taskList'

export const MainPage = () => {
    return (
        <div className={styles.page__main}>
            <TaskList></TaskList>
        </div>
    )
}