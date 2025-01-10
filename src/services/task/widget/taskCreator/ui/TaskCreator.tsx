import { SelectStatus } from '@/services/task/features/selectStatus'
import styles from './styles/TaskCreator.module.css'
import { TaskInput } from '@/services/task/entities/taskInput'
import { AddTask } from '@/services/task/features/addTask'
import { useCustomState } from '@/common/shared/lib'
import { EditorTaskContext } from '@/services/task/shared/lib'

export const TaskCreator = () => {
    const defaultTask: Task = {
        id: null,
        number: null,
        status: 'todo',
        name: '',
    }

    const defaultState = useCustomState({
        isEdit: false,
        task: defaultTask,
    })
    return (
        <div className={styles.task}>
            <EditorTaskContext.Provider value={defaultState}>
                <div className={styles.cell} />
                <div className={styles.cell}>
                    <TaskInput></TaskInput>
                </div>
                <div className={styles.cell}>
                    <SelectStatus></SelectStatus>
                </div>
                <div className={styles.cell}>
                    <AddTask></AddTask>
                </div>
            </EditorTaskContext.Provider>
        </div>
    )
}